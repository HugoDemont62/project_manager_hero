import ticketsFacile from './tickets-facile.json';
import ticketsMoyen from './tickets-moyen.json';
import ticketsDifficile from './tickets-difficile.json';

export const TICKET_TYPES = ["Bugs", "Features", "Support", "Soucis Techniques"] as const;
export type TicketType = typeof TICKET_TYPES[number];

export const DIFFICULTY_LEVELS = ["Facile", "Moyen", "Difficile"] as const;
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number];

export interface Ticket {
  id: string;
  content: string;
  type: TicketType;
}

export const TICKETS_BY_DIFFICULTY: Record<DifficultyLevel, Ticket[]> = {
  "Facile": ticketsFacile.tickets as Ticket[],
  "Moyen": ticketsMoyen.tickets as Ticket[],
  "Difficile": ticketsDifficile.tickets as Ticket[]
};
