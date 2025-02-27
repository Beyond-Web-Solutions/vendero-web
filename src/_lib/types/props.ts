import { ReactNode } from "react";
import { Locale } from "next-intl";

export type LayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}>;

export type PageProps<SearchParams = object> = Readonly<{
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<SearchParams>;
}>;
