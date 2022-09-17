import express from "express";
import requireAuthenticate from "../middleware/require-authenticate";
import commentsControllers from "../controllers/comments";
import requireAdminship from "../middleware/require-adminship";

const router = express.Router();

router.get("/comments", commentsControllers.findAllComments);
router.get("/blog/:blog_id/comments", commentsControllers.findBlogComments);
router.get("/comment/:id", commentsControllers.findComment);
router.post("/comment/create", commentsControllers.createOrdinaryComment);
router.post("/comment/user/create", requireAuthenticate, commentsControllers.createUserComment);
router.post("/comment/admin/create",requireAuthenticate, requireAdminship, commentsControllers.createAdminComment);
router.put("/comment/:id", requireAuthenticate, requireAdminship, commentsControllers.updateComment);
router.delete("/comment/:id", requireAuthenticate, requireAdminship, commentsControllers.deleteComment);

export default router;
