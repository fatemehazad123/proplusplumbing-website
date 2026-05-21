export function SideBars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-0 z-50 flex w-6 flex-col max-md:w-3"
    >
      <div className="flex-1 bg-blue-brand" />
      <div className="flex-1 bg-red-brand" />
    </div>
  );
}
