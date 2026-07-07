/* HomePage — главная страница (обе локали).
   Получает lang prop, рендерит все секции в том же порядке что в HTML версии.
   Header/Footer общие, остальное — в /components/home/. */

import CalendlyWidgetAssets from "@/components/booking/CalendlyWidgetAssets";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Practice from "@/components/home/Practice";
import Adversarial from "@/components/home/Adversarial";
import Credentials from "@/components/home/Credentials";
import Reviews from "@/components/home/Reviews";
import Journal from "@/components/home/Journal";
import FinalCTA from "@/components/home/FinalCTA";
import AttorneyJsonLd from "@/components/seo/AttorneyJsonLd";
import type { LangProps } from "@/lib/types";

export default function HomePage({ lang }: LangProps) {
  return (
    <>
      <CalendlyWidgetAssets />
      <AttorneyJsonLd lang={lang} />
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Practice lang={lang} />
        <Adversarial lang={lang} />
        <Credentials lang={lang} />
        <Reviews lang={lang} />
        <Journal lang={lang} />
        <FinalCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
