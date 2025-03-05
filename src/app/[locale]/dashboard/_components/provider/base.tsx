import { Suspense } from "react";
import { AppProviderFallback } from "@vendero/app/[locale]/dashboard/_components/provider/fallback";
import { AppProviderAsync } from "@vendero/app/[locale]/dashboard/_components/provider/async";
import { AppLayoutProps } from "@vendero/app/[locale]/dashboard/layout";
import { Locale } from "next-intl";

type Props = Omit<AppLayoutProps, "params"> & { locale: Locale };

export function AppProvider(props: Props) {
  return (
    <Suspense fallback={<AppProviderFallback />}>
      <AppProviderAsync {...props} />
    </Suspense>
  );
}
