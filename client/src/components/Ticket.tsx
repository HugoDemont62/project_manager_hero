import { tv, VariantProps } from "tailwind-variants";
import { Ticket as TicketType } from "../data/tickets";

const ticket = tv({
  base: "p-12 select-none border font-semibold text-white text-2xl border-zinc-800 rounded-lg",
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
    VariantProps<typeof ticket> {
  ticket: TicketType;
}

export default function Ticket({ ticket: ticketData, ...props }: TicketProps) {
  return (
    <div {...props} className={ticket()}>
      <p>{ticketData.content}</p>
    </div>
  );
}
