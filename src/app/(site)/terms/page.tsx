/* /terms — RU. */

import LegalLayout from "@/components/legal/LegalLayout";
import { termsRu } from "@/lib/legal/terms";

export const metadata = {
  title: "Условия использования",
  description:
    "Условия использования сайта shidaev.com: допустимое использование, интеллектуальная собственность, ограничение ответственности, юрисдикция.",
};

export default function Page() {
  return <LegalLayout lang="ru" content={termsRu} />;
}
