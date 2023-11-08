import React, { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import postService from "../../../services/post.service";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/user.slicer";

const MyPosts = () => {
  const [posts, setPosts] = useState(null);
  const currentUser = useSelector(getUser());
  useEffect(() => {
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
