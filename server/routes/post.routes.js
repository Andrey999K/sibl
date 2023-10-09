const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const { postId } = req.query;
      if (postId) {
        const post = await Post.findOne({ _id: postId });
        res.status(200).send(post);
      } else {
        const list = await Post.find();
        res.status(200).send(list)
      }
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      })
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newPost= await Post.create({
        ...req.body,
        userId: req.user._id
      });
      res.status(200).send(newPost);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      })
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const { postId } = req.query;
      const result = await Post.deleteOne({ _id: postId });
      if (result.deletedCount === 0) {
        res.status(400).json({
          message: "Удаляемый пост не найден."
        })
      } else res.status(200).send(true);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      })
    }
  });

router.patch("/:postId", auth,  async (req, res) => {
  try {
    const { postId } = req.params;
    // todo:userId === current user id
    if (postId) {
      const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
      res.send(updatedPost);
    } else {
      res.status(401).json({
        message: "Unauthorized"
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    })
  }
});

module.exports = router;