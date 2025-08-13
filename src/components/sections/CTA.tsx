import { Send, MessageCircle } from "lucide-react";
import "./CTA.css";
import { useOrder } from "@/context/OrderContext";

const CTA = () => {
  const { open } = useOrder();

  return (
    <>
      {/* Жёлто-зелёный блок */}
      <section className="bg-[#d4ff00] py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
          пора <span className="underline unbounded">внедрять ии</span>
          <br />
          в свой бизнес
        </h2>
        <p className="mt-4 text-lg text-black">+7 985-555-17-79</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://t.me/ai_tech_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-[#5940FE] text-white p-3 rounded-full transition-colors"
          >
            <Send size={20} />
          </a>
          <a
            href="https://wa.me/79855551779"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-[#5940FE] text-white p-3 rounded-full transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </section>

      {/* Чёрный подвал */}
      <footer id="contacts" className="bg-black text-white py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 text-left">
          {/* Левая колонка */}
          <div>
            <p className="text-sm">© 2025 ЭйАй Тех</p>
            <a href="#portfolio" className="block mt-2 text-sm hover:underline">
              ИИ в медицине
            </a>
            <a
              href="https://www.meshalkin.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-sm hover:underline"
            >
              Клиника Мешалкина
            </a>
          </div>

          {/* Центр */}
          <div className="ml-19 flex flex-col items-center">
            <a href="#services" className="block text-sm hover:underline">Услуги</a>
            <a href="#about" className="block text-sm hover:underline">О нас</a>
            <a href="#portfolio" className="block text-sm hover:underline">Портфолио</a>
            <a href="#blog" className="block text-sm hover:underline">Блог</a>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col items-start md:items-end">
            <a
              href="/policy.pdf"
              download
              className="text-sm hover:underline mb-3"
            >
              Политика конфиденциальности
            </a>
            {/* Кнопка открытия модалки заказа */}
            <button
              onClick={open}
              className="bg-[#d4ff00] hover:bg-[#5940FE] text-black font-bold px-6 py-2 rounded-full transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTA;
