import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function ManufacturerDashboardAccountBillingPage({
  params,
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return null;
}
