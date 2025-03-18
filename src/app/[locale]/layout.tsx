import { cn } from "@vendero/_lib/utils/ui/cn";
import { Analytics } from "@vercel/analytics/next";
import { LayoutProps } from "@vendero/_lib/types/props";
import { Inter } from "next/font/google";
import { redirect, routing } from "@vendero/_lib/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    redirect({ href: "/", locale: routing.defaultLocale });
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={cn(inter.className, "antialiased")}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
