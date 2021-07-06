const mongoose = require("mongoose");

// Defines date, title and content for Post Schema
const postSchema = {
  Date: String,
  Title: String,
  Content: String
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;