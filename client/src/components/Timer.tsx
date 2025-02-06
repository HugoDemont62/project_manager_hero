import { tv } from "tailwind-variants";

const timer = tv({
  base: "",
});

export default function Timer({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={timer({ className })}>
      {children}
    </div>
  );
}
