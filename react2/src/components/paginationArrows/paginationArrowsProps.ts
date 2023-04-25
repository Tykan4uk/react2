export interface PaginationArrowsProps {
  currentPage: number;
  pageCount: number;
  prevPageEvent: () => void;
  nextPageEvent: () => void;
}