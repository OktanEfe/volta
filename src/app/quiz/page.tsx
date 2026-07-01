import QuizEngine from "@/components/QuizEngine";

export default function QuizPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-lg mx-auto">
        <div className="mb-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#1C0F07] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sana Özel Öneri
          </h1>
          <p className="text-[#3D1E0E]/70">
            4 soruyla ruh haline en uygun içeceği bulalım.
          </p>
        </div>
        <QuizEngine />
      </div>
    </div>
  );
}
