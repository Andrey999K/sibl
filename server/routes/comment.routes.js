const express = require("express");
const auth = require("../middleware/auth.middleware");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const router = express.Router({ mergeParams: true });

// /api/comment
router
  .route("/")
  .get(auth, async (res, req) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Comment.find({ [orderBy]: equalTo });
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      })
    }
  })
  .post(auth, async (res, req) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.user._id
      });
      res.status(200).send(newComment);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже"
      })
    }
  })

router.delete("/:commentId", auth, async (req, res) => {
  try {
    const { commentId } = req.params;
    const removedComment = await Comment.findById(commentId);
    if (removedComment.userId.toString() === req.user._id) {
      await removedComment.remove();
      return res.send(null);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже"
    });
  }
});

router.patch("/:commentId", auth,  async (req, res) => {
  try {
    const { commentId } = req.params;

    if (commentId) {
      const updatedComment = await Comment.findByIdAndUpdate(commentId, req.body, { new: true });
      res.send(updatedComment);
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