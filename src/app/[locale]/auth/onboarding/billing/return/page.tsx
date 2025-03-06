import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Card } from "@vendero/_components/ui/card";

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

  return <Card></Card>;
}
