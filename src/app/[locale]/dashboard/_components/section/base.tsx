import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export function DashboardPageSection({ title, description, children }: Props) {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 pb-6 not-last:border-b sm:grid-cols-3">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="sm:col-span-2">{children}</div>
    </div>
  );
}
