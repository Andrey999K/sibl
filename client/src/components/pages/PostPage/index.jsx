import React, { useEffect, useState } from "react";
import Avatar from "../../common/Avatar";
import { Link, useHistory, useParams } from "react-router-dom";
import Loader from "../../ui/Loader";
import postService from "../../../services/post.service";
import formatDate from "../../../utils/formatDate";
import PostMenu from "../../ui/PostMenu";
import PostEditor from "../../common/PostEditor";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/user.slicer";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [onEditPost, setOnEditPost] = useState(false);
  const { postId } = useParams();
  const currentUser = useSelector(getUser());
  const homepage = process.env.PUBLIC_URL;
  const history = useHistory();

  const handleDeletePost = () => {
    postService.delete(postId)
      .then(res => {
        if (res.content) {
          history.replace("/");
        }
      })
      .catch(() => {});
  };

  const handleEditPost = (newPost) => {
    setOnEditPost(false);
    setPost(prevState => ({ ...prevState, ...newPost }));
  };

  useEffect(() => {
    postService.get({ postId })
      .then(res => {
        setPost(res);
      })
      .catch(() => {});
  }, []);
  if (!post) return <Loader />;
  return (
    <>
      {onEditPost && (
        <PostEditor
          closeEditor={() => setOnEditPost(false)}
          updatePost={handleEditPost}
          postId={post._id}
          title={post.title}
          content={post.content}
        />
      )}
      <div className="w-full max-w-screen-lg ml-auto my-12">
      <div className="bg-white rounded p-5 flex flex-col gap-3">
        <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Link to={`${homepage}/user/${post.userId}`} className="flex gap-3 items-center">
            <Avatar/>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{post.nickname}</span>
            </div>
          </Link>
          <span className="text-base text-gray-400">{formatDate(post.created_at)}</span>
        </div>
        {(currentUser && currentUser._id === post.userId) && (
          <PostMenu
            list={[
              { text: "Изменить", action: () => setOnEditPost(true) },
              { text: "Удалить", action: handleDeletePost }
            ]}
          />
        )}
      </div>
      <h2 className="font-medium text-2xl">{post.title}</h2>
      {post.image && (
        <div className="rounded-lg overflow-hidden w-full">
          <img className="w-full" src={`/images/${post.image}`} alt="Картинка"/>
        </div>
      )}
      <div
        className="flex flex-col gap-5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
        {post.tags && (
          <div className="flex gap-1">
            <span>Теги:</span>
            <ul className="flex text-sky-500 gap-1">
              {post.tags.map((tag, index) => <li key={`tag_${index}`} className="hover:underline cursor-pointer">{tag + (index !== post.tags.length - 1 ? "," : "")}</li>)}
            </ul>
          </div>
        )}
      </div>
      {post.comments && (
        <div className="mt-14 p-5 bg-white rounded flex flex-col gap-4">
          <h3 className="font-medium">Комментарии {post.comments.length}</h3>
          <ul className="flex flex-col gap-4">
            {post.comments.map(({ id, user, date, text }) => (
              <li key={`comment_${id}`}>
                <div className="flex gap-3 items-center">
                  <Link to={`${homepage}/user/${user.id}`} className="flex gap-3 items-center">
                    <Avatar/>
                    <span>{user.username}</span>
                  </Link>
                  <Link to={`${homepage}/user/${user.id}`} className="text-sm text-gray-500">{date}</Link>
                </div>
                <p className="mt-2">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <button className="py-1 px-5 bg-my-green-200 text-white rounded-lg hover:bg-my-green-300 duration-200">Загрузить ещё</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default PostPage;
