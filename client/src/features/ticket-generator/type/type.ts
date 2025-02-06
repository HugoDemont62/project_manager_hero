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

export enum BonusType {
    Positive = 'positive',
    Negative = 'negative'
}

export interface Bonus
{
    title: string;
    description: string;
    timer: number;
    type: BonusType
    impact: number;
}