import React, { useState } from "react";
import PropTypes from "prop-types";
import postService from "../../../services/post.service";
import BigButton from "../BigButton";
import ModalWindow from "../ModalWindow";

const PostEditor = ({ postId, title, content, closeEditor, updatePost }) => {
  const [post, setPost] = useState({
    title,
    content
  });

  const handleChange = (e) => {
    setPost(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postService.edit({ ...post, postId })
      .then(res => {
        if (res.content.content === post.content) {
          updatePost({ title: res.content.title, content: res.content.content });
        }
      })
      .catch(error => console.error(error));
  };
  return (
    <ModalWindow handleClose={closeEditor}>
      <div className="flex flex-col h-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-between h-full">
      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-2">
          <span>Заголовок поста</span>
          <input
            value={post.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Заголовок поста"
            className="p-2 rounded shadow-inner border-black/20 border-[1px]"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Текст поста</span>
          <textarea
            value={post.content}
            onChange={handleChange}
            name="content"
            placeholder="Текст поста"
            className="p-2 rounded shadow-inner border-black/20 border-[1px]"
            rows={8}
          >{post.content}</textarea>
        </label>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div>
          <BigButton
            className={"ml-auto " + ((post.title === title && post.content === content) ? "!bg-gray-400 !hover:bg-gray-400 !cursor-default" : "")}
          >Изменить</BigButton>
        </div>
        <div>
          <BigButton
            onClick={closeEditor}
            className="ml-auto"
          >Отмена</BigButton>
        </div>
      </div>
    </form>
      </div>
    </ModalWindow>
  );
};

PostEditor.propTypes = {
  postId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  closeEditor: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default PostEditor;
