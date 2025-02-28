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

    "/sign-in": {
      "nl-NL": "/inloggen",
    },
    "/sign-up": {
      "nl-NL": "/registreren",
    },
    "/forgot-password": {
      "nl-NL": "/wachtwoord-vergeten",
    },
    "/reset-password": {
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
