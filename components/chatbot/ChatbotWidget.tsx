"use client";

import { ChatMessageContent } from "@/components/chatbot/ChatMessageContent";
import {
  CHATBOT_NAME,
  FOLLOW_UP_SUGGESTIONS,
  SUGGESTED_QUESTIONS,
  WELCOME_MESSAGE,
} from "@/lib/chat/system-prompt";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUp,
  Check,
  Copy,
  Eraser,
  Maximize2,
  MessageCircle,
  Minimize2,
  Sparkles,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

const WELCOME_ID = "dkm-welcome";

function createWelcomeMessage(): UIMessage {
  return {
    id: WELCOME_ID,
    role: "assistant",
    parts: [{ type: "text", text: WELCOME_MESSAGE }],
  };
}

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
      }),
    [],
  );

  const { messages, sendMessage, status, error, setMessages, stop } = useChat({
    transport,
    messages: [createWelcomeMessage()],
  });

  const isBusy = status === "submitted" || status === "streaming";
  const showSuggestions =
    !hasInteracted &&
    messages.length <= 1 &&
    messages[0]?.id === WELCOME_ID;

  const showFollowUps =
    hasInteracted &&
    !isBusy &&
    messages.some((message) => message.role === "user");

  useEffect(() => {
    if (!isOpen || isMinimized) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isMinimized, status]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 180);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (!copiedId) return;
    const timer = window.setTimeout(() => setCopiedId(null), 1600);
    return () => window.clearTimeout(timer);
  }, [copiedId]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        setIsMinimized(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  async function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;

    setHasInteracted(true);
    setInput("");
    await sendMessage({ text: trimmed });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void handleSend(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSend(input);
    }
  }

  function handleClear() {
    stop();
    setMessages([createWelcomeMessage()]);
    setHasInteracted(false);
    setInput("");
  }

  async function handleCopy(messageId: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(messageId);
    } catch {
      setCopiedId(null);
    }
  }

  function openChat() {
    setIsOpen(true);
    setIsMinimized(false);
  }

  function closeChat() {
    setIsOpen(false);
    setIsMinimized(false);
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            ref={panelRef}
            key="chat-panel"
            role="dialog"
            aria-modal="true"
            aria-label={CHATBOT_NAME}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto flex h-[min(72vh,620px)] w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-2xl border border-border bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          >
            <header className="flex items-center justify-between gap-3 border-b border-border bg-[color-mix(in_srgb,var(--accent)_18%,var(--card))] px-4 py-3 dark:bg-[color-mix(in_srgb,var(--accent)_22%,#0f1a12)]">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient)] text-white shadow-[0_0_18px_var(--glow)]">
                  <Sparkles className="size-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-sm font-semibold text-foreground">
                    {CHATBOT_NAME}
                  </p>
                  <p className="truncate text-xs text-foreground-secondary">
                    Ask about Dustin Kirk Manalastas
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClear}
                  className="focus-ring rounded-lg p-2 text-foreground-secondary transition hover:bg-card hover:text-accent"
                  aria-label="Clear conversation"
                  title="Clear conversation"
                >
                  <Eraser className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  className="focus-ring rounded-lg p-2 text-foreground-secondary transition hover:bg-card hover:text-accent"
                  aria-label="Minimize chat"
                  title="Minimize"
                >
                  <Minimize2 className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={closeChat}
                  className="focus-ring rounded-lg p-2 text-foreground-secondary transition hover:bg-card hover:text-accent"
                  aria-label="Close chat"
                  title="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
            </header>

            <div
              className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
              aria-live="polite"
            >
              {messages.map((message) => {
                const text = getMessageText(message);
                if (!text && message.role === "assistant" && isBusy) {
                  return null;
                }

                const isUser = message.role === "user";

                return (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      isUser ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "group relative max-w-[88%] rounded-2xl px-3.5 py-2.5",
                        isUser
                          ? "rounded-br-md bg-[image:var(--gradient)] text-white"
                          : "rounded-bl-md border border-border bg-background-secondary text-foreground",
                      )}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap text-[0.925rem] leading-relaxed">
                          {text}
                        </p>
                      ) : (
                        <>
                          <ChatMessageContent content={text} />
                          {text ? (
                            <button
                              type="button"
                              onClick={() => handleCopy(message.id, text)}
                              className="focus-ring absolute -right-1 -top-1 rounded-full border border-border bg-card p-1.5 text-foreground-muted opacity-0 shadow-sm transition group-hover:opacity-100 focus-visible:opacity-100"
                              aria-label="Copy response"
                              title="Copy response"
                            >
                              {copiedId === message.id ? (
                                <Check className="size-3.5 text-accent" />
                              ) : (
                                <Copy className="size-3.5" />
                              )}
                            </button>
                          ) : null}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              {isBusy ? (
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl rounded-bl-md border border-border bg-background-secondary px-4 py-3"
                    aria-label="Assistant is typing"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:0ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:120ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:240ms]" />
                    </div>
                  </div>
                </div>
              ) : null}

              {error ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-700 dark:text-red-300">
                  {error.message ||
                    "DKM AI Assistant is temporarily unavailable. Please try again shortly."}
                </div>
              ) : null}

              {showSuggestions ? (
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-medium tracking-wide text-foreground-muted uppercase">
                    Suggested questions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => void handleSend(question)}
                        disabled={isBusy}
                        className="focus-ring rounded-full border border-border bg-card px-3 py-1.5 text-left text-xs text-foreground-secondary transition hover:border-accent hover:text-accent disabled:opacity-60"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {showFollowUps ? (
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-medium tracking-wide text-foreground-muted uppercase">
                    Follow-up ideas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FOLLOW_UP_SUGGESTIONS.slice(0, 3).map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => void handleSend(question)}
                        disabled={isBusy}
                        className="focus-ring rounded-full border border-border bg-card px-3 py-1.5 text-left text-xs text-foreground-secondary transition hover:border-accent hover:text-accent disabled:opacity-60"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-border bg-card/80 p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-border bg-input px-2.5 py-2 focus-within:border-accent">
                <label htmlFor="dkm-chat-input" className="sr-only">
                  Ask me anything about Dustin
                </label>
                <textarea
                  id="dkm-chat-input"
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Ask me anything about Dustin..."
                  className="max-h-28 min-h-[40px] flex-1 resize-none bg-transparent px-1.5 py-2 text-sm text-foreground outline-none placeholder:text-foreground-muted"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isBusy}
                  className="focus-ring mb-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient)] text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <ArrowUp className="size-4" />
                </button>
              </div>
              <p className="mt-2 px-1 text-[11px] text-foreground-muted">
                Enter to send · Shift + Enter for a new line
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && isMinimized ? (
          <motion.button
            key="minimized-chip"
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            onClick={() => setIsMinimized(false)}
            className="pointer-events-auto focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card/95 px-4 py-2 text-sm text-foreground shadow-[var(--shadow-soft)] backdrop-blur-md transition hover:border-accent"
            aria-label="Restore chat window"
          >
            <Sparkles className="size-4 text-accent" />
            {CHATBOT_NAME}
            <Maximize2 className="size-3.5 text-foreground-muted" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-auto group relative">
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-foreground opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-within:opacity-100">
          Ask about Dustin
        </span>
        <motion.button
          type="button"
          onClick={() => (isOpen ? closeChat() : openChat())}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="focus-ring relative flex size-14 items-center justify-center rounded-full bg-[image:var(--gradient)] text-white shadow-[0_0_28px_var(--glow)] transition"
          aria-label={isOpen ? "Close DKM AI Assistant" : "Open DKM AI Assistant"}
          aria-expanded={isOpen && !isMinimized}
        >
          <span className="absolute inset-0 animate-pulse rounded-full bg-accent/20" />
          {isOpen && !isMinimized ? (
            <X className="relative size-6" />
          ) : (
            <MessageCircle className="relative size-6" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
