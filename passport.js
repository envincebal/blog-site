const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/userModel");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({
      Username: username
    }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, {
          message: "Incorrect username!"
        });
      }

      bcrypt.compare(password, user.Password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return done(null, user)
        } else {
          // passwords do not match!
          return done(null, false, {
            message: "Incorrect password"
          })
        }
      })
      return done(null, user);
    })
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});