import React from "react";

const neuralNets = [
  { name: "ChatGPT", url: "https://chat.openai.com/" },
  { name: "grok", url: "https://x.ai/" },
  { name: "DeepSeek", url: "https://www.deepseek.com/" },
  { name: "Perplexity", url: "https://www.perplexity.ai/" },
  { name: "Gemini", url: "https://gemini.google.com/" },
  { name: "n8n.io", url: "https://n8n.io/" },
  { name: "lovable.dev", url: "https://lovable.dev/" },
  { name: "cursor.com", url: "https://www.cursor.com/" },
];

const cards = [
  {
    title: "РАБОТАЕМ",
    text: "со всеми компаниями и с каждым: b2b, b2g, b2c, b2b2c.",
    color: "white",
  },
  {
    title: "ДЕЛАЕМ",
    text: (
      <>
        индивидуальный дизайн<br />
        персонально для каждого.
      </>
    ),
    color: "purple",
  },
  {
    title: "НАЧИНАЕМ",
    text: "разработку после согласованных целей и говорим с вами на одном, понятном каждому, языке.",
    color: "green",
  },
  {
    title: "ЗАПУСКАЕМ",
    text: "разработку с нуля, знаем технические особенности «чёрных ящиков».",
    color: "purple",
  },
  {
    title: "ГОТОВЫ",
    text: "принимать участие в комплексных решениях и современных проектах.",
    color: "green",
  },
  {
    title: "ДЕЛАЕМ",
    text: "интеграции с различными сервисами: CRM, PowerBI, Telegram и др.",
    color: "white",
  },
];

export default function Tech() {
  return (
    <section className="bg-[#0B0B0B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок и подзаголовок */}
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-6xl font-extrabold text-[#DBFE01]">используем</h2>
          <p className="text-right text-gray-300 max-w-xs">
            Все передовые нейросети
            <br /> для решения любых задач
          </p>
        </div>

        {/* Нейросети */}
        <div className="flex flex-wrap gap-3 mb-10">
          {neuralNets.map((net, index) => (
            <a
              key={index}
              href={net.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium shadow hover:bg-gray-200 transition"
            >
              {net.name}
            </a>
          ))}
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 flex flex-col justify-between min-h-[300px] ${
                card.color === "purple"
                  ? "bg-[#5940FE] text-white"
                  : card.color === "green"
                  ? "bg-[#DBFE01] text-black"
                  : "bg-white text-black"
              }`}
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
