import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { useTranslations } from "next-intl";
import { Button } from "@vendero/_components/ui/button";
import { Link } from "@vendero/_lib/i18n/routing";
import { ChevronRight } from "lucide-react";

export default function ConfirmEmailSuccessPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("auth.confirm-email.success");

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" asChild>
          <Link href="/auth/sign-in">
            {t("cta")}
            <ChevronRight className="ms-2 size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
