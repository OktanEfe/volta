"use client";

import { useState } from "react";

export default function AIDisclosureBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#E8DCC8] border border-[#C8996A]/40 rounded-lg px-3 py-2 flex items-start gap-2 text-xs text-[#3D1E0E]">
      <span className="shrink-0 mt-0.5">&#x1F916;</span>
      <span className="leading-relaxed">
        <strong>Yapay Zeka Asistanı</strong> — Volta Asistan, yalnızca Volta Coffee&apos;ye ait
        bilgilerle çalışan bir AI sistemidir. Genel internet bilgisine erişimi yoktur.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="shrink-0 ml-auto text-[#3D1E0E]/50 hover:text-[#3D1E0E] transition-colors"
        aria-label="Kapat"
      >
        &#x2715;
      </button>
    </div>
  );
}
