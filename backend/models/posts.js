const mongoose = require("mongoose");

// Defines date, title and content for Post Schema
const postSchema = {
  date: String,
  title: String,
  content: String
}

const Post = mongoose.model("Post", postSchema);

module.exports.Post = Post;