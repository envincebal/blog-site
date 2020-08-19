const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/postController");

router.get("/", post_controller.index);
router.get("/compose", post_controller.compose_get);
router.post("/compose", post_controller.compose_post);
router.get("/posts/:id", post_controller.posts_get_id);
router.get("/edit/:id", post_controller.edit_get_id);
router.put("/edit/:id", post_controller.edit_put_id);
router.post("/delete", post_controller.delete_post);

module.exports = router;