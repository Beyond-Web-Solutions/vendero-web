import { Spinner } from "@vendero/_components/common/spinner";

export function AppProviderFallback() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <Spinner className="mx-auto size-10" />
    </div>
  );
}
