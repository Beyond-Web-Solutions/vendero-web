import { setRequestLocale } from "next-intl/server";
import { PageProps } from "@vendero/_lib/types/props";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { Link } from "@vendero/_lib/i18n/routing";
import { SignUpForm } from "@vendero/app/[locale]/auth/sign-up/_components/form";
import { Suspense, use } from "react";
import { AuthFormFallback } from "@vendero/app/[locale]/auth/_components/fallback/form";
import { useTranslations } from "next-intl";

export default function SignUpPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("auth.sign-up");

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Suspense fallback={<AuthFormFallback inputs={3} />}>
            <SignUpForm />
          </Suspense>
          <div className="text-center text-sm">
            {t("links.prefix")}
            <Link
              href="/auth/sign-in"
              className="ms-1 underline underline-offset-4"
            >
              {t("links.cta")}
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
        {t("legal.by-signing-up")}
        <Link href="/terms" className="mx-1 lowercase">
          {t("legal.terms")}
        </Link>
        {t("legal.and")}
        <Link href="/privacy" className="ms-1 lowercase">
          {t("legal.privacy")}
        </Link>
        .
      </div>
    </div>
  );
}
