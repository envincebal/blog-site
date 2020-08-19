const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
require("./passport");
const bcrypt = require("bcrypt");
<<<<<<< HEAD
const postModel = require("./models/posts");
const userModel = require("./models/users");
=======
>>>>>>> 9b44300fd6a6b85e103722d768b5332c676f400f

const methodOverride = require("method-override");

const Posts = postModel.Post;
const Users = userModel.User;

const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/blogDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let app = express();

app.set("view engine", "ejs");

app.use(session({
  secret: "cats",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
  extended: true
}));
<<<<<<< HEAD
app.use(function (req, res, next) {
=======
app.use(function(req, res, next) {
>>>>>>> 9b44300fd6a6b85e103722d768b5332c676f400f
  res.locals.currentUser = req.user;
  next();
});
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/sign-up", (req, res) => res.render("sign-up-form"));

app.post("/sign-up", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    const user = new Users({
      username: req.body.username,
      password: hashedPassword
    }).save(err => {
      if (err) {
        return next(err);
      } else {
        res.redirect("/");
      }
    });
  });
});

app.post("/log-in", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/"
}));
<<<<<<< HEAD
=======

app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
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
            user: req.user,
            posts,
            currentPage,
            totalItems,
            lastPage
          });
        });
    })
});

// Route for Compose page.
app.get("/compose", (req, res) => res.render("compose"));

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
        referer: req.headers.referer
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
>>>>>>> 9b44300fd6a6b85e103722d768b5332c676f400f

app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.use("/", postsRouter);

app.listen(port, () => {
  console.log("Server started on port " + port);
}); 