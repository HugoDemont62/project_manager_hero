export enum TicketStatus {
  Bug = 'bug',
  Feature = 'feature',
  Support = 'support',
  Technical = 'technical'
}

export interface ITicket {
  title: string;
  description: string;
  status: TicketStatus;
}

export interface Bonus
{
    title: string;
    description: string;

}