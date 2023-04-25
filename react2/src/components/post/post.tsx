import { FC } from "react";
import { PostProps } from "./postProps";
import { UserName } from "../userName/userName";
import { Tag } from "../tag/tag";

export const Post: FC<PostProps> = ({ title, body, userId, tags, reactions }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <UserName userId={userId} />
      </div>
      <p>{body}</p>
      <div>
        <div>
          {
            tags.map(tag => (<Tag tagName={tag} />))
          }
        </div>
        <span>{reactions}</span>
      </div>
    </div>
  );
}