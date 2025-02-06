import { useGame } from '@/stores/useGame'

export default function StartScreen () {
  const {startGame} = useGame()
  return (
    <div className="relative flex flex-col min-h-screen text-white bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 bg-red-500 rounded-full opacity-75 animate-neon-pulse blur-3xl" style={{ top: '10%', left: '20%' }}></div>
        <div className="absolute w-48 h-48 bg-green-500 rounded-full opacity-75 animate-neon-pulse blur-3xl" style={{ top: '50%', left: '70%' }}></div>
        <div className="absolute w-24 h-24 bg-blue-500 rounded-full opacity-75 animate-neon-pulse blur-3xl" style={{ top: '70%', left: '30%' }}></div>
        <div className="absolute w-24 h-24 bg-yellow-500 rounded-full opacity-75 animate-neon-pulse blur-3xl" style={{ top: '5%', left: '80%' }}></div>
      </div>
      <div className="relative grid place-content-center min-h-screen z-10 overflow-hidden">
        <h1 className="text-4xl font-bold mt-8 text-center">Tickets Master</h1>
        <h2 className="text-l text-gray-400 mt-4 text-center">
          Tu veux enfin pouvoir gérer tes tickets comme un boss ?<br/>
          Alors, accroche-toi parce que ce jeu est là pour toi !
        </h2>
        <button
          className="px-6 py-3 text-xl bg-zinc-900 rounded-lg hover:bg-zinc-700 transition-colors mt-4"
          onClick={() => startGame()}
        >
          Start Game
        </button>
      </div>
    </div>
  )
}