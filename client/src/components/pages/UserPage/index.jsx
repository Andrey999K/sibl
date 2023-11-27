import React, { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import { useParams } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import { getPosts } from "../../../utils/getPosts";
import { useSelector } from "react-redux";
import { getSearch } from "../../../store/search.slicer";

const UserPage = () => {
  const [posts, setPosts] = useState(null);
  const { userId } = useParams();
  const search = useSelector(getSearch());
  const sendRequest = useDebounce((search, setPosts, userId) => {
    getPosts(search, setPosts, userId);
  });
  useEffect(() => {
    sendRequest(search, setPosts, userId);
  }, [search]);
  if (!posts) return <Loader />;
  if (!posts.length) {
    return (
      <div className="h-[80dvh] flex justify-center items-center">
        <h3 className="font-semibold text-3xl">Не найдено ни одного поста</h3>
      </div>
    );
  }
  return (
    <div className="w-[695px] my-12">
      <PostsList data={posts} />
    </div>
  );
};

export default UserPage;
