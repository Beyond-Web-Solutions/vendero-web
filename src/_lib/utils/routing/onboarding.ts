import { Locale } from "next-intl";
import { getPathname } from "@vendero/_lib/i18n/routing";

export function getOnboardingBillingRoutes(locale: Locale) {
  return [getPathname({ href: "/auth/onboarding/billing", locale })] as const;
}
export function getOnboardingOrganizationRoutes(locale: Locale) {
  return [
    getPathname({ href: "/auth/onboarding/organization", locale }),
    getPathname({ href: "/auth/onboarding/organization/create", locale }),
    getPathname({ href: "/auth/onboarding/organization/join", locale }),
  ] as const;
}

export function getOnboardingRoutes(locale: Locale) {
  return [
    ...getOnboardingOrganizationRoutes(locale),
    ...getOnboardingBillingRoutes(locale),
  ] as const;
}

export function isOnboardingBillingRoute(url: URL, locale: Locale) {
  return getOnboardingBillingRoutes(locale).includes(url.pathname);
}

export function isOnboardingOrganizationRoute(url: URL, locale: Locale) {
  return getOnboardingOrganizationRoutes(locale).includes(url.pathname);
}

export function isOnboardingRoute(url: URL, locale: Locale) {
  return getOnboardingRoutes(locale).includes(url.pathname);
}
