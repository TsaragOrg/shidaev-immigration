/* not-found.tsx — кастомная 404 страница.
   Bilingual через UA Accept-Language нельзя на client-statically,
   поэтому даём оба языка стопкой — пользователь увидит свой
   родной выше. */

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Страница не найдена · Page not found",
  description:
    `Запрошенная страница не найдена. Вернуться на главную: ${siteConfig.domainDisplay}`,
};

export default function NotFound() {
  return (
    <>
      <Header lang="ru" />
      <main className="not-found">
        <div className="container not-found-container">
          <p className="not-found-code">404</p>

          <section className="not-found-section">
            <h1 className="not-found-title">Страница не найдена</h1>
            <p className="not-found-text">
              Страница, которую вы ищете, не существует или была перемещена.
            </p>
            <div className="not-found-links">
              <Link href="/" className="not-found-link">
                На главную
              </Link>
              <Link href="/contact" className="not-found-link">
                Связаться с фирмой
              </Link>
            </div>
          </section>

          <section className="not-found-section" lang="en">
            <h2 className="not-found-title-en">Page not found</h2>
            <p className="not-found-text">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="not-found-links">
              <Link href="/en" className="not-found-link">
                Home
              </Link>
              <Link href="/en/contact" className="not-found-link">
                Contact the firm
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer lang="ru" />
    </>
  );
}
