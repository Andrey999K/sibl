const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  avatar: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
}, {
  timestamps: true
});

module.exports = model("User", schema);