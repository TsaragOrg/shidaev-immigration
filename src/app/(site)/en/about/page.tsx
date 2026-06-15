/* /en/about — EN. */

import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "About",
  description:
    "Jacob Shidaev — immigration attorney and former asylum recipient. Background, credentials, education, AILA membership.",
};

export default function Page() {
  return <AboutPage lang="en" />;
}
