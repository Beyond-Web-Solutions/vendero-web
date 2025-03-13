"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@vendero/_components/ui/breadcrumb";
import { Link, usePathname } from "@vendero/_lib/i18n/routing";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Href } from "@vendero/_lib/types/link";

export function ManufacturerDashboardHeaderBreadcrumb() {
  const t = useTranslations("dashboard.manufacturer.pages");
  const pathname = usePathname();

  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  useEffect(() => {
    const parts = pathname
      .split("/")
      .filter(Boolean)
      .filter((str) => str !== "manufacturers");

    setBreadcrumb(parts);
  }, [pathname]);

  const composeHref = useCallback(
    (item: string) => {
      // construct the href based on the breadcrumb item

      // add a slash to the start and add the manufacturer path between the dashboard and rest of the breadcrumb
      // const href = breadcrumb.slice(0, breadcrumb.indexOf(item) + 1).join("/");
      const base = "/dashboard/manufacturers";

      if (item === "dashboard") {
        return base as Href;
      }

      const href = breadcrumb.slice(1, breadcrumb.indexOf(item) + 1).join("/");

      return `${base}/${href}` as Href;
    },
    [breadcrumb],
  );

  return (
    <Breadcrumb className="hidden sm:block">
      <BreadcrumbList>
        {breadcrumb.map((item, index) => (
          <div key={item} className="flex items-center gap-2.5">
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumb.length - 1 ? (
                <BreadcrumbPage>{t(item as never)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={composeHref(item)}>{t(item as never)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
