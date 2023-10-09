import React, { useEffect, useState } from "react";
import PostsList from "../../common/PostsList";
import Loader from "../../ui/Loader";
import postService from "../../../services/post.service";

const Homepage = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    // setTimeout(() => {
    //   httpService.get("http://localhost:3000/db/posts.json")
    //     .then(res => {
    //       console.log(res.data.content);
    //       setPosts(res.data.content);
    //     })
    //     .catch(error => console.error(error));
    // }, 1000);
    postService.get()
      .then(res => setPosts(res))
      .catch(error => console.error(error));
  }, []);
  if (!posts) return <Loader />;
  return (
    <div className="w-[695px] my-12">
      <PostsList data={posts} />
    </div>
  );
};

export default Homepage;
