import { getUserProfile } from "@vendero/_data/profile/get";
import { Avatar, AvatarFallback } from "@vendero/_components/ui/avatar";
import { getAvatarInitials } from "@vendero/_lib/utils/ui/avatar";
import { getName } from "@vendero/_lib/utils/ui/name";
import { getTranslations } from "next-intl/server";

export async function ManufacturerDashboardSidebarFooterAccountMenuProfile_Async() {
  const profile = await getUserProfile();
  const t = await getTranslations("dashboard.common");

  const name = getName(
    profile?.first_name,
    profile?.last_name,
    t("unknown-user-name"),
  );

  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        {/*<AvatarImage src={user.avatar} alt={user.name} />*/}
        <AvatarFallback className="rounded-lg">
          {getAvatarInitials(name)}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{name}</span>
        <span className="truncate text-xs">{profile?.email}</span>
      </div>
    </>
  );
}
