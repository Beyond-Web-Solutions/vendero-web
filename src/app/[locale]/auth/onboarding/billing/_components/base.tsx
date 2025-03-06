import { ComponentProps, Suspense } from "react";
import { OnboardingPricingFallback } from "@vendero/app/[locale]/auth/onboarding/billing/_components/fallback";
import { OnboardingPricingAsync } from "@vendero/app/[locale]/auth/onboarding/billing/_components/async";

export function OnboardingPricing(
  props: ComponentProps<typeof OnboardingPricingAsync>,
) {
  return (
    <Suspense fallback={<OnboardingPricingFallback />}>
      <OnboardingPricingAsync {...props} />
    </Suspense>
  );
}
