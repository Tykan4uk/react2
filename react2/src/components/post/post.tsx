import { FC } from "react";
import { PostProps } from "./postProps";
import { UserName } from "../userName/userName";
import { Tag } from "../tag/tag";
import { ReactionCounter } from "../reactionCounter/reactionCounter";
import styles from "./post.module.css";

export const Post: FC<PostProps> = ({ title, body, userId, tags, reactions }) => {
  return (
    <div className={styles["post"]}>
      <div className={styles["postHeader"]}>
        <h3>{title}</h3>
        <UserName userId={userId} />
      </div>
      <p>{body}</p>
      <div className={styles["postFooter"]}>
        <div className={styles["postTags"]}>
          {
            tags.map(tag => (<Tag tagName={tag} key={tag} />))
          }
        </div>
        <ReactionCounter count={reactions} />
      </div>
    </div>
  );
}