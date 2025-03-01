import { useFormState } from "react-hook-form";
import { useTranslations } from "next-intl";
import { TriangleAlert } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@vendero/_components/ui/alert";

export function FormErrorAlert() {
  const t = useTranslations("common.errors");

  const { errors } = useFormState();

  if (!errors.root?.message) return null;

  return (
    <Alert variant="destructive">
      <TriangleAlert className="size-4" />
      <AlertTitle>{t("title")}</AlertTitle>
      <AlertDescription>{errors.root.message}</AlertDescription>
    </Alert>
  );
}
