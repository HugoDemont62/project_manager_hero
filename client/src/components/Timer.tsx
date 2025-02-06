import { useGame } from "@/stores/useGame";
import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

const timer = tv({
  base: "",
});

const UPDATE_DELAY_IN_MS = 1000;

export default function Timer({
                                className,
                                ...props
                              }: React.ComponentPropsWithoutRef<"div">) {
  const [, rerender] = useState({});
  const { startedAt } = useGame();

  const duration = startedAt
    ? Math.floor((Date.now() - startedAt) / 1000)
    : null;

  const minutes = duration !== null ? Math.floor(duration / 60) : 0;
  const seconds = duration !== null ? duration % 60 : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      rerender({});
    }, UPDATE_DELAY_IN_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div {...props} className={timer({ className })}>
      {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </div>
  );
}