import { Loader, LucideProps } from "lucide-react";
import { cn } from "@vendero/_lib/utils/ui/cn";

export function Spinner({ className, ...props }: LucideProps) {
  return <Loader className={cn("size-4 animate-spin", className)} {...props} />;
}
