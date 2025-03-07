import { LayoutProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function ShopDashboardLayout({ params, children }: LayoutProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return children;
}
