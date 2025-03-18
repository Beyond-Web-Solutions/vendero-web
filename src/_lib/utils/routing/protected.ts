import { Locale } from "next-intl";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { getOnboardingRoutes } from "@vendero/_lib/utils/routing/onboarding";
import { getDashboardRoutes } from "@vendero/_lib/utils/routing/dashboard";

export function getProtectedRoutes(locale: Locale) {
  return [
    getPathname({ href: "/auth/reset-password", locale }),
    ...getOnboardingRoutes(locale),
    ...getDashboardRoutes(locale),
  ] as const;
}

export function isProtectedRoute(url: URL, locale: Locale) {
  return getProtectedRoutes(locale).includes(url.pathname);
}
