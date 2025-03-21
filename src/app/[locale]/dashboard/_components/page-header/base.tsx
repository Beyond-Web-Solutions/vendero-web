interface Props {
  label: string;
}

export function DashboardHeader({ label }: Props) {
  return (
    <div className="border-b py-6">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
          {label}
        </h1>
      </div>
    </div>
  );
}
