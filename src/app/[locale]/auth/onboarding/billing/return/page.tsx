import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Card } from "@vendero/_components/ui/card";
import { BillingReturnSuccess } from "@vendero/app/[locale]/auth/onboarding/billing/return/_components/success";
import { BillingReturnFailed } from "@vendero/app/[locale]/auth/onboarding/billing/return/_components/failed";

export default function OnboardingBillingReturnPage({
  params,
  searchParams,
}: PageProps<{
  status: "success" | "error" | undefined;
  session_id: string | undefined;
}>) {
  const { locale } = use(params);
  const { status, session_id } = use(searchParams);

  if (!status) {
    notFound();
  }

  // enable static rendering
  setRequestLocale(locale);

  if (status === "success" && session_id) {
    return <BillingReturnSuccess sessionId={session_id} />;
  }

  return <BillingReturnFailed />;
}
