import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function ConfirmEmailPage({
  params,
  searchParams,
}: PageProps<{ email: string | undefined }>) {
  const { locale } = use(params);
  const { email } = use(searchParams);

  if (!email) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("auth.confirm-email");

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t("title")}</CardTitle>
        <CardDescription>{t("description", { email })}</CardDescription>
      </CardHeader>
    </Card>
  );
}
