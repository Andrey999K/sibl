import React, { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import postService from "../../../services/post.service";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [posts, setPosts] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    postService.get({ userId })
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

export default UserPage;
