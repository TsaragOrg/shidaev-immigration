/* /en/accessibility — EN. */

import LegalLayout from "@/components/legal/LegalLayout";
import { accessibilityEn } from "@/lib/legal/accessibility";

export const metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for shidaev.com. Substantial conformance with WCAG 2.1 Level AA and ADA Title III. Alternative ways to contact the firm.",
};

export default function Page() {
  return <LegalLayout lang="en" content={accessibilityEn} />;
}
