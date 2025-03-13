import { ComponentProps } from "react";
import { SidebarGroup, SidebarMenu } from "@vendero/_components/ui/sidebar";
import { useTranslations } from "next-intl";
import { ChartLineIcon, LayersIcon, StoreIcon, TagIcon } from "lucide-react";
import { ManufacturerDashboardSidebarMainNavItem } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/main/item";

type NavItems = Array<
  ComponentProps<typeof ManufacturerDashboardSidebarMainNavItem>
>;

export function ManufacturerDashboardSidebarMainNav(
  props: ComponentProps<typeof SidebarGroup>,
) {
  const t = useTranslations("dashboard.manufacturer.nav.content.main");

  const items: NavItems = [
    {
      title: t("insights"),
      href: "/dashboard/manufacturers/insights",
      icon: ChartLineIcon,
    },
    {
      title: t("products"),
      href: "/dashboard/manufacturers/products",
      icon: TagIcon,
    },
    {
      title: t("inventory"),
      href: "/dashboard/manufacturers/inventory",
      icon: LayersIcon,
    },
    {
      title: t("shops"),
      href: "/dashboard/manufacturers/shops",
      icon: StoreIcon,
    },
  ];

  return (
    <SidebarGroup {...props}>
      {/*<SidebarGroupLabel>Platform</SidebarGroupLabel>*/}
      <SidebarMenu>
        {items.map((item) => (
          <ManufacturerDashboardSidebarMainNavItem key={item.title} {...item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
