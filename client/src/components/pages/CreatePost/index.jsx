import React, { useState } from "react";
import Button from "../../common/Button";
import postService from "../../../services/post.service";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();
  const [post, setPost] = useState({
    title: "",
    content: ""
  });
  const handleChange = (e) => {
    setPost(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postService.create(post)
      .then(res => history.push(`/post/${res.content._id}`))
      .catch(error => console.error(error));
  };
  return (
    <div className="w-[695px] my-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
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
          >{post.content}</textarea>
        </label>
        <Button className="mt-5">Создать пост</Button>
      </form>
    </div>
  );
};

export default CreatePost;
