"use client";

/* Header — общий для всех страниц.
   Client Component потому что: burger menu, scroll-state, focus management.
   Стили из globals.css (.site-header, .nav, .burger, etc.) — те же что в HTML версии.

   Bilingual: получает lang через prop, рендерит соответствующий nav.
   Active page detection через usePathname (Next.js).

   Ссылки между языками собираются автоматом: если ты на /about, кнопка EN
   ведёт на /en/about (тот же путь, другая локаль). */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import type { LangProps, Locale } from "@/lib/types";

const STRINGS = {
  ru: {
    brandKicker: "Law Offices of",
    brandName: "Jacob Shidaev",
    brandAria: "Law Offices of Jacob Shidaev — главная",
    nav: {
      home: "Главная",
      practice: "Практика",
      about: "О нас",
      reviews: "Отзывы",
      journal: "Публикации",
      contact: "Контакты",
    },
    urgentLabel: "Телефон фирмы",
    menuLabel: "Меню",
    closeMenu: "Закрыть меню",
  },
  en: {
    brandKicker: "Law Offices of",
    brandName: "Jacob Shidaev",
    brandAria: "Law Offices of Jacob Shidaev — home",
    nav: {
      home: "Home",
      practice: "Practice",
      about: "About",
      reviews: "Reviews",
      journal: "Publications",
      contact: "Contact",
    },
    urgentLabel: "Office phone",
    menuLabel: "Menu",
    closeMenu: "Close menu",
  },
} as const;

/* Карта путей — нужна для language switcher.
   Если читатель на /about, кнопка EN должна вести на /en/about (не на /en/). */
function buildLanguageHref(currentPath: string, target: Locale): string {
  // Нормализуем: убираем /en префикс если есть
  const cleanPath = currentPath.replace(/^\/en/, "") || "/";

  if (target === "ru") {
    return cleanPath;
  } else {
    // EN: /about → /en/about, / → /en
    return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
  }
}

/* Префикс ссылок внутри текущей локали:
   RU → '', EN → '/en'. Так все nav-ссылки строятся одной формулой. */
function langPrefix(lang: Locale): string {
  return lang === "ru" ? "" : "/en";
}

export default function Header({ lang }: LangProps) {
  const t = STRINGS[lang];
  const pathname = usePathname();
  const prefix = langPrefix(lang);

  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* Header добавляет is-scrolled когда скроллим за hero.
     Без hero на странице (about, practice, contact) — всегда solid. */
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const isMobile = () => window.matchMedia("(max-width: 639px)").matches;
    const onScroll = () => {
      if (!hero) {
        setScrolled(true);
        return;
      }
      const threshold = isMobile() ? 40 : 60;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Scroll-spy для секции #reviews на главной.
     Когда блок отзывов в средней трети viewport — подсвечиваем
     «Отзывы» в шапке. На страницах без блока — observer ничего не
     наблюдает, активность считается через derived value ниже. */
  useEffect(() => {
    const reviewsEl = document.getElementById("reviews");
    if (!reviewsEl || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setReviewsVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "-30% 0px -30% 0px" }
    );
    io.observe(reviewsEl);
    return () => io.disconnect();
  }, [pathname]);

  /* Derived — активность Reviews только на странице где есть блок (= главная).
     Так избегаем setState в effect для сброса. */
  const homeHrefForReviews = prefix || "/";
  const isReviewsActive = reviewsVisible && pathname === homeHrefForReviews;

  /* Когда меню открыто — блокируем скролл body. */
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const closeMenu = () => setNavOpen(false);

  /* Клик на лого / «Главная»: если пользователь уже на главной —
     Next.js ничего не сделает (тот же URL). Эмулируем «возврат к началу»
     ручным скроллом. С другой страницы — Next.js сам скроллит наверх. */
  const goHomeOrTop = (e: React.MouseEvent, href: string) => {
    closeMenu();
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      id="siteHeader"
    >
      <div className="container header-inner">
        <Link
          href={prefix || "/"}
          className="brand"
          aria-label={t.brandAria}
          onClick={(e) => goHomeOrTop(e, prefix || "/")}
        >
          <span className="brand-stack">
            <span className="brand-kicker">{t.brandKicker}</span>
            <span className="brand-name">{t.brandName}</span>
          </span>
        </Link>

        <nav
          className={`nav${navOpen ? " is-open" : ""}`}
          id="primaryNav"
          aria-label={lang === "ru" ? "Главная навигация" : "Primary navigation"}
        >
          <div className="nav-top">
            <div className="nav-lang">
              {lang === "ru" ? (
                <>
                  <button className="nav-lang-btn active" aria-current="page">RU</button>
                  <Link
                    href={buildLanguageHref(pathname, "en")}
                    className="nav-lang-btn"
                  >
                    EN
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={buildLanguageHref(pathname, "ru")}
                    className="nav-lang-btn"
                  >
                    RU
                  </Link>
                  <button className="nav-lang-btn active" aria-current="page">EN</button>
                </>
              )}
            </div>
            <button
              type="button"
              className="nav-close"
              aria-label={t.closeMenu}
              onClick={closeMenu}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Active page detection — pathname.startsWith(href) для подразделов
              (например /blog/[slug] подсветит «Публикации»).

              Главную НЕ выделяем — бренд в левом углу сам выполняет роль
              «вы здесь» для главной. Двойной сигнал — лишний шум.
              Это паттерн editorial / boutique сайтов 2024+. */}
          {(() => {
            const homeHref = prefix || "/";
            const practiceHref = `${prefix}/practice`;
            const aboutHref = `${prefix}/about`;
            const blogHref = `${prefix}/blog`;
            const contactHref = `${prefix}/contact`;

            const isPractice = pathname.startsWith(practiceHref);
            const isAbout = pathname.startsWith(aboutHref);
            const isBlog = pathname.startsWith(blogHref);
            const isContact = pathname.startsWith(contactHref);

            return (
              <>
                <Link
                  href={homeHref}
                  onClick={(e) => goHomeOrTop(e, homeHref)}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href={practiceHref}
                  onClick={closeMenu}
                  aria-current={isPractice ? "page" : undefined}
                  className={isPractice ? "is-active" : undefined}
                >
                  {t.nav.practice}
                </Link>
                <Link
                  href={aboutHref}
                  onClick={closeMenu}
                  aria-current={isAbout ? "page" : undefined}
                  className={isAbout ? "is-active" : undefined}
                >
                  {t.nav.about}
                </Link>
                <Link
                  href={`${prefix || ""}/#reviews`}
                  onClick={closeMenu}
                  aria-current={isReviewsActive ? "true" : undefined}
                  className={isReviewsActive ? "is-active" : undefined}
                >
                  {t.nav.reviews}
                </Link>
                <Link
                  href={blogHref}
                  onClick={closeMenu}
                  aria-current={isBlog ? "page" : undefined}
                  className={isBlog ? "is-active" : undefined}
                >
                  {t.nav.journal}
                </Link>
                <Link
                  href={contactHref}
                  onClick={closeMenu}
                  aria-current={isContact ? "page" : undefined}
                  className={isContact ? "is-active" : undefined}
                >
                  {t.nav.contact}
                </Link>
              </>
            );
          })()}
        </nav>

        <div className="header-right">
          <div className="header-phone">
            <span className="label">{t.urgentLabel}</span>
            <a className="num" href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
          <span className="header-divider"></span>
          <div className="lang-switch">
            {lang === "ru" ? (
              <>
                <span className="lang-switch-current" aria-current="page">RU</span>
                <Link href={buildLanguageHref(pathname, "en")} className="lang-switch-link">
                  EN
                </Link>
              </>
            ) : (
              <>
                <Link href={buildLanguageHref(pathname, "ru")} className="lang-switch-link">
                  RU
                </Link>
                <span className="lang-switch-current" aria-current="page">EN</span>
              </>
            )}
          </div>
          <button
            className={`burger${navOpen ? " is-open" : ""}`}
            aria-label={t.menuLabel}
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
