import { Locale } from "next-intl";

export function formatCurrency(
  number: number,
  currency: string,
  locale: Locale,
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return formatter.format(number / 100);
}
