/* /privacy — RU. */

import LegalLayout from "@/components/legal/LegalLayout";
import { privacyRu } from "@/lib/legal/privacy";

export const metadata = {
  title: "Политика конфиденциальности",
  description:
    "Какие данные собирает сайт Law Offices of Jacob Shidaev, как они используются и какие права есть у посетителя. CCPA, CPRA, GDPR.",
};

export default function Page() {
  return <LegalLayout lang="ru" content={privacyRu} />;
}
