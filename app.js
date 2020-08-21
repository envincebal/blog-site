const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const session = require("express-session");
const user = require("./routes/users");
const passport = require("passport");
require("./passport");
const bcrypt = require("bcrypt");
const postModel = require("./models/posts");
const userModel = require("./models/users");

const methodOverride = require("method-override");

const Posts = postModel.Post;
const Users = userModel.User;

const postsRouter = require("./routes/posts");


mongoose.connect(process.env.CONNECTION_URI || "mongodb://localhost:27017/blogDB", {
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

app.use(function (req, res, next) {
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

app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});


app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});


app.use("/posts", postsRouter);  

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});