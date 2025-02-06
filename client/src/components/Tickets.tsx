import { AnimatePresence, motion } from "motion/react";
import Ticket from "./Ticket";
import { useGame } from "@/stores/useGame";

export default function Tickets() {
  const { tickets, currentIndex } = useGame();

  const previousTicket = tickets[currentIndex - 1];
  const currentTicket = tickets[currentIndex];
  const nextTicket = tickets[currentIndex + 1];

  const ticketsToDisplay = [previousTicket, currentTicket, nextTicket];

  return (
    <div className="flex container mx-auto flex-col gap-4">
      <AnimatePresence mode="popLayout">
        {ticketsToDisplay.map(({ id, description, type }, i) => (
          <motion.div
            initial={{ y: 100, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            key={id}
            layoutId={`ticket-${id}`}
          >
            <Ticket>
              {description} ({currentIndex === i ? "current" : "not current"})
              <span className="rounded-full bg-blue-800 text-xs w-min px-2 text-nowrap">
                {type}
              </span>
            </Ticket>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
