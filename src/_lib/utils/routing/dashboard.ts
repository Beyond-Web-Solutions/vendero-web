import { Locale } from "next-intl";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { getShopDashboardRoutes } from "@vendero/_lib/utils/routing/shop";
import { getManufacturersDashboardRoutes } from "@vendero/_lib/utils/routing/manufacturers";

export function getDashboardRoutes(locale: Locale) {
  return [
    getPathname({ href: "/dashboard", locale }),
    ...getShopDashboardRoutes(locale),
    ...getManufacturersDashboardRoutes(locale),
  ] as const;
}

export function isDashboardRoute(url: URL, locale: Locale) {
  return getDashboardRoutes(locale).includes(url.pathname);
}
