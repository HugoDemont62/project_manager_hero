"use client";

import { AnimatePresence, motion } from "motion/react";
import { useGame} from "@/stores/useGame";
import Ticket from "./Ticket";
import { TICKET_TYPES, TICKETS_BY_DIFFICULTY, type Ticket as TicketType, type DifficultyLevel } from "@/data/tickets";
import Action from "./Action";
import Timer from "./Timer";
import Score from "./Score";
import Actions from "./Actions";
import Tickets from "./Tickets";
import { useEffect } from "react";

export default function Game() {
  const { score, currentIndex, guess, difficulty = "Facile" } = useGame() as unknown as { 
    difficulty: DifficultyLevel; 
    score: number; 
    currentIndex: number; 
    guess: (type: string) => void;
  };

  // On initialise la difficulté au premier rendu
  useEffect(() => {
    useGame.setState({ difficulty: "Facile" });
  }, []);

  // On récupère les tickets de la difficulté actuelle
  const difficultyTickets = TICKETS_BY_DIFFICULTY[difficulty] || [];
  
  // On mélange les tickets de manière aléatoire au début du jeu
  useEffect(() => {
    if (difficultyTickets.length > 0) {
      const shuffledTickets = [...difficultyTickets].sort(() => Math.random() - 0.5);
      useGame.setState({ tickets: shuffledTickets as unknown as any[] });
    }
  }, [difficulty, difficultyTickets]);

  const { tickets = [] } = useGame() as unknown as { tickets: TicketType[] };
  const previousTicket = tickets[currentIndex - 1];
  const currentTicket = tickets[currentIndex];
  const nextTicket = tickets[currentIndex + 1];

  const ticketsToDisplay = [previousTicket, currentTicket, nextTicket].filter(Boolean);


  return (
    <>
      <div className="container mx-auto flex items-center justify-between gap-4 h-full">
        <Score />
        <Timer />
      </div>

      <div className="flex container mx-auto flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {ticketsToDisplay.map((ticket, i) => (
            <motion.div
              initial={{ y: 100, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              key={ticket.id}
              layoutId={`ticket-${ticket.id}`}
            >
              <Ticket ticket={ticket} />
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
