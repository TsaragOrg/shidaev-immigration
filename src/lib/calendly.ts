const DEFAULT_CALENDLY_URL = "https://calendly.com/zulihan1993/30min";

const normalizeCalendlyUrl = (value?: string) => {
  const rawUrl = value?.trim() || DEFAULT_CALENDLY_URL;
  const urlWithProtocol = /^https?:\/\//i.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;

  return new URL(urlWithProtocol).toString();
};

const withWidgetParams = (eventUrl: string) => {
  const url = new URL(eventUrl);
  url.searchParams.set("primary_color", "A8894A");
  url.searchParams.set("hide_gdpr_banner", "1");
  return url.toString();
};

export const calendlyEventUrl = normalizeCalendlyUrl(
  process.env.NEXT_PUBLIC_CALENDLY_URL
);

export const calendlyPopupUrl = withWidgetParams(calendlyEventUrl);
