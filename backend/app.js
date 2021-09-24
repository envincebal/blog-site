const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const postsRouter = require("./routes/posts");

let app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.use(methodOverride("_method")); 

app.use("/", postsRouter);

module.exports = app;