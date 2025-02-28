import { Locale } from "next-intl";
import { getPathname } from "@vendero/_lib/i18n/routing";

// routes where the user MUST be unauthenticated (like the sign-in page)
export function getGuestRoutes(locale: Locale) {
  return [
    getPathname({ href: "/sign-in", locale }),
    getPathname({ href: "/sign-up", locale }),
    getPathname({ href: "/forgot-password", locale }),
  ] as const;
}

export function isGuestRoute(url: URL, locale: Locale) {
  return getGuestRoutes(locale).includes(url.pathname);
}
