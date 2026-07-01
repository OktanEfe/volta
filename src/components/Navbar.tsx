"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/menu", label: "Menü" },
  { href: "/quiz", label: "Quiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-[#F5F0E8] border-b border-[#E8DCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-playfair text-2xl font-bold text-[#1C0F07] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Volta
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "text-sm font-medium transition-colors " +
                  (pathname === l.href
                    ? "text-[#C8996A]"
                    : "text-[#3D1E0E] hover:text-[#C8996A]")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-[#1C0F07] hover:bg-[#E8DCC8] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E8DCC8] bg-[#F5F0E8] px-4 pb-4 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                "block py-3 text-sm font-medium border-b border-[#E8DCC8] last:border-0 transition-colors " +
                (pathname === l.href
                  ? "text-[#C8996A]"
                  : "text-[#3D1E0E] hover:text-[#C8996A]")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
