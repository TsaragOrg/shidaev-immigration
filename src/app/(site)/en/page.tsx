/* EN root — главная страница (английская версия).
   Та же логика что и /page.tsx, только lang="en". */

import HomePage from "@/components/pages/HomePage";

export const metadata = {
  title: "Law Offices of Jacob Shidaev — Immigration Attorney",
};

/* ISR 60 сек — то же что и на RU-главной. */
export const revalidate = 60;

export default function Page() {
  return <HomePage lang="en" />;
}
