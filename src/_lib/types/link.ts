import { ComponentProps } from "react";
import { Link } from "@vendero/_lib/i18n/routing";

export type Href = ComponentProps<typeof Link>["href"];
