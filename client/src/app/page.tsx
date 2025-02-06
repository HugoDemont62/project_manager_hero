"use client";

import Game from "@/components/Game";
import StartScreen from "@/components/StartScreen";
import { useGame } from "@/stores/useGame";

export default function Home() {
  const { gameState } = useGame();

  return (
    <div className="">
      {gameState === "idle" && <StartScreen />}
      {gameState === "ended" && <div>Game Over</div>}
      {gameState === "started" && <Game />}
    </div>
  );
}
