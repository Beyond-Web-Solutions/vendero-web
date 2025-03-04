import createMiddleware from "next-intl/middleware";
import { getPathname, routing } from "@vendero/_lib/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { supabaseMiddleware } from "@vendero/_lib/utils/supabase/middleware";
import { getLocale } from "next-intl/server";
import { isProtectedRoute } from "@vendero/_lib/utils/routing/protected";
import { isGuestRoute } from "@vendero/_lib/utils/routing/guest";

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
    url.pathname = getPathname({ href: "/app", locale });

    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/auth`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|auth|_next|_vercel|.*\\..*).*)"],
};
