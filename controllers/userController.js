const userModel = require("../models/userModel");
const Users = userModel;
const bcrypt = require("bcrypt");

module.exports = {

  user_logged_in: (req, res, next) => {
    res.render("index", {
      user: req.user
    });
  },

  user_log_out: (req, res, next) => {
    req.logout();
    res.redirect("/");
  },

  signup_get: (req, res, next) => {
    res.render("sign-up");
  },

  signup_post: (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      const user = new Users({
        username: req.body.username,
        password: hashedPassword
      }).save(err => {
        return err;
      });
      res.redirect("/");
    });

  }

}