import { tv, VariantProps } from "tailwind-variants";

const action = tv({
  base: "p-4 bg-zinc-800 min-h-8 rounded-full text-white",
  variants: {
    variant: {
      golden: "bg-",
    },
  },
});

interface ActionProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof action> {}

export default function Action({
  children,
  variant,
  className,
  ...props
}: ActionProps) {
  return (
    <button className={action({ variant, className })} {...props}>
      {children}
    </button>
  );
}
