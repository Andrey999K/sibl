const Post = require("../models/Post");
const postsMock = require("../mock/posts.json");
const Comment = require("../models/Comment");
const commentsMock = require("../mock/comments.json");

module.exports = async () => {
  const posts = await Post.find();
  if (posts.length !== postsMock.length) {
    await createInitialEntity(Post, postsMock);
  }

  const comments = await Comment.find();
  if (comments.length !== commentsMock.length) {
    await createInitialEntity(Comment, commentsMock);
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async item => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  )
}