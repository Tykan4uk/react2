import { PaginationModel } from "./paginationModel";
import { PostModel } from "./postModel";

export interface PostPaginationModel extends PaginationModel {
  posts: [PostModel]
}