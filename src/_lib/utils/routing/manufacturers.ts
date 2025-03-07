import { Locale } from "next-intl";
import { getProtectedRoutes } from "@vendero/_lib/utils/routing/protected";
import { getPathname } from "@vendero/_lib/i18n/routing";

export function getManufacturersDashboardRoutes(locale: Locale) {
  return [getPathname({ href: "/dashboard/manufacturers", locale })] as const;
}

export function isManufacturersRoute(url: URL, locale: Locale) {
  return getProtectedRoutes(locale).includes(url.pathname);
}
