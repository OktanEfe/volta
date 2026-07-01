export default function HakkimizdaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero */}
      <div className="max-w-2xl mb-14">
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#1C0F07] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Volta Nasıl Başladı?
        </h1>
        <p className="text-[#3D1E0E]/80 text-lg leading-relaxed">
          2019&apos;da iki kahve tutkununun Kadıköy&apos;deki küçük dükkanı olarak başlayan Volta, bugün
          İstanbul&apos;un en sevilen specialty coffee noktalarından biri. Her sabah taze demlenen
          kahvelerimiz, günlük hazırlanan atıştırmalıklarımız ve misafirlerimize verdiğimiz değer —
          bunlar değişmeyen üç şeyimiz.
        </p>
      </div>

      {/* Values */}
      <div className="mb-14">
        <h2
          className="text-2xl font-bold text-[#1C0F07] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Değerlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Kalite",
              desc: "Her fincan, her tabak. Tedarikçilerimizi bizzat ziyaret eder, kavrulma tarihlerini takip eder, reçeteleri sürekli iyileştiririz.",
            },
            {
              title: "Şeffaflık",
              desc: "Ne içtiğinizi bilmenizi isteriz. Kahvenin kökeni, işleme yöntemi, tasting notları — her şey açık.",
            },
            {
              title: "Samimiyet",
              desc: "Volta'da sizi karşılayan kişi, kariyerini bu işe adamış biri. Sorularınızı sorun, hikayenizi paylaşın.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-[#FDFAF6] border border-[#E8DCC8] rounded-2xl p-6">
              <h3
                className="text-xl font-semibold text-[#1C0F07] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {v.title}
              </h3>
              <p className="text-sm text-[#3D1E0E]/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Disclosure */}
      <div className="bg-[#1C0F07] text-[#FDFAF6] rounded-2xl p-8 sm:p-10">
        <h2
          className="text-2xl font-bold text-[#C8996A] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Volta&apos;da Yapay Zeka
        </h2>
        <div className="space-y-3 text-[#E8DCC8]/80 text-sm leading-relaxed max-w-2xl">
          <p>
            Sitemizde iki AI özelliği var: quiz motoru ve chatbot. İkisi de yalnızca Volta&apos;ya ait
            bilgilerle çalışır — internete erişimi yoktur, genel bilgi vermez.
          </p>
          <p>
            <strong className="text-[#C8996A]">Quiz motoru</strong> saf kod mantığıyla çalışır;
            cevaplarına göre menüdeki gerçek ürünlerden birini önerir. Hiçbir zaman menü dışı bir
            şey önermez.
          </p>
          <p>
            <strong className="text-[#C8996A]">Volta Asistan</strong> (chatbot), yalnızca Volta&apos;nın
            adres, saat, menü ve politikalarını bilir. Emin olamadığı her konuda sizi kasaya
            yönlendirir.
          </p>
          <p>
            Volta&apos;da AI çalışanlarımızın yerini almak için değil, sizi daha iyi tanımak için
            burada. Her zaman gerçek bir insanla konuşmayı tercih edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
