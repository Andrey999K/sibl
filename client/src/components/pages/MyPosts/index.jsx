import React, { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import postService from "../../../services/post.service";
import { useSelector } from "react-redux";

const MyPosts = () => {
  const [posts, setPosts] = useState(null);
  const currentUser = useSelector(state => state.userReducer);
  useEffect(() => {
    // setTimeout(() => {
    //   httpService.get("http://localhost:3000/db/posts.json")
    //     .then(res => {
    //       console.log(res.data);
    //       setPosts(res.data);
    //     })
    //     .catch(error => console.error(error));
    // }, 1000);
    postService.get({ userId: currentUser._id })
      .then(res => setPosts(res))
      .catch(error => console.error(error));
  }, []);
  if (!posts) return <Loader />;
  if (!posts.length) {
    return (
      <div className="h-[80dvh] flex justify-center items-center">
        <h3 className="font-semibold text-3xl">У вас нет ни одного поста.</h3>
      </div>
    );
  }
  return (
    <div className="w-[695px] my-12">
      <PostsList data={posts} my={true} />
    </div>
  );
};

export default MyPosts;
