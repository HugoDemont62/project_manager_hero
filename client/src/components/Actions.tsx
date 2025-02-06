import { useGame } from "@/stores/useGame";
import Action from "./Action";
import { TICKET_TYPES } from "@/data/tickets";
import useGuessKeybinds from "@/hooks/useGuessKeybinds";

export default function Actions() {
  const { guess } = useGame();

  useGuessKeybinds();

  return (
    <div className="grid mt-auto p-8 gap-8 bg-zinc-900 grid-cols-2">
      {TICKET_TYPES.map(type => (
        <Action key={type} onClick={() => guess(type)}>
          {type}
        </Action>
      ))}
    </div>
  );
}
