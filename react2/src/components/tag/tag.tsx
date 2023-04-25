import { FC } from "react";
import { TagProps } from "./tagProps";

export const Tag: FC<TagProps> = ({ tagName }) => {
  return (
    <div>
      <span>{tagName}</span>
    </div>
  );
}