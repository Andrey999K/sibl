import React, { useContext, useEffect, useState } from "react";
import PostsList from "../../common/PostsList";
import Loader from "../../ui/Loader";
import { SearchContext } from "../../../App";
import { getPosts } from "../../../utils/getPosts";
import useDebounce from "../../../hooks/useDebounce";

const Homepage = () => {
  const [posts, setPosts] = useState(null);
  const { search } = useContext(SearchContext);
  const sendRequest = useDebounce((search, setPosts) => {
    getPosts(search, setPosts);
  });
  useEffect(() => {
    sendRequest(search, setPosts);
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

export default Homepage;
