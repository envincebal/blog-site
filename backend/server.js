const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env"
});
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Listening on Port 3000");
});