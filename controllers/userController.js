const Users = require("../models/userModel");
const Posts = require("../models/postModel");
const bcrypt = require("bcrypt");

module.exports = {

  user_logged_in: (req, res, next) => {
    res.render("index", {
      user: req.user
    });
  },

  user_log_out: (req, res, next) => {
    req.logout();
    res.redirect("/");
  },

  signup_get: (req, res, next) => {
    res.render("sign-up");
  },

  signup_post: (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      const user = new Users({
        Username: req.body.username,
        Password: hashedPassword
      }).save(err => {
        return err;
      });
      res.redirect("/");
    });

  },

  index: (req, res, next) => {

    let perPage = 3;
    let totalItems;
    let currentPage = parseInt(req.query.page) || 1;
    Posts.find()
      .countDocuments()
      .then(count => {
        totalItems = count;
        const lastPage = Math.ceil(totalItems / perPage);
        Posts.find()
          .sort({
            Date: -1
          })
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
          .then(posts => {

            res.render("home", {
              user: req.user,
              posts,
              currentPage,
              totalItems,
              lastPage
            });
          });
      })
  },

  compose_get: (req, res, next) => res.render("compose"),

  compose_post: (req, res, next) => {
    const postTitle = req.body.postTitle;
    const postBody = req.body.postBody;

    let postDate = new Date();

    const post = new Posts({
      Date: postDate,
      Title: postTitle,
      Content: postBody
    });

    post.save(err => {
      if (!err) {
        res.redirect("/");
      }
    });
  },

  posts_get_id: (req, res, next) => {
    const requestedId = req.params.id
    Posts.findOne({
      _id: requestedId
    }, (err, post) => {
      if (err) {
        console.log(err);
      } else {
        res.render("post", {
          Title: post.Title,
          Content: post.Content
        });
      }
    })
  },

  edit_get_id: (req, res, next) => {
    const requestedId = req.params.id;

    Posts.findOne({
      _id: requestedId
    }, (err, post) => {

      if (!err) {
        res.render("edit", {
          Title: post.Title,
          Content: post.Content,
          id: post._id,
          referer: req.headers.referer
        });
      }
    });
  },

  edit_put_id: (req, res, next) => {
    const postEdit = {
      Title: req.body.editTitle,
      Content: req.body.editBody
    };

    Posts.findByIdAndUpdate(req.params.id, postEdit, (err, post) => {

      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  },

  delete_post: (req, res, next) => {
    const deletePosts = req.body.delete;

    Posts.findByIdAndRemove(deletePosts, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  }

}