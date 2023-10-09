const { Schema, model } = require("mongoose");

const schema = new Schema({
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }
}, {
  timestamps: { createdAt: "created_at" }
});

module.exports = model("Comment", schema);