import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Send, MessageCircle, Plus, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useOrder } from "@/context/OrderContext";

const Order = () => {
  const { close } = useOrder();

  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedContact, setSelectedContact] = useState<string>("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [desc, setDesc] = useState("");

  const [phoneError, setPhoneError] = useState(false);

  const maxName = 25;
  const maxDesc = 300;

  const services = [
    "сайт",
    "чат-боты",
    "ии-агенты",
    "трейд-бот",
    "ИИ-по ТЗ",
    "Другое",
  ];

  const toggleService = (index: number) => {
    setSelectedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const selectContact = (method: string) => {
    setSelectedContact(method);
  };

  const formatPhone = (digits: string) => {
    const cleaned = digits.replace(/\D/g, "").slice(0, 11);
    let result = "+7";
    if (cleaned.length > 1) result += ` (${cleaned.slice(1, 4)}`;
    if (cleaned.length >= 4) result += `) ${cleaned.slice(4, 7)}`;
    if (cleaned.length >= 7) result += `-${cleaned.slice(7, 9)}`;
    if (cleaned.length >= 9) result += `-${cleaned.slice(9, 11)}`;
    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    let digits = input.replace(/\D/g, "");
    if (digits.length <= 1) {
      digits = "7";
    }
    setPhone(formatPhone(digits));
    if (digits.length === 11) {
      setPhoneError(false);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 11) {
      setPhoneError(true);
      return toast({
        title: "Неверный номер",
        description: "Пожалуйста, введите полный номер телефона.",
      });
    }

    if (!agree) {
      return toast({
        title: "Подтвердите соглашение",
        description: "Поставьте галочку согласия на обработку данных.",
      });
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      close();
    }, 900);
  };

  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto py-16 md:py-24">
        <form
          onSubmit={onSubmit}
          className="relative bg-black text-white p-8 max-w-lg mx-auto rounded-3xl border border-gray-700"
        >
          {/* Крестик для закрытия */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Закрыть форму"
          >
            <X className="size-5 text-[#DBFE01]" />
          </button>

          <h1 className="text-center text-[#DBFE01] text-3xl font-extrabold mb-2">
            заказать проект
          </h1>
          <p className="text-center text-white mb-10">
            Выберите задачу и расскажите о своём проекте
          </p>

          {/* Услуги */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {services.map((t, i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggleService(i)}
                className={`flex items-center justify-between rounded-full px-4 py-2 text-sm border transition-colors duration-300 ${
                  selectedServices.includes(i)
                    ? "bg-[#5940FE] text-white border-[#5940FE]"
                    : "bg-white text-black border-white"
                }`}
              >
                <span>{t}</span>
                <Plus className="size-4" />
              </button>
            ))}
          </div>

          {/* Имя */}
          <div className="relative mb-6">
            <Input
              required
              placeholder="Ваше имя"
              aria-label="Ваше имя"
              maxLength={maxName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b border-gray-500 pr-12"
            />
            <span
              className={`absolute right-0 bottom-1 text-xs ${
                name.length >= maxName ? "text-red-500" : "text-gray-400"
              }`}
            >
              {name.length}/{maxName}
            </span>
          </div>

          {/* Способ связи */}
          <p className="mb-3">Удобный способ связи</p>
          <div className="flex gap-3 mb-6">
            {[
              { id: "phone", label: "Телефон", icon: <Phone className="mr-2 size-4" /> },
              { id: "telegram", label: "Telegram", icon: <Send className="mr-2 size-4" /> },
              { id: "whatsapp", label: "WhatsApp", icon: <MessageCircle className="mr-2 size-4" /> },
            ].map((contact) => (
              <button
                key={contact.id}
                type="button"
                onClick={() => selectContact(contact.id)}
                className={`flex items-center rounded-full px-4 py-2 border transition-colors duration-300 ${
                  selectedContact === contact.id
                    ? "bg-[#DBFE01] text-black border-[#DBFE01]"
                    : "bg-transparent border-gray-500"
                }`}
              >
                {contact.icon}
                {contact.label}
              </button>
            ))}
          </div>

          {/* Телефон */}
          <div className="relative mb-6">
            <Input
              required
              type="tel"
              placeholder="+7 (___) ___-__-__"
              aria-label="Телефон"
              value={phone}
              onChange={handlePhoneChange}
              className={`bg-transparent border-b pr-12 ${
                phoneError ? "border-red-500" : "border-gray-500"
              }`}
            />
          </div>

          {/* Описание */}
          <p className="mb-3">Расскажите в двух словах про ваш проект</p>
          <div className="relative mb-6">
            <Textarea
              className="min-h-32 resize-none bg-transparent border border-gray-500 pr-12"
              placeholder="Короткое описание"
              aria-label="Описание"
              maxLength={maxDesc}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <span
              className={`absolute right-2 bottom-2 text-xs ${
                desc.length >= maxDesc ? "text-red-500" : "text-gray-400"
              }`}
            >
              {desc.length}/{maxDesc}
            </span>
          </div>

          {/* Согласие */}
          <div className="flex items-center gap-2 mb-6">
            <Checkbox
              id="agree"
              checked={agree}
              onCheckedChange={(v) => setAgree(Boolean(v))}
            />
            <label htmlFor="agree" className="text-sm text-gray-400">
              я согласен с условиями{" "}
              <a href="/privacy.pdf" download className="underline">
                политики конфиденциальности
              </a>
            </label>
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#DBFE01] text-black rounded-full py-3 font-semibold transition-colors duration-300 hover:bg-lime-300"
          >
            {loading ? "Отправляем…" : "отправить"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Order;