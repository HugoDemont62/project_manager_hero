"use client";

import Timer from "./Timer";
import Score from "./Score";
import Actions from "./Actions";
import Tickets from "./Tickets";

export default function Game() {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between gap-4 h-full">
        <Score />
        <Timer />
      </div>

      <Tickets />
      <Actions />
    </>
  );
}
