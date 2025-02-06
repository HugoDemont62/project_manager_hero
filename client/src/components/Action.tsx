import { tv, VariantProps } from "tailwind-variants";

const action = tv({
  base: "p-4 bg-zinc-800 min-h-8 rounded-full text-white capitalize",
  variants: {
    variant: {
      bug: "",
      userStory: "",
      task: "",
      a: "",
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
    <button {...props} className={action({ variant, className })}>
      {children}
    </button>
  );
}
