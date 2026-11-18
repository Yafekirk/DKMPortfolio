import { createGoogleGenerativeAI } from "@ai-sdk/google";

/** Model verified available for current Gemini API keys via generateContent. */
export const GEMINI_CHAT_MODEL = "gemini-3-flash-preview";

export function createGeminiProvider() {
  return createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
}

export function isGeminiConfigured() {
  return Boolean(process.env.GEMINI_API_KEY);
}
