import { getUserOrganization } from "@vendero/_data/organization/get";
import { redirect } from "@vendero/_lib/i18n/routing";
import { Locale } from "next-intl";
import { getManufacturerPricingPlans } from "@vendero/_data/pricing/manufacturer";
import { getShopPricingPlans } from "@vendero/_data/pricing/shop";
import { OnboardingChoosePlanForm } from "@vendero/app/[locale]/auth/onboarding/billing/_components/form";

interface Props {
  locale: Locale;
}

export async function OnboardingPricingAsync({ locale }: Props) {
  const organization = await getUserOrganization();

  if (!organization) {
    return redirect({ href: "/auth/onboarding/organization", locale });
  }

  if (organization.type === "manufacturer") {
    const plans = await getManufacturerPricingPlans();

    return <OnboardingChoosePlanForm plans={plans} />;
  }

  const plans = await getShopPricingPlans();

  return <OnboardingChoosePlanForm plans={plans} />;
}
