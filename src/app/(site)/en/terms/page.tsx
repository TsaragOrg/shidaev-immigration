/* /en/terms — EN. */

import LegalLayout from "@/components/legal/LegalLayout";
import { termsEn } from "@/lib/legal/terms";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for shidaev.com: acceptable use, intellectual property, limitation of liability, governing law.",
};

export default function Page() {
  return <LegalLayout lang="en" content={termsEn} />;
}
