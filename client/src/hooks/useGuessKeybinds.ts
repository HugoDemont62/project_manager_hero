import { useGame } from "@/stores/useGame";
import { useEffect } from "react";

export default function useGuessKeybinds() {
  const { guess } = useGame();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["&" || "1"].includes(e.key)) {
        guess("bug");
      }

      if (["é" || "2"].includes(e.key)) {
        guess("user-story");
      }

      if (['"', "3"].includes(e.key)) {
        guess("task");
      }

      if (["'", "4"].includes(e.key)) {
        guess("a");
      }
    };

    document.addEventListener("keyup", handler);

    return () => document.removeEventListener("keyup", handler);
  }, []);
}
