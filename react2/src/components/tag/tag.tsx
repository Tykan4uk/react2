import { FC } from "react";
import { TagProps } from "./tagProps";

import styles from "./tag.module.css"

export const Tag: FC<TagProps> = ({ tagName }) => {
  return (
    <div className={styles["tag"]}>
      <span>{tagName}</span>
    </div>
  );
}