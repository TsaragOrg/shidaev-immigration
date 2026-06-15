/* /en/privacy — EN. */

import LegalLayout from "@/components/legal/LegalLayout";
import { privacyEn } from "@/lib/legal/privacy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "What data the Law Offices of Jacob Shidaev site collects, how it is used, and what rights visitors have. CCPA, CPRA, GDPR.",
};

export default function Page() {
  return <LegalLayout lang="en" content={privacyEn} />;
}
