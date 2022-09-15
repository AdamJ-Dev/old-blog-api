import express from "express";
import requireAuthenticate from "../middleware/require-authenticate";
import commentsControllers from "../controllers/comments";
import requireAdminship from "../middleware/require-adminship";
import requireAuthorize from "../middleware/require-authorize";

const router = express.Router();

router.get("/comments", commentsControllers.findAllComments);
router.get("/blog/:blog_id/comments", commentsControllers.findBlogComments);
router.get("/comment/:id", commentsControllers.findComment);
router.post("/comment/create", commentsControllers.createOrdinaryComment);
router.post("/user/:user_id/comment/create", requireAuthenticate, requireAuthorize, commentsControllers.createUserComment);
router.post("user/admin/:user_id/comment/create",requireAuthenticate, requireAuthorize, requireAdminship, commentsControllers.createAdminComment);
router.put("/user/:user_id/comment/:comment_id", requireAuthenticate, requireAuthorize, commentsControllers.updateComment);
router.delete("/comment/:id", requireAuthenticate, requireAdminship, commentsControllers.deleteComment);

export default router;
