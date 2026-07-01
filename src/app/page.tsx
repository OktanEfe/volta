import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import menuData from "@/data/menu.json";

export default function HomePage() {
  const previewItems = [
    ...menuData.categories[0].items.slice(0, 2),
    ...menuData.categories[1].items.slice(0, 2),
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1C0F07] leading-[1.1] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Her yudum bir hikaye.
              </h1>
              <p className="text-[#3D1E0E]/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                Kadıköy&apos;ün kalbinde specialty coffee deneyimi. Tek origin kahveler, günlük taze atıştırmalıklar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center bg-[#1C0F07] text-[#FDFAF6] px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#3D1E0E] transition-colors"
                >
                  Menüyü Gör
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-[#1C0F07] text-[#1C0F07] px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#1C0F07] hover:text-[#FDFAF6] transition-colors"
                >
                  Önerini Al
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full bg-[#E8DCC8]" />
                <div className="absolute inset-8 rounded-full bg-[#C8996A]/20 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-40 h-40 text-[#C8996A]" fill="currentColor">
                    <ellipse cx="60" cy="80" rx="35" ry="8" opacity="0.3" />
                    <rect x="30" y="45" width="60" height="35" rx="8" fill="currentColor" />
                    <path d="M 30 50 Q 60 35 90 50" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
                    <path d="M 50 45 Q 50 30 60 28 Q 70 26 70 18 Q 70 10 65 8" stroke="#C8996A" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
                    <rect x="22" y="65" width="8" height="18" rx="4" fill="currentColor" opacity="0.5" />
                    <rect x="90" y="65" width="8" height="18" rx="4" fill="currentColor" opacity="0.5" />
                    <rect x="25" y="83" width="70" height="6" rx="3" fill="currentColor" opacity="0.6" />
                    <rect x="20" y="89" width="80" height="4" rx="2" fill="currentColor" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#FDFAF6] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "☕",
                title: "Tek Origin Kahveler",
                desc: "Dünyadan özenle seçilmiş, kavrulma tarihi belli mikro lot kahveler.",
              },
              {
                icon: "🌿",
                title: "Günlük Taze",
                desc: "Her sabah hazırlanan atıştırmalıklar — hiçbir şey bir gün önce yapılmaz.",
              },
              {
                icon: "✨",
                title: "AI Öneri",
                desc: "4 soruda ruh haline göre kişiselleştirilmiş menü önerisi.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#F5F0E8] rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3
                  className="text-lg font-semibold text-[#1C0F07] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-[#3D1E0E]/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA Banner */}
      <section className="bg-[#1C0F07] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#FDFAF6] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bugün ne içmek istiyorsun?
          </h2>
          <p className="text-[#C8996A] text-lg mb-8">4 soruda sana özel öneri.</p>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center bg-[#C8996A] text-[#1C0F07] px-8 py-4 rounded-xl text-sm font-bold hover:bg-[#E8DCC8] transition-colors"
          >
            Quize Başla
          </Link>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1C0F07]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Öne Çıkanlar
            </h2>
            <Link
              href="/menu"
              className="text-sm text-[#C8996A] font-medium hover:text-[#3D1E0E] transition-colors"
            >
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previewItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
