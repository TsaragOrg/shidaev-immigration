/* /accessibility — RU. */

import LegalLayout from "@/components/legal/LegalLayout";
import { accessibilityRu } from "@/lib/legal/accessibility";

export const metadata = {
  title: "Заявление о доступности",
  description:
    "Заявление о доступности сайта shidaev.com. Соответствие WCAG 2.1 уровня AA и требованиям ADA Title III. Альтернативные способы связи.",
};

export default function Page() {
  return <LegalLayout lang="ru" content={accessibilityRu} />;
}
