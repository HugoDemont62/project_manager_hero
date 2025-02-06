export const TICKET_TYPES = ["bug", "user-story", "task", "a"] as const;
export type TicketType = (typeof TICKET_TYPES)[number];
