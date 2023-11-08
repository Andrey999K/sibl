import React, { useState } from "react";
import PropTypes from "prop-types";
import postService from "../../../services/post.service";
import Button from "../Button";
import ModalWindow from "../ModalWindow";
import TextField from "../TextField";
import Textarea from "../Textarea";

const PostEditor = ({ postId, title, content, closeEditor, updatePost }) => {
  const [post, setPost] = useState({
    title,
    content
  });

  const handleChange = ({ name, value }) => {
    setPost(prevState => ({ ...prevState, [name]: value }));
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
        <TextField
          value={post.title}
          onChange={handleChange}
          name="title"
          label="Заголовок поста"
          placeholder="Заголовок поста"
        />
        <Textarea
          value={post.content}
          onChange={handleChange}
          name="content"
          label="Текст поста"
          placeholder="Текст поста"
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <div>
          <Button
            className={"ml-auto " + ((post.title === title && post.content === content) ? "!bg-gray-400 !hover:bg-gray-400 !cursor-default" : "")}
          >Изменить</Button>
        </div>
        <div>
          <Button
            onClick={closeEditor}
            className="ml-auto"
          >Отмена</Button>
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
