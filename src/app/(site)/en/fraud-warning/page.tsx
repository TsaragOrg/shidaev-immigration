/* /en/fraud-warning — EN. */

import LegalLayout from "@/components/legal/LegalLayout";
import { fraudWarningEn } from "@/lib/legal/fraud-warning";

export const metadata = {
  title: "Immigration Scams: How to Recognize Them",
  description:
    "Red flags of immigration scams, how to verify an attorney with the California State Bar, where to report fraud. From the Law Offices of Jacob Shidaev.",
};

export default function Page() {
  return <LegalLayout lang="en" content={fraudWarningEn} />;
}
