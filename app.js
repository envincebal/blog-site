const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const postsRouter = require("./routes/postRoutes");
const usersRouter = require("./routes/userRoutes");
const session = require("express-session");
const passport = require("passport");

let app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: "cats",
  resave: false,
  saveUninitialized: true
}));
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", postsRouter);
app.use("/", usersRouter);

module.exports = app;