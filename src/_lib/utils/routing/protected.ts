import { Locale } from "next-intl";
import { getPathname } from "@vendero/_lib/i18n/routing";

export function getProtectedRoutes(locale: Locale) {
  return [
    getPathname({ href: "/auth/reset-password", locale }),
    getPathname({ href: "/dashboard", locale }),
  ] as const;
}

export function isProtectedRoute(url: URL, locale: Locale) {
  return getProtectedRoutes(locale).includes(url.pathname);
}
