import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { DashboardHeader } from "@vendero/app/[locale]/dashboard/_components/header";

export default function ManufacturerDashboardAccountPage({
  params,
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <DashboardHeader
        items={[
          { title: "Dashboard", href: "/dashboard/manufacturers" },
          { href: "/dashboard/manufacturers/account", title: "Account" },
        ]}
      />
    </>
  );
}
