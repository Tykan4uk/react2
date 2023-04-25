import { FC } from "react";
import { ReactionCounterProps } from "./reactionCounterProps";

export const ReactionCounter: FC<ReactionCounterProps> = ({ count }) => {
  return (
    <div>
      <img src="./reaction.png" alt="Reaction" />
      <span>{count}</span>
    </div>
  )
}