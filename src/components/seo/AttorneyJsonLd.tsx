/* AttorneyJsonLd — schema.org structured data для иммиграционного
   адвоката. Влияет на Google Knowledge Panel, local SEO и rich
   results в выдаче. Рендерится как <script type="application/ld+json">.

   Bilingual: лёгкий вариант — единая разметка с inLanguage. */

interface AttorneyJsonLdProps {
  lang: "ru" | "en";
}

export default function AttorneyJsonLd({ lang }: AttorneyJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Law Offices of Jacob Shidaev",
    legalName: "Law Offices of Jacob Shidaev",
    description:
      lang === "ru"
        ? "Иммиграционный адвокат с судебным подходом к каждому делу. Дела об убежище, иммиграционный суд, федеральные суды."
        : "Trial-ready immigration defense. Asylum, removal defense, federal litigation.",
    url: lang === "ru" ? "https://shidaev.com" : "https://shidaev.com/en",
    inLanguage: lang === "ru" ? "ru" : "en",
    image: "https://shidaev.com/photos/shidaev-black-hero.png",
    logo: "https://shidaev.com/photos/shidaev-black-hero.png",
    telephone: "+1-424-558-4141",
    email: "info@shidaev.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15233 Ventura Blvd, Suite 1004",
      addressLocality: "Sherman Oaks",
      addressRegion: "CA",
      postalCode: "91403",
      addressCountry: "US",
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
    sameAs: [
      "https://www.instagram.com/shidaev.immigration",
      "https://www.tiktok.com/@shidaev.immigration",
      "https://www.youtube.com/@LawOfficesofJacobShidaev",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
