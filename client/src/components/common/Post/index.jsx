import React, { useState } from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SubscriptionButton from "../SubscriptionButton";
import Icon from "../Icon";
import Like from "../Like";
import PostMenu from "../../ui/PostMenu";
// import BigButton from "../BigButton";
// import { EditorState, convertFromHTML, convertToRaw } from "draft-js";
// import ContentState from "draft-js/lib/ContentState";
// import draftToHtml from "draftjs-to-html";
// import httpService from "../../../services/http.service";
import "./Post.css";
import formatDate from "../../../utils/formatDate";
import PostEditor from "../PostEditor";

const Post = ({ _id: id, created_at: createdAt, title, content, image, likes, comments, onDelete }) => {
  const [onEditPost, setOnEditPost] = useState(false);
  const [post, setPost] = useState({
    id, createdAt, title, content, image, likes, comments
  });
  // const contentState = convertFromHTML(createContent());
  // const defaultState = EditorState.createWithContent(
  //   ContentState.createFromBlockArray(contentState)
  // );
  // const [editorState, setEditorState] = useState(defaultState);
  // const { nickname } = user;
  const homepage = process.env.PUBLIC_URL;
  const handleOnEditPost = () => {
    setOnEditPost(true);
  };
  // function createContent() {
  //   let context = "";
  //   if (title) context += `<h2><strong>${title}</strong></h2>`;
  //   if (content) context += `<p>${content}</p>`;
  //   return context;
  // }
  // const handleEditPost = () => {
  //   const contentState = editorState.getCurrentContent();
  //   const rawContentState = convertToRaw(contentState);
  //   const newContent = draftToHtml(rawContentState).replace("\n", "").slice(0, -1);
  //   httpService.put(
  //     `http://localhost:5000/api/v1/post/${id}`,
  //     {
  //       newContent
  //     }
  //   )
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error));
  // };
  const handleDeletePost = (postId) => {
    onDelete(postId);
  };
  const handleEditPost = (newPost) => {
    setOnEditPost(false);
    setPost(prevState => ({ ...prevState, ...newPost }));
  };
  return (
    <>
      <div className="p-6 bg-white rounded-xl flex flex-col gap-4 text-base">
        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <Link to={homepage} className="flex gap-3 items-center">
              <Avatar />
              <span>{"Nickname"}</span>
            </Link>
            <Link to={`${homepage}/post/${post.id}`} className="text-sm text-gray-500">{formatDate(createdAt)}</Link>
          </div>
          {onDelete
            ? (
              <div className="flex items-center">
                <PostMenu
                  postId={post.id}
                  list={
                    [
                      { text: "Изменить", action: handleOnEditPost },
                      { text: "Удалить", action: () => handleDeletePost(post.id) }
                    ]
                  }
                />
              </div>
              )
            : (
              <SubscriptionButton/>
              )
          }
        </div>
        {!!post.title && <h2 className="font-bold text-xl">{post.title}</h2>}
        {!!post.content && (
          <div className="text-truncate">
            {post.content}
          </div>
        )}
        <Link
          to={`${homepage}/post/${post.id}`}
          className="text-gray-500 cursor-pointer font-medium hover:text-my-green-200"
        >
          Подробнее...
        </Link>
        {!!image && (
          <div className="rounded-xl overflow-hidden">
            <img
              className="m-0 w-full"
              src={`${homepage}/images/${image}`}
              alt="Картинка"
            />
          </div>
        )}
        <div className="flex gap-3">
          <div className="flex gap-2">
            <Like/>
            <span>{likes || "0"}</span>
          </div>
          <div className="flex gap-2">
            <div className="cursor-pointer hover:text-my-green-200 flex items-center justify-center">
              <Icon name="comment" />
            </div>
            <span>{comments || "0"}</span>
          </div>
        </div>
      </div>
      {onEditPost && (
        <PostEditor
          postId={post.id}
          title={title}
          content={content}
          closeEditor={() => setOnEditPost(false)}
          updatePost={handleEditPost}
        />
        /* <EditorPost editorState={editorState} setEditorState={setEditorState}/>
         <div className="ml-9 mt-auto h-full flex items-end">
          <BigButton onClick={handleEditPost}>Изменить</BigButton>
         </div> */
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
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }),
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func
};

export default Post;