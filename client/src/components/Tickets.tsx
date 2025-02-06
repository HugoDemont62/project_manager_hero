import { AnimatePresence, motion } from "motion/react";
import Ticket from "./Ticket";
import { useGame } from "@/stores/useGame";

export default function Tickets() {
  const { tickets, currentIndex, guesses } = useGame();

  const previousTicket = tickets[currentIndex - 1];
  const currentTicket = tickets[currentIndex];
  const nextTicket = tickets[currentIndex + 1];
  const previousGuess = guesses[currentIndex - 1];

  const ticketsToDisplay = [previousTicket, currentTicket, nextTicket];

  return (
    <div className="flex container mx-auto flex-col gap-4">
      <AnimatePresence mode="popLayout">
        {ticketsToDisplay.map(({id, description, type}, i) => (
          <motion.div
            initial={{
              y: 100,
              opacity: 0.5,
              rotateZ: 4,
              transformOrigin: "left",
            }}
            animate={{ y: 0, opacity: 1, rotateZ: 0, backgroundColor: previousGuess === previousTicket.type ? "green" : "transparent" }}
            exit={{ y: -100, opacity: 0, rotateZ: -2 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            key={id}
            layoutId={`ticket-${id}`}
          >
            <Ticket variant={i === 1 ? "primary" : "default"}>
              {description}
            </Ticket>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
