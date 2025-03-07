import { Locale } from "next-intl";
import { getProtectedRoutes } from "@vendero/_lib/utils/routing/protected";
import { getPathname } from "@vendero/_lib/i18n/routing";

export function getShopDashboardRoutes(locale: Locale) {
  return [getPathname({ href: "/dashboard/shops", locale })] as const;
}

export function isShopRoute(url: URL, locale: Locale) {
  return getProtectedRoutes(locale).includes(url.pathname);
}
