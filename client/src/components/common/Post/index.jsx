import React, { useState } from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Post.css";
import formatDate from "../../../utils/formatDate";
import PostEditor from "../PostEditor";
import { deletePost } from "../../../store/postList.slicer";
import { useDispatch } from "react-redux";
import ContextMenu from "../ContextMenu";

const Post = ({
  _id: id,
  created_at: createdAt,
  title,
  content,
  image,
  likes,
  comments,
  onDelete,
  userId,
  nickname,
  avatar
}) => {
  const [onEditPost, setOnEditPost] = useState(false);
  const [post, setPost] = useState({
    id,
    createdAt,
    title,
    content,
    image,
    likes,
    comments,
    nickname,
    avatar
  });
  const homepage = process.env.PUBLIC_URL;
  const dispatch = useDispatch();
  const handleOnEditPost = () => {
    setOnEditPost(true);
  };
  const handleEditPost = newPost => {
    setOnEditPost(false);
    setPost(prevState => ({ ...prevState, ...newPost }));
  };
  const handleDeletePost = () => {
    dispatch(deletePost(id));
  };
  return (
    <>
      <div className="p-6 bg-white rounded-xl flex flex-col gap-2 text-base">
        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <Link to={`${homepage}/user/${userId}`} className="flex gap-3 items-center">
              <Avatar url={avatar} />
              <span>{post.nickname || "Nickname"}</span>
            </Link>
            <Link to={`${homepage}/post/${post.id}`} className="text-sm text-gray-500">
              {formatDate(createdAt)}
            </Link>
          </div>
          {onDelete && (
            <div className="flex items-center">
              <ContextMenu
                list={[
                  { text: "Изменить", action: handleOnEditPost },
                  { text: "Удалить", action: () => handleDeletePost(post.id) }
                ]}
                icon="menu"
              />
            </div>
          )}
        </div>
        {!!post.title && <h2 className="font-bold text-xl">{post.title}</h2>}
        {!!post.content && <div className="text-truncate">{post.content}</div>}
        <Link
          to={`${homepage}/post/${post.id}`}
          className="text-gray-500 cursor-pointer font-medium hover:text-my-green-200"
        >
          Подробнее...
        </Link>
        {!!image && (
          <div className="rounded-xl overflow-hidden">
            <img className="m-0 w-full" src={`${homepage}/images/${image}`} alt="Картинка" />
          </div>
        )}
      </div>
      {onEditPost && (
        <PostEditor
          postId={post.id}
          title={title}
          content={content}
          closeEditor={() => setOnEditPost(false)}
          updatePost={handleEditPost}
        />
      )}
    </>
  );
};

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  userId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  nickname: PropTypes.string,
  avatar: PropTypes.string
};

export default Post;
