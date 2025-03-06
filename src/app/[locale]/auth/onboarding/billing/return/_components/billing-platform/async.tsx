import { createStripeClient } from "@vendero/_lib/clients/stripe";
import Link from "next/link";
import { Button } from "@vendero/_components/ui/button";
import { getTranslations } from "next-intl/server";

interface Props {
  sessionId: string;
}

export async function BillingPlatformButtonAsync({ sessionId }: Props) {
  const stripe = createStripeClient();

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const t = await getTranslations("onboarding.billing.success");

  if (!session.url) {
    return null;
  }

  return (
    <Button variant="outline" asChild>
      <Link href={session.url}>{t("manage")}</Link>
    </Button>
  );
}
