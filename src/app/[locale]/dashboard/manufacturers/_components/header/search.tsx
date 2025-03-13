import { ComponentProps } from "react";
import { Label } from "@vendero/_components/ui/label";
import { SidebarInput } from "@vendero/_components/ui/sidebar";
import { SearchIcon } from "lucide-react";

export function ManufacturerDashboardHeaderSearch(
  props: ComponentProps<"form">,
) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Type to search..."
          className="h-8 pl-7"
        />
        <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </form>
  );
}
