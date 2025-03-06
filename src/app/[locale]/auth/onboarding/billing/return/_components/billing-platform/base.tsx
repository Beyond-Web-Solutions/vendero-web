import { ComponentProps, Suspense } from "react";
import { BillingPlatformButtonAsync } from "@vendero/app/[locale]/auth/onboarding/billing/return/_components/billing-platform/async";
import { BillingPlatformButtonFallback } from "@vendero/app/[locale]/auth/onboarding/billing/return/_components/billing-platform/fallback";

export function BillingPlatformButton(
  props: ComponentProps<typeof BillingPlatformButtonAsync>,
) {
  return (
    <Suspense fallback={<BillingPlatformButtonFallback />}>
      <BillingPlatformButtonAsync {...props} />
    </Suspense>
  );
}
