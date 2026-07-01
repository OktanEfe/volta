"use client";

import { useState } from "react";
import menuData from "@/data/menu.json";
import RecommendationCard from "./RecommendationCard";

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Şu an nasıl hissediyorsun?",
    options: [
      { label: "Enerjiye ihtiyacım var", value: "energetic" },
      { label: "Sakin ve dingin", value: "calm" },
      { label: "Biraz yorgunum", value: "tired" },
      { label: "Mutlu ve keyifli", value: "happy" },
    ],
  },
  {
    id: 2,
    question: "Sıcak mı soğuk mu?",
    options: [
      { label: "Sıcak içecek", value: "hot" },
      { label: "Soğuk içecek", value: "cold" },
      { label: "Farketmez", value: "any" },
    ],
  },
  {
    id: 3,
    question: "Kafein seviyesi?",
    options: [
      { label: "Güçlü kahve", value: "strong" },
      { label: "Orta", value: "medium" },
      { label: "Hafif veya kafeinsiz", value: "light" },
    ],
  },
  {
    id: 4,
    question: "Bir şeyler yemek ister misin?",
    options: [
      { label: "Evet, doyurucu bir şey", value: "hearty" },
      { label: "Hafif bir şey", value: "light_food" },
      { label: "Sadece içecek", value: "none" },
    ],
  },
];

function getAllItems() {
  const all: Record<number, { id: number; name: string; price: number; description: string; tags: string[] }> = {};
  for (const cat of menuData.categories) {
    for (const item of cat.items) {
      all[item.id] = item;
    }
  }
  return all;
}

function getRecommendation(answers: Record<number, string>) {
  const mood = answers[1];
  const temp = answers[2];
  const caffeine = answers[3];
  const food = answers[4];

  let drinkId: number;

  if (caffeine === "strong") {
    if (temp === "cold" || (temp === "any" && (mood === "energetic" || mood === "tired"))) {
      drinkId = 6; // Cold Brew
    } else {
      drinkId = 1; // Espresso
    }
  } else if (caffeine === "medium") {
    if (temp === "cold") {
      drinkId = 7; // Iced Latte
    } else if (mood === "calm" || mood === "happy") {
      drinkId = 2; // Cortado
    } else if (mood === "tired") {
      drinkId = 3; // Flat White
    } else {
      drinkId = 5; // Cappuccino
    }
  } else {
    drinkId = 8; // Matcha Latte (light/kafeinsiz)
  }

  let foodId: number | null = null;
  if (food === "hearty") {
    foodId = mood === "tired" ? 10 : 9; // Mantar Tost veya Avokado Toast
  } else if (food === "light_food") {
    foodId = mood === "happy" ? 12 : 11; // Brownie veya Granola Kase
  }

  return { drinkId, foodId };
}

export default function QuizEngine() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const items = getAllItems();
  const q = questions[current];
  const isLast = current === questions.length - 1;

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [q.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (isLast) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function handleRetry() {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setDone(false);
  }

  if (done) {
    const { drinkId, foodId } = getRecommendation(answers);
    const drink = items[drinkId];
    const food = foodId ? items[foodId] : null;
    return <RecommendationCard drink={drink} food={food} onRetry={handleRetry} />;
  }

  const progress = ((current) / questions.length) * 100;

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      <div>
        <div className="flex justify-between text-xs text-[#3D1E0E]/60 mb-2">
          <span>Soru {current + 1} / {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-[#E8DCC8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C8996A] rounded-full transition-all duration-500"
            style={{ width: progress + "%" }}
          />
        </div>
      </div>

      <h2
        className="text-2xl sm:text-3xl font-bold text-[#1C0F07] leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {q.question}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className={
              "px-4 py-4 rounded-xl border-2 text-left text-sm font-medium transition-all " +
              (selected === opt.value
                ? "border-[#C8996A] bg-[#C8996A]/10 text-[#1C0F07]"
                : "border-[#E8DCC8] bg-[#FDFAF6] text-[#3D1E0E] hover:border-[#C8996A]/50")
            }
          >
            {opt.label}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!selected}
        className={
          "w-full py-3.5 rounded-xl text-sm font-semibold transition-all " +
          (selected
            ? "bg-[#1C0F07] text-[#FDFAF6] hover:bg-[#3D1E0E]"
            : "bg-[#E8DCC8] text-[#3D1E0E]/40 cursor-not-allowed")
        }
      >
        {isLast ? "Sonucu Gör" : "Devam Et"}
      </button>
    </div>
  );
}
