import { LayoutProps } from "@vendero/_lib/types/props";
import { ReactNode, use } from "react";
import { setRequestLocale } from "next-intl/server";
import { AppProvider } from "@vendero/app/[locale]/dashboard/_components/provider/base";

export type AppLayoutProps = Omit<LayoutProps, "children"> &
  Readonly<{
    shop: ReactNode;
    manufacturer: ReactNode;
  }>;

export default function AppLayout({
  params,
  manufacturer,
  shop,
}: AppLayoutProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <AppProvider shop={shop} manufacturer={manufacturer} locale={locale} />
  );
}
