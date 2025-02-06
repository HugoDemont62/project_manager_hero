import { tv, VariantProps } from "tailwind-variants";
import { motion } from "motion/react";

const action = tv({
  base: "p-4 min-h-32 text-xl border-2 border-transparent font-semibold bg-zinc-800 rounded-3xl text-white",
  variants: {
    variant: {
      bug: "bg-red-900",
      userStory: "bg-blue-900",
      task: "bg-emerald-900",
      a: "bg-amber-900",
    },
  },
});

interface ActionProps
  extends React.ComponentPropsWithoutRef<typeof motion.button>,
    VariantProps<typeof action> {}

export default function Action({
  children,
  variant,
  className,
  ...props
}: ActionProps) {
  return (
    <motion.button
      {...props}
      whileTap={{ scale: 0.98, rotateZ: 1 }}
      whileHover={{ scale: 1.02 }}
      className={action({ variant, className })}
    >
      {children}
    </motion.button>
  );
}
