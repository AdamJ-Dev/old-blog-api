import express from "express";
import requireAuthenticate from "../middleware/require-authenticate";
import commentsControllers from "../controllers/comments";
import requireAdminship from "../middleware/require-adminship";
import requireAuthorize from "../middleware/require-authorize";

const router = express.Router();

router.get("/comments", commentsControllers.findAllComments);
router.get("/comments/:id", commentsControllers.findComment);
router.post("/comment/create", commentsControllers.createOrdinaryComment);
router.post(
  "/comment/user/:user_id/create",
  requireAuthenticate,
  requireAuthorize,
  commentsControllers.createUserComment
);
router.post(
  "/comment/admin/:user_id/create",
  requireAuthenticate,
  requireAuthorize,
  requireAdminship,
  commentsControllers.createAdminComment
);
router.put(
  "/comment/:comment_id/user/:user_id",
  requireAuthenticate,
  requireAuthorize,
  commentsControllers.updateComment
);
router.delete(
  "/comment/:id",
  requireAuthenticate,
  requireAdminship,
  commentsControllers.deleteComment
);

export default router;
