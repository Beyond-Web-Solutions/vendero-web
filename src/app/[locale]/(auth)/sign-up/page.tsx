import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageProps } from "@scani/_lib/types/props";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@scani/_components/ui/card";
import { Link } from "@scani/_lib/i18n/routing";
import { SignUpForm } from "@scani/app/[locale]/(auth)/sign-up/_components/form";

export default async function SignUpPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("auth.sign-up");

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <SignUpForm />
          <div className="text-center text-sm">
            {t("links.prefix")}
            <Link href="/sign-in" className="ms-1 underline underline-offset-4">
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
