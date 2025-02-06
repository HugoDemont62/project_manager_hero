export default function Score({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <div className="flex flex-col gap-1">
      <span>Score</span>
      <span {...props} className="font-extrabold text-6xl">
        {children}
      </span>
    </div>
  );
}
