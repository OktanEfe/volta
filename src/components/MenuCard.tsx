interface MenuCardProps {
  name: string;
  price: number;
  description: string;
  tags: string[];
}

export default function MenuCard({ name, price, description, tags }: MenuCardProps) {
  return (
    <div className="bg-[#FDFAF6] border border-[#E8DCC8] rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <h3
          className="text-lg font-semibold text-[#1C0F07] leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h3>
        <span className="text-[#C8996A] font-bold text-sm whitespace-nowrap shrink-0">
          {price} TL
        </span>
      </div>

      <p className="text-sm text-[#3D1E0E]/70 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-[#E8DCC8] text-[#3D1E0E]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
