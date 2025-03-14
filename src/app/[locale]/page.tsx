import { Button } from "@vendero/_components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { PageProps } from "@vendero/_lib/types/props";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@vendero/_lib/i18n/routing";
import { ChevronRightIcon } from "lucide-react";

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("coming-soon");

  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild>
            <Link href="/auth/sign-in">
              {t("cta")}
              <ChevronRightIcon />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
