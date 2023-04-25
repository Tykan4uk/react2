/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { PostModel } from "../../models/postModel";
import { PostService } from "../../services/postService";
import { Post } from "../post/post";
import { PaginationArrows } from "../paginationArrows/paginationArrows";

export const PostList = () => {
  const [posts, setPosts] = useState<PostModel[]>();
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState<number>();
  const pageSize = 10;

  useEffect(() => {
    const loadPostPage = async () => {
      const result = await PostService.getPostByPage(page, pageSize);

      setPosts(result.posts);
      setPageCount(Math.ceil(result.total / pageSize));
    }

    loadPostPage();
  }, [page])

  const prevPage = () => { setPage(page - 1) }

  const nextPage = () => { setPage(page + 1); }

  return (
    <div>
      {
        posts?.map(post => (<Post
          title={post.title}
          body={post.body}
          userId={post.userId}
          tags={post.tags}
          reactions={post.reactions} />))
      }
      <PaginationArrows currentPage={page} pageCount={pageCount!} prevPageEvent={prevPage} nextPageEvent={nextPage} />
    </div>
  );
}