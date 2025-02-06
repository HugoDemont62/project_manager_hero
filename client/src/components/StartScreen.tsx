import { useGame } from '@/stores/useGame'

export default function StartScreen () {
  const {startGame} = useGame()

  return (
    <div className="relative flex flex-col min-h-screen text-white bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-16 h-16 sm:w-32 sm:h-32 bg-red-500 rounded-full opacity-75 animate-neon-pulse blur-3xl"
             style={{top: '10%', left: '20%'}}></div>
        <div className="absolute w-24 h-24 sm:w-48 sm:h-48 bg-green-500 rounded-full opacity-75 animate-neon-pulse blur-3xl"
             style={{top: '50%', left: '70%'}}></div>
        <div className="absolute w-12 h-12 sm:w-24 sm:h-24 bg-blue-500 rounded-full opacity-75 animate-neon-pulse blur-3xl"
             style={{top: '70%', left: '30%'}}></div>
        <div className="absolute w-12 h-12 sm:w-24 sm:h-24 bg-yellow-500 rounded-full opacity-75 animate-neon-pulse blur-3xl"
             style={{top: '5%', left: '80%'}}></div>
      </div>
      <div className="relative grid place-content-center min-h-screen z-10 overflow-hidden px-4">
        <h1 className="text-2xl sm:text-4xl font-bold mt-8 text-center">Tickets Master</h1>
        <h2 className="text-sm sm:text-lg text-gray-400 mt-4 text-center">
          Tu veux enfin pouvoir gérer tes tickets comme un boss ?<br/>
          Alors, accroche-toi parce que ce jeu est là pour toi !
        </h2>
        <button
          className="px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl bg-zinc-900 rounded-lg hover:bg-zinc-700 transition-colors mt-4"
          onClick={() => startGame()}
        >
          Start Game
        </button>
      </div>
    </div>
  )
}