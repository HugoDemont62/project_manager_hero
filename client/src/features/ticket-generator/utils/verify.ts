import {ITicket} from "@/features/ticket-generator/type/type";

export function verify(answer: string, ticket: ITicket): boolean
{
    return answer === ticket.status;
}