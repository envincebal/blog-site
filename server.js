const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const postsRouter = require("./routes/posts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

let app = express();

dotenv.config({
  path: "./config.env"
});

const DB = process.env.DATABASE; 

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
// mongoose.set('useFindAndModify', false);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT");
  next();
});

app.use(bodyParser.json());

app.use(express.static("public"));
app.use(methodOverride("_method")); 



app.use("/", postsRouter);

app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


let port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("Listening on Port " + port);
});