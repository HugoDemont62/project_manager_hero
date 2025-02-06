import { useGame } from "@/stores/useGame";
import { AnimatePresence, motion } from "motion/react";

export default function Score({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  const { score } = useGame();

  return (
    <div className="flex flex-col gap-1">
      <span>Score</span>
      <span {...props} className="font-extrabold text-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={score}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {score}
          </motion.div>
        </AnimatePresence>
      </span>
    </div>
  );
}
