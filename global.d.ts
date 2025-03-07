import { routing } from "@vendero/_lib/i18n/routing";
import { formats } from "@vendero/_lib/i18n/request";
import messages from "./messages/nl-NL.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  }
}

declare module "@supabase/supabase-js" {
  interface UserMetadata {
    organization_member_id: string | undefined | null;
  }
}
