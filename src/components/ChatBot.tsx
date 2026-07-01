"use client";

import { useState, useRef, useEffect } from "react";
import { sendMessageToClaude } from "@/lib/claude";
import AIDisclosureBanner from "./AIDisclosureBanner";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const QUICK_REPLIES = ["Menü", "Saatler", "Konum", "Hakkımızda"];

const WELCOME_TEXT =
  "Merhaba! Ben Volta Asistan ☕ Size şu konularda yardımcı olabilirim:\n\n• ☕ Menü ve fiyatlar\n• 🕒 Çalışma saatleri\n• 📍 Konum ve ulaşım\n• ℹ️ Kafemiz hakkında\n\nAşağıdaki butonlardan seçebilir ya da doğrudan yazabilirsiniz.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: WELCOME_TEXT },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hasUserMessage = messages.some((m) => m.role === "user");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendText(text: string) {
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const reply = await sendMessageToClaude(text);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Şu an bağlanamıyorum, lütfen tekrar dene." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSend() {
    sendText(input.trim());
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] bg-[#FDFAF6] border border-[#E8DCC8] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-[#1C0F07] px-4 py-3 flex items-center justify-between shrink-0">
            <div>
              <div
                className="text-[#FDFAF6] font-semibold text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Volta Asistan
              </div>
              <div className="text-[#C8996A] text-xs">Genellikle anında cevap verir</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#FDFAF6]/60 hover:text-[#FDFAF6] transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-3 pt-2 shrink-0">
            <AIDisclosureBanner />
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={"flex " + (m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={
                    "max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line " +
                    (m.role === "user"
                      ? "bg-[#1C0F07] text-[#FDFAF6] rounded-br-sm"
                      : "bg-[#E8DCC8] text-[#1C0F07] rounded-bl-sm")
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {!hasUserMessage && (
              <div className="flex flex-wrap gap-2 justify-start">
                {QUICK_REPLIES.map((label) => (
                  <button
                    key={label}
                    onClick={() => sendText(label)}
                    disabled={loading}
                    className="px-3 py-1.5 rounded-full border border-[#C8996A] text-[#1C0F07] text-xs font-medium bg-[#FDFAF6] hover:bg-[#C8996A]/10 transition-colors disabled:opacity-40"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#E8DCC8] text-[#1C0F07] px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-3 border-t border-[#E8DCC8] shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-[#F5F0E8] border border-[#E8DCC8] rounded-xl px-3 py-2 text-sm text-[#1C0F07] placeholder-[#3D1E0E]/40 outline-none focus:border-[#C8996A] transition-colors"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-[#1C0F07] text-[#FDFAF6] rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#3D1E0E] transition-colors disabled:opacity-40"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 bg-[#1C0F07] text-[#FDFAF6] rounded-full shadow-lg hover:bg-[#3D1E0E] transition-colors flex items-center justify-center"
        aria-label="Sohbeti aç"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
