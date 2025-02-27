import { PageProps } from "@scani/_lib/types/props";
import { setRequestLocale } from "next-intl/server";

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return null;
}
