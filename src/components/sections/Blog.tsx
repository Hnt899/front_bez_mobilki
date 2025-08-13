import { ArrowUpRight } from "lucide-react";
import deepImg from "@/assets/deepseek.png";
import perplexityImg from "@/assets/perplexity.png";
import lovableImgClean from "@/assets/lovable.png";
import cursorImgClean from "@/assets/cursor.png";
import claudeImgClean from "@/assets/claude.png";
import deeplImg from "@/assets/deepl.jpg";

const posts = [
  { title: "Perplexity — поиск ИИ-ответов", href: "https://www.perplexity.ai", date: "01.01.2025", tag: "ИИ", desc: "Поиск и ответы с использованием искусственного интеллекта", image: perplexityImg, big: true },
  { title: "DeepSeek — глубокий поиск", href: "https://deepseek.com", date: "01.01.2025", tag: "ИИ", desc: "Продвинутая аналитика и поиск по данным", image: deepImg },
  { title: "Lovable — no-code платформа", href: "https://lovable.dev", date: "01.01.2025", tag: "ИИ", desc: "Быстрое создание приложений без кода", image: lovableImgClean },
  { title: "Cursor — AI-редактор кода", href: "https://cursor.com", date: "01.01.2025", tag: "ИИ", desc: "Интеллектуальный редактор кода с поддержкой ИИ", image: cursorImgClean },
  { title: "Claude — длинный контекст", href: "https://claude.ai", date: "01.01.2025", tag: "ИИ", desc: "Модель для рассуждений и обработки длинных текстов", image: claudeImgClean },
  { title: "DeepL — переводчик ИИ", href: "https://deepl.com", date: "01.01.2025", tag: "ИИ", desc: "Мощный переводчик с искусственным интеллектом", image: deeplImg }
];

const Blog = () => (
  <section id="blog" className="py-16 md:py-24">
    <div className="container mx-auto">
      <div className="flex items-start justify-between gap-6 mb-8">
        <h2 className="text-display text-5xl md:text-7xl font-extrabold text-[#c6ff00]">блог</h2>
        <aside className="hidden md:block max-w-md text-sm text-muted-foreground/90">
          Мы следим за тем, как развиваются технологии и куда стремится научный прогресс. Пробуем самые современные подходы и используем передовые нейросети.
        </aside>
      </div>

      <div className="grid md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-6">
        {posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group overflow-hidden rounded-3xl border border-gray-300 ${p.big ? "md:col-span-2 md:row-span-2" : ""}`}
            style={{
              backgroundImage: `url(${p.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Усиленная фиолетовая заливка */}
            <div className="absolute inset-0 bg-[#5940FE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Верхний блок с текстом */}
            <div
              className="absolute top-0 left-0 right-0 p-4 z-20 text-white flex flex-col"
              style={{
                textShadow: "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black"
              }}
            >
              <div className="flex items-center gap-3 text-sm mb-2">
                <span className="px-3 py-1 rounded-full bg-black/50">{p.tag}</span>
                <span className="text-white/80">{p.date}</span>
                <ArrowUpRight className="ml-auto opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="text-lg font-extrabold leading-snug">{p.title}</h3>
              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
