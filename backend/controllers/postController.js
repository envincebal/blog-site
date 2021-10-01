const postModel = require("../models/posts");
const Posts = postModel.Post;

module.exports = {
  index: (req, res) => {
    Posts.find()
      .sort({
        date: -1
      })
      .then(posts => {
        res.json({
          posts
        });
      });
  },

  compose_post: (req, res) => {
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const postDate = new Date();

    Posts.create({
        date: postDate,
        title: postTitle,
        content: postContent
      })
      .then(post => {
        res.status(201).json(post);
      });
  },

  posts_get_id: (req, res) => {
    const requestedId = req.params.id
    Posts.findOne({
      _id: requestedId
    }, (err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          title: post.title,
          content: post.content
        });
      }
    })
  },

  edit_get_id: (req, res) => {

    Posts.findOne({
        id: req.params.id
      })
      .then(res => {
        res.status(201).json(res);
      });
  },

  edit_put_id: (req, res) => {
    Posts.findByIdAndUpdate({
        _id: req.params.id
      }, {
        $set: {
          title: req.body.title,
          content: req.body.content
        }
      }, {
        new: true
      })
      .then(updatedPost => res.json(updatedPost));
  },

  delete_post: (req, res) => {
    const deletePosts = req.params.id;

    Posts.findByIdAndDelete({
        _id: deletePosts
      })
      .then(post => {
        if (!post) {
          res.status(200).send(deletePosts + " has been deleted");
        }
      });
  }
}