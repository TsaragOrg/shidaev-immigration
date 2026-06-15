/* /en/legal — EN. Legal Notice: attorney advertising, no legal
   advice, no attorney-client relationship, past results disclaimer. */

import LegalLayout from "@/components/legal/LegalLayout";
import { noticeEn } from "@/lib/legal/notice";

export const metadata = {
  title: "Legal Notice",
  description:
    "This site is attorney advertising. The material is not legal advice and does not create an attorney-client relationship.",
};

export default function Page() {
  return <LegalLayout lang="en" content={noticeEn} />;
}
