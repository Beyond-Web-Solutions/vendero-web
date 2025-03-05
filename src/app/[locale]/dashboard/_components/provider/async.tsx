import { AppLayoutProps } from "@vendero/app/[locale]/dashboard/layout";
import { getUserOrganization } from "@vendero/_data/organization/get";
import { Locale } from "next-intl";
import { redirect } from "@vendero/_lib/i18n/routing";

type Props = Omit<AppLayoutProps, "params"> & { locale: Locale };

export async function AppProviderAsync({ shop, manufacturer, locale }: Props) {
  const organization = await getUserOrganization();

  if (!organization) {
    return redirect({ href: "/auth/onboarding", locale });
  }

  if (organization.type === "manufacturer") {
    return manufacturer;
  }

  return shop;
}
