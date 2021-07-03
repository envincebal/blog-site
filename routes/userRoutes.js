const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/userController");

router.get("/", userController.user_logged_in);
router.post("/log-in", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/"
}));
router.get("/log-out", userController.user_log_out);
router.get("/sign-up", userController.signup_get);
router.post("/sign-up", userController.signup_post);

module.exports = router;