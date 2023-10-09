const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, {
  timestamps: { createdAt: "created_at" }
});

module.exports = model("Post", schema);