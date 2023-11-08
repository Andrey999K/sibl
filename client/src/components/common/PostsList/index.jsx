import React, { useState } from "react";
import Post from "../Post";
import PropTypes from "prop-types";
import postService from "../../../services/post.service";

const PostsList = ({ data, my }) => {
  const [posts, setPosts] = useState(data);
  const handleDeletePost = (postId) => {
    postService.delete(postId)
      .then(res => {
        if (res.content) {
          setPosts(prevState => ([...prevState].filter(item => item._id === postId)));
        }
      })
      .catch(() => {});
  };
  return (
    <ul className="flex flex-col gap-7">
      {posts.map(post => {
        if (my) return <Post key={post._id} {...post} onDelete={handleDeletePost}/>;
        return <Post key={post._id} {...post} />;
      })}
    </ul>
  );
};

PostsList.defaultProps = {
  my: false
};

PostsList.propTypes = {
  data: PropTypes.array.isRequired,
  my: PropTypes.bool
};
export default PostsList;
