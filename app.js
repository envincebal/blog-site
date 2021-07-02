const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const postsRouter = require("./routes/postRoutes");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");


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
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", postsRouter);

module.exports = app;