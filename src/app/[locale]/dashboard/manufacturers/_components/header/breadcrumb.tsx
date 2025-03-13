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
import { useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Href } from "@vendero/_lib/types/link";

export function ManufacturerDashboardHeaderBreadcrumb() {
  const t = useTranslations("dashboard.manufacturer.pages");
  const pathname = usePathname();

  // Compute breadcrumb segments from the current pathname.
  // We split on "/" and filter out empty segments and the "manufacturers" segment.
  const breadcrumb = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .filter((segment) => segment !== "manufacturers"),
    [pathname],
  );

  // Create a function that computes the href for each breadcrumb item.
  // We use the index from the map callback for efficiency.
  const composeHref = useCallback(
    (index: number) => {
      const base = "/dashboard/manufacturers";
      // The first breadcrumb (e.g. "dashboard") always links to the base.
      if (index === 0) {
        return base as Href;
      }
      // For subsequent segments, join the path from the second element onward.
      const pathSegment = breadcrumb.slice(1, index + 1).join("/");
      return `${base}/${pathSegment}` as Href;
    },
    [breadcrumb],
  );

  return (
    <Breadcrumb className="hidden sm:block">
      <BreadcrumbList>
        {breadcrumb.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-2.5">
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumb.length - 1 ? (
                <BreadcrumbPage>{t(item as never)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={composeHref(index)}>{t(item as never)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
