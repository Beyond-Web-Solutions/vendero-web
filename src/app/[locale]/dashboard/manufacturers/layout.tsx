import { LayoutProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { SidebarInset, SidebarProvider } from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardHeader } from "@vendero/app/[locale]/dashboard/manufacturers/_components/header/header";
import { ManufacturerDashboardSidebar } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/sidebar";

export default function ManufacturerDashboardLayout({
  params,
  children,
}: LayoutProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <ManufacturerDashboardHeader />
        <div className="flex flex-1">
          <ManufacturerDashboardSidebar />
          <SidebarInset>{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
