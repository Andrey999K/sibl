import React from "react";
import PostsList from "../../common/PostsList";
import Loader from "../../ui/Loader";
import { useSelector } from "react-redux";
import { getSearch } from "../../../store/search.slicer";
import { getLoadingPostList, getPostList } from "../../../store/postList.slicer";
import PageTitle from "../../common/PageTitle";
import MainLayout from "../../../layouts/MainLayout";

const Homepage = () => {
  const posts = useSelector(getPostList());
  const loading = useSelector(getLoadingPostList());
  const search = useSelector(getSearch());
  const postsSearch = posts.filter(post => post.content.includes(search) || post.title.includes(search));
  if (loading) return <Loader />;
  if (!postsSearch.length) {
    return (
      <div className="h-[80dvh] flex justify-center items-center">
        <h3 className="font-semibold text-3xl">Не найдено ни одного поста</h3>
      </div>
    );
  }
  return (
    <MainLayout>
      <PageTitle>Главная</PageTitle>
      <PostsList data={postsSearch} />
    </MainLayout>
  );
};

export default Homepage;
