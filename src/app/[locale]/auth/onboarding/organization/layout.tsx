import { LayoutProps } from "@vendero/_lib/types/props";
import { getLocale, setRequestLocale } from "next-intl/server";
import { getUserOrganization } from "@vendero/_data/organization/get";
import { redirect } from "@vendero/_lib/i18n/routing";

export default async function OnboardingOrganizationLayout({
  params,
  children,
}: LayoutProps) {
  const { locale } = await params;

  // enable static rendering
  setRequestLocale(locale);

  const organization = await getUserOrganization();

  if (organization) {
    const locale = await getLocale();
    return redirect({ href: "/auth/onboarding/billing", locale });
  }

  return children;
}
