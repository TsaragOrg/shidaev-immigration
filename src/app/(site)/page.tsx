/* RU root — главная страница (русская версия).
   Тонкая обёртка: рендерит общий HomePage компонент с lang="ru".
   EN-зеркало живёт в /en/page.tsx.

   ISR 60 сек: новые статьи в Sanity появляются в секции «Публикации»
   на главной максимум через минуту. Без revalidate главная
   статически генерится при билде и не обновляется. */

import HomePage from "@/components/pages/HomePage";

export const revalidate = 60;

export default function Page() {
  return <HomePage lang="ru" />;
}
