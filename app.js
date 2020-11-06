const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postsRouter = require("./routes/posts");

mongoose.connect(process.env.CONNECTION_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", postsRouter);

let port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", function () {
  console.log("Listening on Port 3000");
});