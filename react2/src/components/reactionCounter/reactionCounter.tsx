import { FC } from "react";
import { ReactionCounterProps } from "./reactionCounterProps";
import styles from "./reactionCounter.module.css"

export const ReactionCounter: FC<ReactionCounterProps> = ({ count }) => {
  return (
    <div className={styles["counter"]}>
      <img
        className={styles["image"]}
        src="https://em-content.zobj.net/thumbs/120/twitter/322/thumbs-up_1f44d.png"
        alt="Reaction" />
      <span>{count}</span>
    </div>
  )
}