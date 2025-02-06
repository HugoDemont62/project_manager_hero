import { tv, VariantProps } from "tailwind-variants";
import { Ticket as TicketType } from "../data/tickets";

const ticket = tv({
  base: "p-12 border font-semibold text-white text-2xl border-zinc-800 rounded-lg cursor-pointer transition-all hover:scale-105 bg-zinc-900/80 hover:bg-zinc-900",
  variants: {},
  defaultVariants: {},
});

interface TicketProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof ticket> {
  ticket: TicketType;
}

export default function Ticket({ ticket: ticketData, ...props }: TicketProps) {
  return (
    <div {...props} className={ticket({ type: ticketData.type })}>
      <p>{ticketData.content}</p>
    </div>
  );
}
