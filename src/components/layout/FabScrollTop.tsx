"use client";

/* FAB scroll-to-top — плавающая круглая кнопка в правом нижнем углу.
   Появляется на мобайле после прокрутки 400+ пикселей. Клик — плавный
   скролл к началу страницы.

   CSS живёт в 16-responsive-global.css (.fab-scroll-top + .is-visible).
   Десктоп: скрыт через display: none (только мобайл ≤ 639). */

import { useEffect, useState } from "react";

export default function FabScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // первичная проверка
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`fab-scroll-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
