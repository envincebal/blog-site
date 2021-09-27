const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const postsRouter = require("./routes/posts");

let app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.use(methodOverride("_method")); 

app.use("/", postsRouter);

module.exports = app;