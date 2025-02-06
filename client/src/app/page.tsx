"use client";

import Action from "@/components/Action";
import StartScreen from "@/components/StartScreen";
import Ticket from "@/components/Ticket";
import { TICKET_TYPES } from "@/data/tickets";
import { useGame } from "@/stores/useGame";

export default function Home() {
  const { gameState, tickets, currentIndex, guess, score } = useGame();

  const previousTicket = tickets[currentIndex - 1];
  const currentTicket = tickets[currentIndex];
  const nextTicket = tickets[currentIndex + 1];

  const ticketsToDisplay = [previousTicket, currentTicket, nextTicket];

  return (
    <div className="">
      {gameState === "idle" && <StartScreen />}
      {gameState === "ended" && <div>Game Over</div>}
      {gameState === "started" && (
        <>
          {score}
          <div className="flex container mx-auto flex-col gap-4">
            {ticketsToDisplay.map(({ id, description, type }, i) => (
              <Ticket key={id}>
                {description} ({currentIndex === i ? "current" : "not current"})
                <span className="rounded-full bg-blue-800 text-xs w-min px-2 text-nowrap">
                  {type}
                </span>
              </Ticket>
            ))}
          </div>

          <div className="grid p-8 gap-8 bg-zinc-900 grid-cols-2">
            {TICKET_TYPES.map(type => (
              <Action key={type} onClick={() => guess(type)}>
                {type}
              </Action>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
