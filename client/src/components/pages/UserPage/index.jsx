import React, { useEffect } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSearch } from "../../../store/search.slicer";
import { getLoadingPostList, getPostByUser } from "../../../store/postList.slicer";
import MainLayout from "../../../layouts/MainLayout";

const UserPage = () => {
  const { userId } = useParams();
  const posts = useSelector(getPostByUser(userId));
  const loading = useSelector(getLoadingPostList());
  const search = useSelector(getSearch());
  const postsSearch = posts.filter(post => post.content.includes(search) || post.title.includes(search));
  useEffect(() => {
    document.title = "Sibl | Посты пользователя";
  }, []);
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
      <PostsList data={postsSearch} />
    </MainLayout>
  );
};

export default UserPage;
