import { useGame } from "@/stores/useGame";
import { useEffect, useRef, useState } from "react";

export function useTimer() {
  const shouldRun = useRef(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const duration = useRef(0);
  const [, rerender] = useState({});
  const { startedAt, endedAt } = useGame();

  useEffect(() => {
    const update = () => {
      rerender({});
    };

    if (startedAt) {
      shouldRun.current = true;
    }

    if (endedAt) {
      shouldRun.current = false;
    }

    if (shouldRun.current) {
      timer.current = setInterval(() => {
        duration.current = Date.now() - (startedAt ?? Date.now());
        update();
      }, 1000);
    }
  }, [startedAt, endedAt, shouldRun]);

  function start() {
    shouldRun.current = true;
  }

  function stop() {
    shouldRun.current = false;
  }

  function reset() {
    shouldRun.current = false;
  }

  return { duration, start, stop, reset };
}
