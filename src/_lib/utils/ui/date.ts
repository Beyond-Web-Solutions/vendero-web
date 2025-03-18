import { Locale } from "next-intl";

export function formatDateStringToMediumDate(str: string, locale: Locale) {
  const date = new Date(str);

  return date.toLocaleDateString(locale, {
    dateStyle: "medium",
  });
}
