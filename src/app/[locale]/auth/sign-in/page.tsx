import { setRequestLocale } from "next-intl/server";
import { PageProps } from "@vendero/_lib/types/props";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { SignInForm } from "@vendero/app/[locale]/auth/sign-in/_components/form";
import { Link } from "@vendero/_lib/i18n/routing";
import { Suspense, use } from "react";
import { useTranslations } from "next-intl";
import { AuthFormFallback } from "@vendero/app/[locale]/auth/_components/fallback/form";

export default function SignInPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("auth.sign-in");

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Suspense fallback={<AuthFormFallback inputs={2} />}>
          <SignInForm />
        </Suspense>
        <div className="text-center text-sm">
          {t("links.prefix")}
          <Link
            href="/auth/sign-up"
            className="ms-1 underline underline-offset-4"
          >
            {t("links.cta")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
