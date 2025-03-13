import { Separator } from "@vendero/_components/ui/separator";
import { ManufacturerDashboardHeaderSidebarToggleButton } from "@vendero/app/[locale]/dashboard/manufacturers/_components/header/sidebar-toggle-button";
import { ManufacturerDashboardHeaderBreadcrumb } from "@vendero/app/[locale]/dashboard/manufacturers/_components/header/breadcrumb";
import { ManufacturerDashboardHeaderSearchForm } from "@vendero/app/[locale]/dashboard/manufacturers/_components/header/search";

export function ManufacturerDashboardHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-[var(--header-height)] w-full items-center gap-2 px-4">
        <ManufacturerDashboardHeaderSidebarToggleButton />
        <Separator orientation="vertical" className="mr-2 !h-4" />
        <ManufacturerDashboardHeaderBreadcrumb />
        <ManufacturerDashboardHeaderSearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  );
}
