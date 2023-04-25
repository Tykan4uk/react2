import { API_URL } from "../consts/consts";
import { PostPaginationModel } from "../models/postPaginationModel";

export class PostService {
  static getPostByPage = async (page: number, pageSize: number): Promise<PostPaginationModel> => {
    const url = new URL(`${API_URL}/posts`);
    url.searchParams.set('skip', `${page * pageSize}`);
    url.searchParams.set('limit', `${pageSize}`);

    const response = await fetch(url).catch(() => { console.log('badFetch') });

    return (response?.ok ?? false) ? await response?.json() : {};
  }
}