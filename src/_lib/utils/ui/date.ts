import { Locale } from "next-intl";

export function formatDateStringToMediumDate(str: string, locale: Locale) {
  const date = new Date(str);

  return date.toLocaleDateString(locale, {
    dateStyle: "medium",
  });
}

export function formatBillingCycleDate(
  date: string | null | undefined,
  locale: Locale,
) {
  const d = date ? new Date(date) : new Date();

  return d.toLocaleDateString(locale, {
    dateStyle: "medium",
  });
}
