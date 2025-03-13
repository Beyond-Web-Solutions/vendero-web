import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["nl-NL"],

  // Used when no locale matches
  defaultLocale: "nl-NL",

  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "nl-NL": "/nl",
    },
  },
  pathnames: {
    "/": "/",
    "/pricing": {
      "nl-NL": "/prijzen",
    },
    "/contact": {
      "nl-NL": "/contact",
    },
    "/help": {
      "nl-NL": "/help",
    },
    "/feedback": {
      "nl-NL": "/feedback",
    },

    "/auth/sign-in": {
      "nl-NL": "/inloggen",
    },
    "/auth/sign-up": {
      "nl-NL": "/registreren",
    },
    "/auth/confirm-email": {
      "nl-NL": "/bevestig-email",
    },
    "/auth/confirm-email/success": {
      "nl-NL": "/bevestig-email/succes",
    },
    "/auth/confirm-email/error": {
      "nl-NL": "/bevestig-email/fout",
    },
    "/auth/forgot-password": {
      "nl-NL": "/wachtwoord-vergeten",
    },
    "/auth/reset-password": {
      "nl-NL": "/wachtwoord-resetten",
    },

    "/auth/onboarding": {
      "nl-NL": "/onboarding",
    },

    "/auth/onboarding/organization": {
      "nl-NL": "/onboarding/organisatie",
    },
    "/auth/onboarding/organization/create": {
      "nl-NL": "/onboarding/organisatie/aanmaken",
    },
    "/auth/onboarding/organization/join": {
      "nl-NL": "/onboarding/organisatie/toevoegen",
    },
    "/auth/onboarding/billing": {
      "nl-NL": "/onboarding/betaling",
    },
    "/auth/onboarding/billing/return": {
      "nl-NL": "/onboarding/betaling/terug",
    },

    "/terms": {
      "nl-NL": "/voorwaarden",
    },
    "/privacy": {
      "nl-NL": "/privacy",
    },

    "/dashboard": "/dashboard",

    // common dashboard pages
    "/dashboard/manufacturers/account": {
      "nl-NL": "/dashboard/fabrikanten/account",
    },
    "/dashboard/manufacturers/account/security": {
      "nl-NL": "/dashboard/fabrikanten/account/beveiliging",
    },
    "/dashboard/manufacturers/account/billing": {
      "nl-NL": "/dashboard/fabrikanten/account/betaling",
    },

    "/dashboard/manufacturers": {
      "nl-NL": "/dashboard/fabrikanten",
    },
    "/dashboard/manufacturers/insights": {
      "nl-NL": "/dashboard/fabrikanten/inzichten",
    },
    "/dashboard/manufacturers/products": {
      "nl-NL": "/dashboard/fabrikanten/producten",
    },
    "/dashboard/manufacturers/inventory": {
      "nl-NL": "/dashboard/fabrikanten/voorraad",
    },
    "/dashboard/manufacturers/shops": {
      "nl-NL": "/dashboard/fabrikanten/winkels",
    },

    "/dashboard/shops": {
      "nl-NL": "/dashboard/winkels",
    },
  },
});

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  permanentRedirect,
} = createNavigation(routing);
