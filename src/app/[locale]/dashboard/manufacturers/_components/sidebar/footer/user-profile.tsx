import { Avatar, AvatarFallback } from "@vendero/_components/ui/avatar";
import { getAvatarInitials } from "@vendero/_lib/utils/ui/avatar";
import { useTranslations } from "next-intl";

interface Props {
  name: string | null;
  email: string;
}

export function ManufacturerDashboardSidebarAccountMenuProfile({
  name,
  email,
}: Props) {
  const t = useTranslations("dashboard.common.profile");

  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        {/*<AvatarImage src={user.avatar} alt={user.name} />*/}
        <AvatarFallback className="rounded-lg">
          {getAvatarInitials(name || t("unknown-name"))}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{name}</span>
        <span className="truncate text-xs">{email}</span>
      </div>
    </>
  );
}
