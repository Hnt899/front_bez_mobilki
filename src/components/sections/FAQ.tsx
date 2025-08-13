import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "./faq-animations.css"; // должен быть в этой же папке

const faqs = [
  {
    q: "Какая экспертиза у нашей компании?",
    a: "У нас есть техническая экспертиза в Core AI/ML: машинное обучение (ML), глубокое обучение (DL), обработка данных, математика и статистика, MLOps. Экспертиза в специализированных доменах AI: компьютерное зрение, обработка естественного языка (NLP), рекомендательные системы, предиктивная аналитика и голосовые технологии."
  },
  {
    q: "Кто наши клиенты?",
    a: "Мы работаем с компаниями разного масштаба: от стартапов до корпораций и государственных структур."
  },
  {
    q: "Как мне стать вашим клиентом или стратегическим партнёром?",
    a: "Оставьте заявку, и мы обсудим цели, задачи и подход к реализации."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-extrabold text-[#c6ff00] mb-12">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-4 max-w-5xl mx-auto text-left">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="
                border-none overflow-hidden
                rounded-3xl
                data-[state=open]:rounded-3xl
              "
            >
              <AccordionTrigger
                className="
                  flex justify-between
                  after:after:translate
                  px-8 py-5
                  bg-white text-black font-medium
                  transition-all duration-200 ease-in-out
                  hover:bg-[#c6ff00]
                  data-[state=open]:bg-[#c6ff00]
                "
              >
                {f.q}
              </AccordionTrigger>

              <AccordionContent
                className="
                  bg-white px-8 py-4
                  text-black text-base leading-relaxed
                  overflow-hidden
                  transition-all duration-200 ease-in-out
                  data-[state=closed]:animate-slideUp
                  data-[state=open]:animate-slideDown
                "
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;


