import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import ModalWindow from "../ModalWindow";
import TextField from "../TextField";
import Textarea from "../Textarea";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../store/postList.slicer";
import notification from "../../../utils/notification";

const PostEditor = ({ postId, title, content, closeEditor }) => {
  const [post, setPost] = useState({
    title,
    content
  });
  const dispatch = useDispatch();
  const handleChange = ({ name, value }) => {
    setPost(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (post.title === title && post.content === content) return;
    dispatch(updatePost({ post, postId }))
      .unwrap()
      .then(() => closeEditor())
      .catch(() => notification("error", "Произошла непредвиденная ошибка!"));
  };
  return (
    <ModalWindow handleClose={closeEditor}>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-between">
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
                className={
                  "ml-auto " +
                  (post.title === title && post.content === content
                    ? "!bg-gray-400 !hover:bg-gray-400 !cursor-default"
                    : "")
                }
              >
                Изменить
              </Button>
            </div>
            <div>
              <Button onClick={closeEditor} className="ml-auto">
                Отмена
              </Button>
            </div>
          </div>
        </form>
      </div>
    </ModalWindow>
  );
};

PostEditor.propTypes = {
  postId: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  closeEditor: PropTypes.func.isRequired
};

export default PostEditor;
