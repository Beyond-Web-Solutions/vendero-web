import { getUserOrganization } from "@vendero/_data/organization-member/get";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { getLocale } from "next-intl/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const organization = await getUserOrganization();
  const locale = await getLocale();

  if (!organization) {
    const url = request.nextUrl;
    url.pathname = getPathname({ href: "/auth/onboarding", locale });

    return NextResponse.redirect(url);
  }

  if (organization.type === "manufacturer") {
    const url = request.nextUrl;
    url.pathname = getPathname({ href: "/dashboard/manufacturers", locale });

    return NextResponse.redirect(url);
  }

  const url = request.nextUrl;
  url.pathname = getPathname({ href: "/dashboard/shops", locale });

  return NextResponse.redirect(url);
}
