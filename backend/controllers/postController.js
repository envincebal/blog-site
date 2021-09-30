const postModel = require("../models/posts");
const Posts = postModel.Post;

module.exports = {
  index: (req, res) => {

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
            date: -1
          })
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
          .then(posts => {

            res.json({
              user: req.user,
              posts,
              currentPage,
              totalItems,
              lastPage
            });
          });
      })
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
    const requestedId = req.params.id;

    Posts.findOne({
      _id: requestedId
    }, (err, post) => {

      if (!err) {
        res.json({
          title: post.title,
          content: post.content,
          id: post._id,
          referer: req.headers.referer
        });
      }
    });
  },

  edit_put_id: (req, res) => {
    const postEdit = {
      title: req.body.editTitle,
      content: req.body.editBody
    };

    Posts.findByIdAndUpdate(req.params.id, postEdit, (err, post) => {

      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  },

  delete_post: (req, res) => {
    const deletePosts = req.params.id;
 
    Posts.findOneAndDelete({
       id: deletePosts
      })
      .then(post => {
        if(!post){
           res.status(200).send(deletePosts + " has been deleted");
        }
       
      }); 
  }
}