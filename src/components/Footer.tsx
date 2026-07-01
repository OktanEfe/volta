import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C0F07] text-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Volta
            </div>
            <p className="text-[#C8996A] text-sm">Specialty coffee. Kadıköy.</p>
          </div>

          <div>
            <h3 className="text-[#C8996A] text-xs font-semibold uppercase tracking-wider mb-4">
              Sayfalar
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/menu", label: "Menü" },
                { href: "/quiz", label: "Quiz" },
                { href: "/hakkimizda", label: "Hakkımızda" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#E8DCC8] hover:text-[#C8996A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#C8996A] text-xs font-semibold uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <address className="not-italic text-sm text-[#E8DCC8] space-y-2">
              <p>Bağdat Caddesi No:142</p>
              <p>Kadıköy, İstanbul</p>
              <p className="pt-2 text-[#C8996A]">Her gün 08:00 — 22:00</p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3D1E0E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-[#E8DCC8]/60">
          &copy; 2025 Volta Coffee. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
