import { useGame } from "@/stores/useGame";
import Action from "./Action";
import useGuessKeybinds from "@/hooks/useGuessKeybinds";
import { TICKET_TYPES } from '@/data/tickets'

export default function Actions() {
  const { guess } = useGame();

  useGuessKeybinds();

  return (
    <div className="grid container mx-auto rounded-t-3xl mt-auto p-8 gap-3 bg-zinc-900 grid-cols-2 sticky bottom-0">
      {TICKET_TYPES.map(type => (
        <Action key={type} onClick={() => guess(type)}>
          {type}
        </Action>
      ))}
    </div>
  );
}
