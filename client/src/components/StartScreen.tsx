import { useGame } from "@/stores/useGame";

export default function StartScreen() {
  const { startGame } = useGame();

  return (
    <div className="grid place-content-center h-screen">
      <button onClick={() => startGame()}>Start Game</button>
    </div>
  );
}
