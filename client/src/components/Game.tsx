"use client";

import { AnimatePresence, motion } from "motion/react";
import { useGame } from "@/stores/useGame";
import Ticket from "./Ticket";
import { TICKET_TYPES } from "@/data/tickets";
import Action from "./Action";
import Timer from "./Timer";
import Score from "./Score";
import { useEffect } from "react";
import useGuessKeybinds from "@/hooks/useGuessKeybinds";

export default function Game() {
  const { score, tickets, currentIndex, guess } = useGame();

  const previousTicket = tickets[currentIndex - 1];
  const currentTicket = tickets[currentIndex];
  const nextTicket = tickets[currentIndex + 1];

  const ticketsToDisplay = [previousTicket, currentTicket, nextTicket];

  useGuessKeybinds();

  return (
    <>
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Score>
          <AnimatePresence mode="wait">
            <motion.div
              key={score}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {score}
            </motion.div>
          </AnimatePresence>
        </Score>
        <Timer />
      </div>

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

      <div className="grid p-8 gap-8 bg-zinc-900 grid-cols-2">
        {TICKET_TYPES.map(type => (
          <Action key={type} onClick={() => guess(type)}>
            {type}
          </Action>
        ))}
      </div>
    </>
  );
}
