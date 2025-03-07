import { LayoutProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { SidebarInset, SidebarProvider } from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardSidebar } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/sidebar";

export default function ManufacturerDashboardLayout({
  params,
  children,
}: LayoutProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <SidebarProvider>
      <ManufacturerDashboardSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
