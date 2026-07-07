"use client";

import { calendlyEventUrl, calendlyPopupUrl } from "@/lib/calendly";
import type { ReactNode } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CalendlyBookingButtonProps = {
  children: ReactNode;
  className: string;
};

export default function CalendlyBookingButton({
  children,
  className,
}: CalendlyBookingButtonProps) {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyPopupUrl,
      });
    } else {
      window.open(calendlyEventUrl, "_blank", "noopener");
    }
  };

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={className}
    >
      {children}
    </button>
  );
}
