import postService from "../services/post.service";

export const getPosts = (search, setPosts, userId = false) => {
  postService.get(userId ? { search, userId } : { search })
    .then(res => setPosts(res))
    .catch(error => console.error(error));
};
