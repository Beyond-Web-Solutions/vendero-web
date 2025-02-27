import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageProps } from "@scani/_lib/types/props";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@scani/_components/ui/card";
import { SignInForm } from "@scani/app/[locale]/(auth)/sign-in/_components/form";
import { Link } from "@scani/_lib/i18n/routing";

export default async function SignInPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("auth.sign-in");

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <SignInForm />
        <div className="text-center text-sm">
          {t("links.prefix")}
          <Link href="/sign-up" className="ms-1 underline underline-offset-4">
            {t("links.cta")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
