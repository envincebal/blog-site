<<<<<<< HEAD
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("./models/users");
const Users = userModel.User;
const bcrypt = require("bcrypt");
=======
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Models = require('./models.js');
const bcrypt = require("bcrypt");
var Users = Models.User;
>>>>>>> 9b44300fd6a6b85e103722d768b5332c676f400f

passport.use(
  new LocalStrategy((username, password, callback) => {
    Users.findOne({
      username: username
    }, (err, user) => {
      if (err) {
        return callback(err);
      };
      if (!user) {
        return callback(null, false, {
          msg: "Incorrect username"
<<<<<<< HEAD
        }); 
=======
        });
>>>>>>> 9b44300fd6a6b85e103722d768b5332c676f400f
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return callback(null, user);
        } else {
          // passwords do not match!
          return callback(null, false, {msg: "Incorrect password"})
        }
      })  
    });
  })
);

passport.serializeUser((user, callback) => {
  callback(null, user.id);
});

passport.deserializeUser((id, callback) => {
<<<<<<< HEAD
  Users.findById(id, (err, user) => {
=======
  Models.User.findById(id, (err, user) => {
>>>>>>> 9b44300fd6a6b85e103722d768b5332c676f400f
    callback(err, user);
  });
});

