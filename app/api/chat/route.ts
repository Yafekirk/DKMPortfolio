import { buildSystemPrompt } from "@/lib/chat/system-prompt";
import {
  createGeminiProvider,
  GEMINI_CHAT_MODEL,
  isGeminiConfigured,
} from "@/lib/gemini";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";

export const maxDuration = 60;

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 4000;

type ChatRequestBody = {
  messages?: UIMessage[];
};

function getTextLength(message: UIMessage): number {
  return message.parts
    .filter((part) => part.type === "text")
    .reduce((total, part) => total + part.text.length, 0);
}

export async function POST(request: Request) {
  try {
    if (!isGeminiConfigured()) {
      return Response.json(
        {
          error:
            "DKM AI Assistant is not configured yet. Please add GEMINI_API_KEY to the environment variables.",
        },
        { status: 503 },
      );
    }

    const ip = getClientIp(request);
    const rate = checkRateLimit({
      key: `chat:${ip}`,
      limit: 20,
      windowMs: 60_000,
    });

    if (!rate.allowed) {
      return Response.json(
        {
          error:
            "I'm receiving too many requests right now. Please wait a moment and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rate.retryAfterSeconds),
          },
        },
      );
    }

    const body = (await request.json()) as ChatRequestBody;
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Messages are required." },
        { status: 400 },
      );
    }

    const recentMessages = messages.slice(-MAX_MESSAGES);
    const oversized = recentMessages.some(
      (message) => getTextLength(message) > MAX_MESSAGE_CHARS,
    );

    if (oversized) {
      return Response.json(
        {
          error:
            "That message is too long. Please keep questions under a few paragraphs.",
        },
        { status: 400 },
      );
    }

    const google = createGeminiProvider();

    const result = streamText({
      model: google(GEMINI_CHAT_MODEL),
      system: buildSystemPrompt(),
      messages: await convertToModelMessages(recentMessages),
      temperature: 0.6,
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    console.error("[DKM AI Assistant]", error);

    const message =
      error instanceof Error ? error.message.toLowerCase() : "";

    if (
      message.includes("rate") ||
      message.includes("quota") ||
      message.includes("429")
    ) {
      return Response.json(
        {
          error:
            "I'm receiving too many requests right now. Please wait a moment and try again.",
        },
        { status: 429 },
      );
    }

    return Response.json(
      {
        error:
          "DKM AI Assistant is temporarily unavailable. Please try again shortly, or contact Dustin directly.",
      },
      { status: 500 },
    );
  }
}
