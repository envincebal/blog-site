const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Models = require('./models.js');
const bcrypt = require("bcrypt");
var Users = Models.User;

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
        });
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
  Models.User.findById(id, (err, user) => {
    callback(err, user);
  });
});

