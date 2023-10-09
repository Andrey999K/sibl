import httpService from "./http.service";

const postEndpoint = "post/";

const postService = {
  get: async(payload) => {
    if (payload) {
      const { data } = await httpService.get(postEndpoint, { params: payload });
      return data.content;
    } else {
      const { data } = await httpService.get(postEndpoint);
      return data.content;
    }
  },
  create: async(payload) => {
    const { data } = await httpService.post(
      postEndpoint,
      payload
    );
    return data;
  },
  delete: async(postId) => {
    const { data } = await httpService.delete(
      postEndpoint,
      { params: { postId } }
    );
    return data;
  },
  edit: async({ postId, title, content }) => {
    const { data } = await httpService.patch(
      postEndpoint + postId,
      { title, content }
    );
    return data;
  }
};
export default postService;
