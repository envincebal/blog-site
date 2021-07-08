const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/", userController.user_logged_in);
router.post("/log-in", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/"
}));
router.get("/log-out", userController.user_log_out);
router.get("/sign-up", userController.signup_get);
router.post("/sign-up", userController.signup_post);
router.get("/compose", userController.compose_get);
router.post("/compose",  userController.compose_post);
router.get("/posts/:id", userController.posts_get_id);
router.get("/edit/:id", userController.edit_get_id);
router.put("/edit/:id", userController.edit_put_id);
router.post("/delete", userController.delete_post);

module.exports = router;