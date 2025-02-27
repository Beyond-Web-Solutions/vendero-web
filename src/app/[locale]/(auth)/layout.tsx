import { LayoutProps } from "@scani/_lib/types/props";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ScanBarcodeIcon } from "lucide-react";
import { Link } from "@scani/_lib/i18n/routing";

export default async function AuthLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("common");

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
            <ScanBarcodeIcon className="size-4" />
          </div>
          {t("app-name")}
        </Link>
        {children}
      </div>
    </div>
  );
}
