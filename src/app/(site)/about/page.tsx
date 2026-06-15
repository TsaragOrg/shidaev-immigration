/* /about — RU. */

import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "Об адвокате",
  description:
    "Jacob Shidaev — иммиграционный адвокат, бывший проситель убежища. История, квалификация, образование, членство в AILA.",
};

export default function Page() {
  return <AboutPage lang="ru" />;
}
