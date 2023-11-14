import React, { useContext, useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/user.slicer";
import { SearchContext } from "../../../App";
import useDebounce from "../../../hooks/useDebounce";
import { getPosts } from "../../../utils/getPosts";

const MyPosts = () => {
  const [posts, setPosts] = useState(null);
  const currentUser = useSelector(getUser());
  const { search } = useContext(SearchContext);
  const sendRequest = useDebounce((search, setPosts, userId) => {
    getPosts(search, setPosts, userId);
  });
  useEffect(() => {
    sendRequest(search, setPosts, currentUser._id);
  }, [search]);
  if (!posts) return <Loader />;
  if (!posts.length) {
    return (
      <div className="h-[80dvh] flex justify-center items-center">
        <h3 className="font-semibold text-3xl">{search ? "Не найдено ни одного поста" : "У вас нет ни одного поста."}</h3>
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
