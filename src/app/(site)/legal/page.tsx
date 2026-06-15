/* /legal — RU. Правовое уведомление: реклама юридических услуг,
   отказ от ответственности, отсутствие отношений «адвокат-клиент». */

import LegalLayout from "@/components/legal/LegalLayout";
import { noticeRu } from "@/lib/legal/notice";

export const metadata = {
  title: "Правовое уведомление",
  description:
    "Сайт является рекламой юридических услуг. Материалы не являются юридической консультацией и не создают отношений «адвокат — клиент».",
};

export default function Page() {
  return <LegalLayout lang="ru" content={noticeRu} />;
}
