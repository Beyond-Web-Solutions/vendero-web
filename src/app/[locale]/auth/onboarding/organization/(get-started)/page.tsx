import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { Link } from "@vendero/_lib/i18n/routing";
import { BuildingIcon, ChevronRightIcon, UserPlusIcon } from "lucide-react";

export default function OnboardingOrganizationPage({ params }: PageProps) {
  const { locale } = use(params);

  // enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("onboarding.organization.get-started");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Link
          href="/auth/onboarding/organization/join"
          className="hover:bg-accent hover:text-accent-foreground flex items-center space-x-4 rounded-md border p-4 transition-[color,box-shadow]"
        >
          <UserPlusIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm leading-none font-medium">
              {t("join.title")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("join.description")}
            </p>
          </div>
          <ChevronRightIcon />
        </Link>
        <Link
          href="/auth/onboarding/organization/create"
          className="hover:bg-accent hover:text-accent-foreground flex items-center space-x-4 rounded-md border p-4 transition-[color,box-shadow]"
        >
          <BuildingIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm leading-none font-medium">
              {t("create.title")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("create.description")}
            </p>
          </div>
          <ChevronRightIcon />
        </Link>
      </CardContent>
    </Card>
  );
}
