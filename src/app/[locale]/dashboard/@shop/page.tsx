import { PageProps } from "@vendero/_lib/types/props";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function ShopAppHomePage({ params }: PageProps) {
  const { locale } = use(params);

  //enable static rendering
  setRequestLocale(locale);

  return null;
}
