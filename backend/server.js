const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env"
});
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useUnifiedTopology : true, useNewUrlParser : true 
});
// mongoose.set('useFindAndModify', false);

let port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("Listening on Port " + port);
});