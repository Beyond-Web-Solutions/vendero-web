import { PageProps } from "@vendero/_lib/types/props";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Spinner } from "@vendero/_components/common/spinner";
import { useTranslations } from "next-intl";

export default function ManufacturerAppHomePage({ params }: PageProps) {
  const { locale } = use(params);

  //enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("app");

  return null;
}
