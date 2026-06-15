"use client";

/* Принудительный scroll-to-top при mount страницы.
   Решает баг: при навигации через next/link иногда сохраняется
   scroll position предыдущей страницы (особенно при возврате через
   browser back или с прокрученной home → /practice). */

import { useEffect } from "react";

export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return null;
}
