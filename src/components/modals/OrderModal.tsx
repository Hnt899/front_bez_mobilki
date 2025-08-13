import { useOrder } from "@/context/OrderContext";
import Order from "@/pages/Order";

export default function OrderModal() {
  const { isOpen, close } = useOrder();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={close} // клик вне формы — закрыть
    >
      <div
        className="rounded-3xl w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()} // блокируем клик внутри
      >
        <Order />
      </div>
    </div>
  );
}
