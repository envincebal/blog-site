const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const Models = require("./models");
const methodOverride = require("method-override");

const Posts = Models.Post;

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

let app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true
});

// Root route that displays all posts stored in database.
app.get("/", (req, res) => {

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

          res.render("home", {
            posts,
            currentPage,
            totalItems,
            lastPage
          });
        });
    })
});

// Route for About page.
app.get("/about", (req, res) => {
  res.render("about", {
    aboutContent: aboutContent
  });
});

// Route for Contact page.
app.get("/contact", (req, res) => {
  res.render("contact", {
    contactContent: contactContent
  });
});

// Route for Compose page.
app.get("/compose", (req, res) => {
  res.render("compose");
});

// Route composes entry post and saves into database.
app.post("/compose", (req, res) => {
  const postTitle = req.body.postTitle;
  const postBody = req.body.postBody;

  let postDate = new Date();

  const post = new Posts({
    date: postDate,
    title: postTitle,
    content: postBody
  });

  post.save(err => {
    if (!err) {
      res.redirect("/");
    }
  });
});

// Route for viewing specific post based on ID.
app.get("/posts/:id", (req, res) => {
  const requestedId = req.params.id
  Posts.findOne({
    _id: requestedId
  }, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  })
});

// Route for editing specific post based on ID.
app.get("/edit/:id", (req, res) => {
  const requestedId = req.params.id;

  Posts.findOne({
    _id: requestedId
  }, (err, post) => {

    if (!err) {
      res.render("edit", {
        title: post.title,
        content: post.content,
        id: post._id,
        referer:req.headers.referer
      });
    }
  });
});

// Route for updating specific post.
app.put("/edit/:id", (req, res) => {
  const postEdit = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  
  Posts.findByIdAndUpdate(req.params.id, postEdit, (err, post) => {

    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });

});

// Route for deleting specific post.
app.post("/delete", (req, res) => {
  const deletePosts = req.body.delete;

  Posts.findByIdAndRemove(deletePosts, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("back");
    }
  });
});

app.listen(port, function () {
  console.log("Server started on port " + port);
});