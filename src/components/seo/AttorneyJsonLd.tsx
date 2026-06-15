/* AttorneyJsonLd — schema.org structured data для иммиграционного
   адвоката. Влияет на Google Knowledge Panel, local SEO и rich
   results в выдаче. Рендерится как <script type="application/ld+json">.

   Bilingual: лёгкий вариант — единая разметка с inLanguage. */

import { absoluteUrl, siteConfig } from "@/lib/site-config";

interface AttorneyJsonLdProps {
  lang: "ru" | "en";
}

export default function AttorneyJsonLd({ lang }: AttorneyJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.firmName,
    legalName: siteConfig.firmName,
    description:
      lang === "ru"
        ? "Иммиграционный адвокат с судебным подходом к каждому делу. Дела об убежище, иммиграционный суд, федеральные суды."
        : "Trial-ready immigration defense. Asylum, removal defense, federal litigation.",
    url: lang === "ru" ? siteConfig.siteUrl : absoluteUrl("/en"),
    inLanguage: lang === "ru" ? "ru" : "en",
    image: absoluteUrl(siteConfig.heroImagePath),
    logo: absoluteUrl(siteConfig.heroImagePath),
    telephone: siteConfig.contact.phoneSchema,
    email: siteConfig.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsLanguage: ["en", "ru"],
    founder: {
      "@type": "Person",
      name: "Jacob Shidaev",
      jobTitle: "Immigration Attorney",
      memberOf: {
        "@type": "Organization",
        name: "American Immigration Lawyers Association (AILA)",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California State Bar",
        identifier: "343616",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: siteConfig.socialLinks.map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
