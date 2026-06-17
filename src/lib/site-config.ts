const DEFAULT_SITE_URL = "https://shidaev.com";
const DEFAULT_GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Law+Offices+of+Jacob+Shidaev&kgmid=/g/11vhf_12pq";

const normalizeBaseUrl = (value?: string) => {
  const rawUrl = value?.trim() || DEFAULT_SITE_URL;
  const urlWithProtocol = /^https?:\/\//i.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;

  return new URL(urlWithProtocol).toString().replace(/\/$/, "");
};

const siteUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const absoluteUrl = (path = "") => {
  if (!path) return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const siteConfig = {
  siteUrl,
  domainDisplay: "shidaev.com",
  firmName: "Law Offices of Jacob Shidaev",
  heroImagePath: "/photos/shidaev-black-hero.png",
  googleReviewsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL?.trim() ||
    DEFAULT_GOOGLE_REVIEWS_URL,
  contact: {
    phoneDisplay: "+1 (424) 558-4141",
    phoneHref: "tel:+14245584141",
    phoneSchema: "+1-424-558-4141",
    whatsappUrl: "https://wa.me/14245584141",
    email: "info@shidaev.com",
    emailHref: "mailto:info@shidaev.com",
  },
  address: {
    building: "Valley Executive Tower",
    streetAddress: "15233 Ventura Blvd, Suite 1004",
    cityStateZip: "Sherman Oaks, CA 91403",
    addressLocality: "Sherman Oaks",
    addressRegion: "CA",
    postalCode: "91403",
    addressCountry: "US",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=15233+Ventura+Blvd+Suite+1004+Sherman+Oaks+CA+91403&output=embed&z=15",
  },
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/shidaev.immigration",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@shidaev.immigration",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@LawOfficesofJacobShidaev",
    },
  ],
  assets: {
    adversarialBackgroundUrl:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80",
  },
} as const;
