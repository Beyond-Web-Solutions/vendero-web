"use client";

import { ComponentProps } from "react";
import { Link } from "@vendero/_lib/i18n/routing";
import { Href } from "@vendero/_lib/types/link";

interface Props extends Omit<ComponentProps<"a">, "href"> {
  href: Href;
}

// for some reason when adding a `asChild` prop to the default `Link` component, it disappears
export function ClientLink({ ...props }: Props) {
  return <Link {...props} />;
}
