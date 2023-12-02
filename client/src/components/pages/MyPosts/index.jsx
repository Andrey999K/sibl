/* eslint-disable multiline-ternary */
import React from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/user.slicer";
import { getSearch } from "../../../store/search.slicer";
import { getLoadingPostList, getPostByUser } from "../../../store/postList.slicer";
import PageTitle from "../../common/PageTitle";
import MainLayout from "../../../layouts/MainLayout";

const MyPosts = () => {
  const currentUser = useSelector(getUser());
  const posts = useSelector(getPostByUser(currentUser?._id));
  const loading = useSelector(getLoadingPostList());
  const search = useSelector(getSearch());
  const postsSearch = posts.filter(post => post.content.includes(search) || post.title.includes(search));
  if (loading) return <Loader />;
  return (
    <MainLayout>
      {postsSearch.length ? (
        <>
          <PageTitle>Мои посты</PageTitle>
          <PostsList data={postsSearch} my={true} />
        </>
      ) : (
        <>
          <PageTitle>Мои посты</PageTitle>
          <div className="flex justify-center items-center h-full">
            <h3 className="font-semibold text-3xl">
              {search ? "Не найдено ни одного поста" : "У вас нет ни одного поста."}
            </h3>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default MyPosts;
