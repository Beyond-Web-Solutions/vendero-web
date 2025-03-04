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
    "/auth/forgot-password/check-email": {
      "nl-NL": "/wachtwoord-vergeten/check-email",
    },
    "/auth/reset-password": {
      "nl-NL": "/wachtwoord-resetten",
    },

    "/terms": {
      "nl-NL": "/voorwaarden",
    },
    "/privacy": {
      "nl-NL": "/privacy",
    },

    "/app": "/app",
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
