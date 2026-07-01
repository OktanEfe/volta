import MenuCard from "@/components/MenuCard";
import menuData from "@/data/menu.json";

export default function MenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#1C0F07] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Menü
        </h1>
        <p className="text-[#3D1E0E]/70">Tüm fiyatlar KDV dahildir.</p>
      </div>

      <div className="space-y-12">
        {menuData.categories.map((category) => (
          <section key={category.name}>
            <h2
              className="text-2xl font-bold text-[#1C0F07] mb-6 pb-3 border-b border-[#E8DCC8]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <MenuCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  tags={item.tags}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
