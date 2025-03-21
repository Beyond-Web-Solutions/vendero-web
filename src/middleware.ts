import createMiddleware from "next-intl/middleware";
import { getPathname, routing } from "@vendero/_lib/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { supabaseMiddleware } from "@vendero/_lib/utils/supabase/middleware";
import { getLocale } from "next-intl/server";
import { isProtectedRoute } from "@vendero/_lib/utils/routing/protected";
import { isGuestRoute } from "@vendero/_lib/utils/routing/guest";
import {
  isOnboardingBillingRoute,
  isOnboardingOrganizationRoute,
} from "@vendero/_lib/utils/routing/onboarding";
import { isDashboardRoute } from "@vendero/_lib/utils/routing/dashboard";

const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const i18nResponse = handleI18nRouting(request);

  // A `response` can now be passed here
  const { user, response } = await supabaseMiddleware(request, i18nResponse);

  const locale = await getLocale();

  if (!user && isProtectedRoute(request.nextUrl, locale)) {
    const url = request.nextUrl;
    url.pathname = getPathname({ href: "/auth/sign-in", locale });

    return NextResponse.redirect(url);
  }

  if (user && isGuestRoute(request.nextUrl, locale)) {
    const url = request.nextUrl;
    url.pathname = getPathname({ href: "/dashboard", locale });

    return NextResponse.redirect(url);
  }

  const organizationId = user?.user_metadata.organization_member_id;

  // if the user already has an organization, redirect to the dashboard
  if (
    !!organizationId &&
    isOnboardingOrganizationRoute(request.nextUrl, locale)
  ) {
    const url = request.nextUrl;
    url.pathname = getPathname({ href: "/dashboard", locale });

    return NextResponse.redirect(url);
  }

  // if the user has no organization and is on an onboarding billing route, redirect to the organization creation
  if (!organizationId && isOnboardingBillingRoute(request.nextUrl, locale)) {
    const url = request.nextUrl;
    url.pathname = getPathname({
      href: "/auth/onboarding/organization",
      locale,
    });

    return NextResponse.redirect(url);
  }

  if (!organizationId && isDashboardRoute(request.nextUrl, locale)) {
    const url = request.nextUrl;
    url.pathname = getPathname({
      href: "/auth/onboarding/organization",
      locale,
    });

    return NextResponse.redirect(url);
  }

  // TODO: validate the users subscription when on the dashboard pages
  // TODO: validate if the user has a shop or manufacturer account and enforce the correct dashboard

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/auth`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|auth|_next|_vercel|.*\\..*).*)"],
};
