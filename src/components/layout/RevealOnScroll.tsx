"use client";

/* RevealOnScroll — добавляет class is-visible элементам .reveal и .stagger
   когда они появляются в viewport.

   Главный нюанс: layout не размонтируется при client-side навигации в
   Next.js. Поэтому useEffect нужно пересоздавать observer при каждой
   смене pathname — иначе новые секции с .reveal не наблюдаются и
   остаются opacity:0. */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal, .stagger");
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback — показываем всё сразу
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
