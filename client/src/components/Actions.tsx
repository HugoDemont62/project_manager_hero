import { useGame } from "@/stores/useGame";
import Action from "./Action";
import useGuessKeybinds from "@/hooks/useGuessKeybinds";

export default function Actions() {
  const { guess } = useGame();

  useGuessKeybinds();

  return (
    <div className="grid container mx-auto rounded-t-3xl mt-auto p-8 gap-3 bg-zinc-900 grid-cols-2">
      <Action variant="bug" onClick={() => guess("bug")}>
        Bug
      </Action>
      <Action variant="userStory" onClick={() => guess("user-story")}>
        User Story
      </Action>
      <Action variant="task" onClick={() => guess("task")}>
        Task
      </Action>
      <Action variant="a" onClick={() => guess("a")}>
        a
      </Action>
    </div>
  );
}
