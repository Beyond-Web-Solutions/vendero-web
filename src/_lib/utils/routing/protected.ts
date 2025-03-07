import { Locale } from "next-intl";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { getOnboardingRoutes } from "@vendero/_lib/utils/routing/onboarding";
import { getShopDashboardRoutes } from "@vendero/_lib/utils/routing/shop";
import { getManufacturersDashboardRoutes } from "@vendero/_lib/utils/routing/manufacturers";

export function getProtectedRoutes(locale: Locale) {
  return [
    getPathname({ href: "/auth/reset-password", locale }),
    getPathname({ href: "/dashboard", locale }),
    getPathname({ href: "/dashboard/manufacturers", locale }),
    ...getOnboardingRoutes(locale),
    ...getShopDashboardRoutes(locale),
    ...getManufacturersDashboardRoutes(locale),
  ] as const;
}

export function isProtectedRoute(url: URL, locale: Locale) {
  return getProtectedRoutes(locale).includes(url.pathname);
}
