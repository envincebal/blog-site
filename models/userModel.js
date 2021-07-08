const mongoose = require("mongoose");

const userSchema = {
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  UserPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts"
    }
  ]
}

const User = mongoose.model("User", userSchema);

module.exports = User