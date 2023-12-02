import postService from "../services/post.service";

export const getPosts = async payload => {
  const { search, userId } = payload;
  return await postService.get(userId ? { search, userId } : { search });
};
