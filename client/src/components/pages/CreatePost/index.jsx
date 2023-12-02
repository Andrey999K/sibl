import React, { useState } from "react";
import Button from "../../common/Button";
import { useHistory } from "react-router-dom";
import PageTitle from "../../common/PageTitle";
import { useDispatch } from "react-redux";
import { createPost } from "../../../store/postList.slicer";
import MainLayout from "../../../layouts/MainLayout";

const CreatePost = () => {
  const history = useHistory();
  const [post, setPost] = useState({
    title: "",
    content: ""
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    setPost(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost(post))
      .unwrap()
      .then(content => {
        history.push(`/post/${content._id}`);
      });
  };
  return (
    <MainLayout>
      <PageTitle>Создать пост</PageTitle>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
        <label className="flex flex-col gap-2">
          <span>Заголовок</span>
          <input
            value={post.title}
            onChange={handleChange}
            className="p-4 rounded-lg"
            type="text"
            name="title"
            placeholder="Заголовок"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Текст</span>
          <textarea
            onChange={handleChange}
            className="w-full p-4 rounded-lg"
            placeholder="Текст"
            rows={8}
            name="content"
            value={post.content}
          >
            {post.content}
          </textarea>
        </label>
        <Button className="mt-5">Создать пост</Button>
      </form>
    </MainLayout>
  );
};

export default CreatePost;
