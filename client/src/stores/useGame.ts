import { TICKET_TYPES, TicketType } from "@/data/tickets";
import { create } from "zustand";

interface Ticket {
  id: string;
  type: TicketType;
  description: string;
}

interface UseGameStore {
  gameState: "idle" | "started" | "ended";
  startedAt: number | null;
  endedAt: number | null;

  currentIndex: number;
  score: number;

  tickets: Ticket[];
  guesses: TicketType[];

  startGame: () => void;
  endGame: () => void;
  resetGame: () => void;

  _setIndex: (index: number) => void;
  _setTickets: (tickets: Ticket[]) => void;

  guess: (type: TicketType) => void;

  addTicket: (ticket: Ticket) => void;
  removeTicket: (ticketId: string) => void;
}

const BASE_TICKETS = Array.from({ length: 150 }).map((item, i) => {
  return {
    id: i.toString(),
    type: TICKET_TYPES[Math.floor(Math.random() * TICKET_TYPES.length)],
    description: `This is the ticket ${i}`,
  };
}) satisfies Ticket[];

export const useGame = create<UseGameStore>()((set, get) => ({
  get gameState() {
    if (this.endedAt) {
      return "ended";
    }

    if (this.startedAt) {
      return "started";
    }

    return "idle";
  },
  score: 0,
  currentIndex: 1,
  startedAt: null,
  endedAt: null,
  tickets: BASE_TICKETS,
  guesses: [],

  resetGame: () => {
    set({
      currentIndex: 1,
      tickets: [],
      startedAt: null,
      endedAt: null,
    });
  },
  startGame: () => {
    set({ startedAt: Date.now(), gameState: "started" });
  },

  endGame: () => {
    set({ endedAt: Date.now(), gameState: "ended" });
  },

  _setIndex: (index: number) => {
    set({ currentIndex: index });
  },

  _setScore: (score: number) => {
    set({ score });
  },

  _nextTicket: () => {
    set(state => {
      const currentIndex = state.currentIndex + 1;
      return { currentIndex };
    });
  },

  _setTickets: tickets => {
    set({ tickets });
  },

  addTicket: ticket => {
    // const id = crypyto.randomUUID();
    set(state => ({ tickets: [...state.tickets, ticket] }));
  },

  removeTicket: ticketId => {
    set(state => {
      const tickets = state.tickets.filter(t => t.id !== ticketId);
      return { tickets };
    });
  },

  guess: (type: TicketType) => {
    const { guesses } = get()
    set({ guesses: [...guesses, type] });
    // console.log(get().guesses, get().currentIndex, get().tickets);
    console.log(get().guesses[get().currentIndex - 1] === get().tickets[get().currentIndex - 1].type);
    const { tickets, currentIndex, gameState, endGame } = get();
    const currentTicket = tickets[currentIndex];

    console.log("guess", type === currentTicket.type);

    if (gameState !== "started") {
      return;
    }

    if (currentTicket.type === type) {
      set(state => ({
        score: state.score + 1,
      }));
    }

    if (currentIndex + 1 < tickets.length) {
      set(state => ({ currentIndex: state.currentIndex + 1 }));
    } else {
      endGame();
    }
  },
}));
