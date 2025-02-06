import Action from "@/components/Action";
import Ticket from "@/components/Ticket";

export default function Home() {
  return (
    <div className="">
      <div className="flex container mx-auto  flex-col gap-4">
        <Ticket>Ticket 1</Ticket>
        <Ticket>Ticket 2</Ticket>
        <Ticket>Ticket 3</Ticket>
      </div>

      <div className="grid p-8 gap-8 bg-zinc-900 grid-cols-2">
        <Action>Bug</Action>
        <Action>User Story</Action>
        <Action>Task</Action>
        <Action>A</Action>
      </div>
    </div>
  );
}
