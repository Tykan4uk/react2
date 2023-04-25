import { FC } from "react";
import { PaginationArrowsProps } from "./paginationArrowsProps";
import styles from "./paginationArrows.module.css";

export const PaginationArrows: FC<PaginationArrowsProps> = ({ currentPage, pageCount, prevPageEvent, nextPageEvent }) => {
  return (
    <div className={styles["pagination"]}>
      {
        (
          <div
            className={currentPage !== 0 ? styles["activeArrow"] : styles["inactiveArrow"]}
            onClick={prevPageEvent}>
            <span>&#60;</span>
          </div>
        )
      }
      {
        (
          <div
            className={currentPage !== pageCount ? styles["activeArrow"] : styles["inactiveArrow"]}
            onClick={nextPageEvent}>
            <span>&#62;</span>
          </div>
        )
      }
    </div>
  )
}