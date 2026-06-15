/* /fraud-warning — RU. Content-страница про immigration scams.
   USCIS прямо рекомендует таким сайтам делать подобные предупреждения. */

import LegalLayout from "@/components/legal/LegalLayout";
import { fraudWarningRu } from "@/lib/legal/fraud-warning";

export const metadata = {
  title: "Иммиграционные мошенники: как распознать",
  description:
    "Признаки иммиграционных мошенников, как проверить адвоката в California State Bar, куда жаловаться. От Law Offices of Jacob Shidaev.",
};

export default function Page() {
  return <LegalLayout lang="ru" content={fraudWarningRu} />;
}
