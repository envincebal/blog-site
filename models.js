const mongoose = require("mongoose");


// Defines date, title and content for Post Schema
const postSchema = {
  date: String,
  title: String,
  content: String
}

const userSchema = {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

module.exports.Post = Post;
module.exports.User = User; 