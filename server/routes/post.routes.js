const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const { postId, userId, search } = req.query;
      if (postId) {
        const post = await Post.findOne({ _id: postId });
        const user = await User.findOne({ _id: post.userId });
        res.status(200).send({ ...post._doc, nickname: user.nickname });
      } else if (userId) {
        const list = search
          ? await Post.find({
            $and: [
              { userId },
              {
                $or: [
                  { title: { $regex: search, $options: "i" } },
                  { content: { $regex: search, $options: "i" } },
                ],
              },
            ],
          })
          : await Post.find({ userId });
        const newList = await Promise.all(list.map(async item => {
          const user = await User.findOne({ _id: item.userId });
          return { ...item.toObject(), nickname: user.nickname };
        }));
        res.status(200).send(newList)
      } else {
        const list = search
          ? await Post.find({
            $or: [
              { title: { $regex: search, $options: "i" } },
              { content: { $regex: search, $options: "i" } },
            ]
          })
          : await Post.find();
        const newList = await Promise.all(list.map(async item => {
          const user = await User.findOne({ _id: item.userId });
          return { ...item.toObject(), nickname: user.nickname };
        }));
        res.status(200).send(newList);
      }
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      })
    }
  })
  .post(auth, async (req, res) => {
    try {
      console.log(req.body);
      console.log({ user: req.user });
      console.log(req.user._id);
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