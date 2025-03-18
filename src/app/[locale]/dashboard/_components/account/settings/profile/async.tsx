import { DashboardAccountSettingsProfileForm } from "@vendero/app/[locale]/dashboard/_components/account/settings/profile/form";
import { getUserProfile } from "@vendero/_data/profile/get";

export async function DashboardAccountSettingsProfileAsync() {
  const profile = await getUserProfile();

  return <DashboardAccountSettingsProfileForm profile={profile} />;
}
