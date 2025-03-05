import { PageProps } from "@vendero/_lib/types/props";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";

export default function ManufacturerAppHomePage({ params }: PageProps) {
  const { locale } = use(params);

  //enable static rendering
  setRequestLocale(locale);

  return null;
}
