import { FC } from "react";
import { PaginationArrowsProps } from "./paginationArrowsProps";

export const PaginationArrows: FC<PaginationArrowsProps> = ({ currentPage, pageCount, prevPageEvent, nextPageEvent }) => {
  return (
    <div>
      {
        currentPage !== 0 ?
          (
            <div>
              <span onClick={prevPageEvent}>&#60;</span>
            </div>
          ) : (<></>)
      }
      {
        currentPage !== pageCount ?
          (
            <div>
              <span onClick={nextPageEvent}>&#62;</span>
            </div>
          ) : (<></>)
      }
    </div>
  )
}