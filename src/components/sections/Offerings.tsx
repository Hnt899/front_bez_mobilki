import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import knotHero from "@/assets/knot-hero.png";
import knotSquare from "@/assets/knot-square.png";
import { useOrder } from "@/context/OrderContext";

const cards = [
  {
    title: "Разработка AI-решений",
    desc: "От идеи до продакшена: ML, NLP, CV и MLOps.",
    img: knotHero,
    extra: "Проектирование архитектуры, прототипы, метрики качества, запуск."
  },
  {
    title: "Платформы и инструменты",
    desc: "Интеграции, пайплайны, аналитика и автоматизация.",
    img: knotSquare,
    extra: "CRM/BI интеграции, ETL, DataOps, мониторинг и алерты."
  },
  {
    title: "Специализированные AI-услуги",
    desc: "Адаптация под домен и бизнес-процессы.",
    img: knotHero,
    extra: "Онтологии, доменные датасеты, безопасные развертывания."
  },
  {
    title: "Исследования и разработка",
    desc: "Прототипирование новых моделей и подходов.",
    img: knotSquare,
    extra: "R&D эксперименты, бенчмарки, PoC → MVP."
  }
];

function useTypewriter(text: string, speed = 30) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const Offerings = () => {
  const [active, setActive] = useState(0);
  const typedExtra = useTypewriter(cards[active]?.extra || "", 35);
  const containerRef = useRef<HTMLDivElement>(null);
  const { open } = useOrder();

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActive(-1);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#0F0F0F] relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#DBFE01]">
            что мы предлагаем
          </h2>
          <div className="flex gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="p-2 rounded-full bg-black text-white hover:bg-[#DBFE01] hover:text-black transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="p-2 rounded-full bg-black text-white hover:bg-[#DBFE01] hover:text-black transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="flex flex-wrap justify-center gap-6">
          {cards.map((c, i) => {
            const isSelected = active === i;
            const isWhite = c.img === knotSquare;

            return (
              <article
                key={i}
                onClick={() => setActive(i)}
                style={{
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top"
                }}
                className={`cursor-pointer flex flex-col justify-end rounded-3xl shadow-lg min-h-[460px] w-[300px]
                  ${isWhite ? "border-2 border-[#5940FE]" : "border-2 border-[#DBFE01]"}
                  ${isSelected ? "scale-105" : "scale-100"}
                  transition-all duration-300 overflow-hidden relative
                `}
              >
                <div
                  className={`absolute bottom-0 left-0 w-full p-6 ${
                    isWhite ? "bg-white/80 text-black" : "bg-black/70 text-white"
                  }`}
                >
                  <h3 className="text-lg font-extrabold mb-2">{c.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{c.desc}</p>

                  {isSelected && (
                    <p className="text-sm mb-4">
                      {typedExtra}
                      <span className="animate-blink">|</span>
                    </p>
                  )}

                  <button
                    onClick={(e) => { e.stopPropagation(); open(); }}
                    className={`inline-block px-5 py-2 rounded-full font-bold transition-colors duration-300
                      ${isWhite
                        ? "bg-[#5940FE] text-white hover:bg-[#DBFE01] hover:text-black"
                        : "bg-[#DBFE01] text-black hover:bg-[#5940FE] hover:text-white"
                      }
                    `}
                  >
                    Оставить заявку
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
