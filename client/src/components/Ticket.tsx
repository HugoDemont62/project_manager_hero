import { tv, VariantProps } from "tailwind-variants";

const ticket = tv({
  base: "p-12 border font-semibold text-white text-2xl border-zinc-800 rounded-lg",
  variants: {
    variant: {
      default: "bg-zinc-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TicketProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof ticket> {}

export default function Ticket({ variant, children }: TicketProps) {
  return (
    <div className={ticket({ variant })}>
      <p>{children}</p>
    </div>
  );
}
