const DEFAULT_CONSULTATION_PRICE_USD = 50;

const normalizeConsultationPriceUsd = (value?: string) => {
  const price = Number(value?.trim() || DEFAULT_CONSULTATION_PRICE_USD);

  if (!Number.isFinite(price) || price <= 0) {
    return DEFAULT_CONSULTATION_PRICE_USD;
  }

  return price;
};

const formatUsd = (price: number) => {
  const hasCents = !Number.isInteger(price);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(price);
};

export const consultationPriceUsd = normalizeConsultationPriceUsd(
  process.env.NEXT_PUBLIC_CONSULTATION_PRICE_USD
);

export const consultationPriceDisplay = formatUsd(consultationPriceUsd);
