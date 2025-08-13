import React, { useState, useRef } from "react";
import "./Team.css";

import directorEyes from "../../assets/direktor-glaza.png";
import directorPhoto from "../../assets/direktor.png";
import denisEyes from "../../assets/denis-glaza.png";
import denisPhoto from "../../assets/denis.jpg";
import womanEyes from "../../assets/woman-glaza.png";
import womanPhoto from "../../assets/woman.jpg";

const baseMembers = [
  { name: "Малхазии", role: "Генеральный директор", description: "Отвечает за стратегию и развитие продукта", eyes: directorEyes, photo: directorPhoto },
  { name: "Денис", role: "Технический директор", description: "Руководит техническим развитием и архитектурой", eyes: denisEyes, photo: denisPhoto },
  { name: "Галина", role: "Креативный дизайнер", description: "Создаёт визуальный стиль и UX/UI каждого продукта", eyes: womanEyes, photo: womanPhoto },
];

// пока нет фото остальных — подставляем Галину
const extraMembers = Array(4).fill({
  name: "Галина",
  role: "Креативный дизайнер",
  description: "Создаёт визуальный стиль и UX/UI каждого продукта",
  eyes: womanEyes,
  photo: womanPhoto,
});

const Team: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  const toggleMember = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleAll = () => {
    if (showAll) {
      // скрываем доп. блок плавно и возвращаем к началу секции
      setShowAll(false);
      setOpenIndex(null);
      // дожидаемся анимации max-height (см. css: .6s)
      setTimeout(() => {
        blockRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 620);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div id="about" className="team" ref={blockRef}>
      <div className="team-header">
        <h3 className="team-subtitle">Знакомьтесь наши герои!</h3>
        <h2 className="team-title">команда</h2>
      </div>

      {/* базовые 3 карточки */}
      {baseMembers.map((m, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={`base-${i}`}
            className={`team-member ${isOpen ? "open" : ""}`}
            onClick={() => toggleMember(i)}
          >
            <div className="team-left">
              <div className="team-name">{m.name}</div>
              <div className={`team-description ${isOpen ? "show" : "hide"}`}>{m.description}</div>
            </div>

            <div className="team-center">
              <div className={`photo-wrapper ${isOpen ? "expanded" : ""}`}>
                <img src={m.photo} alt={`${m.name} full`} className={`photo-img ${isOpen ? "show" : "hide"} ${isOpen ? "zoom-in" : "zoom-out"}`} />
                <img src={m.eyes} alt={`${m.name} eyes`} className={`eyes-img ${isOpen ? "hide" : "show"}`} />
              </div>
            </div>

            <div className="team-role">{m.role}</div>
          </div>
        );
      })}

      {/* плавно раскрываемый блок с доп. участниками */}
      <div className={`team-extra-wrap ${showAll ? "open" : ""}`}>
        {extraMembers.map((m, idx) => {
          const index = baseMembers.length + idx;
          const isOpen = openIndex === index;
          return (
            <div
              key={`extra-${idx}`}
              className={`team-member ${isOpen ? "open" : ""}`}
              onClick={() => toggleMember(index)}
              style={{
                // лёгкая «ступенчатая» анимация появления карточек
                animation: showAll ? `fade-in-up 480ms ease both ${idx * 70}ms` : "none",
              }}
            >
              <div className="team-left">
                <div className="team-name">{m.name}</div>
                <div className={`team-description ${isOpen ? "show" : "hide"}`}>{m.description}</div>
              </div>

              <div className="team-center">
                <div className={`photo-wrapper ${isOpen ? "expanded" : ""}`}>
                  <img src={m.photo} alt={`${m.name} full`} className={`photo-img ${isOpen ? "show" : "hide"} ${isOpen ? "zoom-in" : "zoom-out"}`} />
                  <img src={m.eyes} alt={`${m.name} eyes`} className={`eyes-img ${isOpen ? "hide" : "show"}`} />
                </div>
              </div>

              <div className="team-role">{m.role}</div>
            </div>
          );
        })}
      </div>

      {/* переключатель */}
      <button type="button" className="team-toggle" onClick={handleToggleAll}>
        {showAll ? "Свернуть" : "Вся команда здесь"}
      </button>
    </div>
  );
};

export default Team;
