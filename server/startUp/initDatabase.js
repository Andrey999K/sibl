const Post = require("../models/Post");
const postsMock = require("../mock/posts.json");

module.exports = async () => {
  const posts = await Post.find();
  if (posts.length !== postsMock.length) {
    await createInitialEntity(Post, postsMock);
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