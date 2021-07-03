const userModel = require("../models/userModel");
const Users = userModel;

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
    const user = new Users({
      username: req.body.username,
      password: req.body.password
    }).save(err => {
      return err;
    });
    res.redirect("/");
  }

}