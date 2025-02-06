import React, { useState, useEffect } from 'react';
import { tv } from "tailwind-variants";

const timer = tv({
  base: "",
});

interface TimerProps {
  initialDuration: number;
  className?: string;
}

const Timer: React.FC<TimerProps> = ({ initialDuration, className }) => {
  const [duration, setDuration] = useState(initialDuration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(prevDuration => {
        if (prevDuration > 0) {
          return prevDuration - 1;
        } else {
          clearInterval(intervalId);
          console.log("Time's up!");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return (
    <div className={timer({ className })}>
      {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </div>
  );
};

export default Timer;