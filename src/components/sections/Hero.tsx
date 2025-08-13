import React from "react";
import "./Hero.css";
import bgImage from "../../assets/bg.jpg";
import { useOrder } from "@/context/OrderContext";

const Hero = () => {
  const { open } = useOrder();

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-top-text">
        <p>
          Мы знаем, что такое нейросети и как <br />
          их использовать для решения задач, <br />
          которые стоят перед бизнесом.
        </p>
      </div>

      <h1 className="hero-title">ЭЙАЙ ТЕХ</h1>

      {/* Кнопка открытия модалки заказа */}
      <button onClick={open} className="hero-button">
        Оставить заявку
      </button>

      <div className="marquee">
        <div className="marquee-content">
          <span>сайты</span>
          <span>чат-боты</span>
          <span>ии-агенты</span>
          <span>боты для трейдинга</span>
          <span>комплексные решения с использованием нейросетей под ключ</span>
          <span>сайты</span>
          <span>чат-боты</span>
          <span>ии-агенты</span>
          <span>боты для трейдинга</span>
          <span>комплексные решения с использованием нейросетей под ключ</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
