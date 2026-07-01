import Link from "next/link";

interface RecommendationItem {
  name: string;
  price: number;
  description: string;
  tags: string[];
}

interface RecommendationCardProps {
  drink: RecommendationItem;
  food: RecommendationItem | null;
  onRetry: () => void;
}

export default function RecommendationCard({ drink, food, onRetry }: RecommendationCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      <div className="text-center">
        <p className="text-sm text-[#C8996A] uppercase tracking-widest font-medium mb-1">
          Senin için önerimiz
        </p>
        <h2
          className="text-4xl font-bold text-[#1C0F07]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {drink.name}
        </h2>
        <p className="text-[#C8996A] font-bold text-xl mt-1">{drink.price} TL</p>
        <p className="text-[#3D1E0E]/70 text-sm mt-2 leading-relaxed">{drink.description}</p>
        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
          {drink.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#E8DCC8] text-[#3D1E0E]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {food && (
        <div className="w-full bg-[#FDFAF6] border border-[#E8DCC8] rounded-xl p-4">
          <p className="text-xs text-[#C8996A] uppercase tracking-wider font-medium mb-2">
            Yanına yakışır
          </p>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3
                className="text-lg font-semibold text-[#1C0F07]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {food.name}
              </h3>
              <p className="text-xs text-[#3D1E0E]/70 mt-0.5">{food.description}</p>
            </div>
            <span className="text-[#C8996A] font-bold text-sm whitespace-nowrap shrink-0">
              {food.price} TL
            </span>
          </div>
        </div>
      )}

      <div className="flex gap-3 w-full">
        <Link
          href="/menu"
          className="flex-1 text-center bg-[#1C0F07] text-[#FDFAF6] rounded-xl py-3 text-sm font-medium hover:bg-[#3D1E0E] transition-colors"
        >
          Menünün Tamamı
        </Link>
        <button
          onClick={onRetry}
          className="flex-1 bg-[#E8DCC8] text-[#1C0F07] rounded-xl py-3 text-sm font-medium hover:bg-[#C8996A]/30 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
