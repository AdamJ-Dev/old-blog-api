import express from "express";
import requireAuthenticate from "../middleware/require-authenticate";
import blogControllers from "../controllers/blogs";

const router = express.Router();

router.get("/blog/:id", blogControllers.findBlog);
router.post("/blog/create", requireAuthenticate, blogControllers.createBlog);
router.put("/blog/:id", requireAuthenticate, blogControllers.updateBlog);
router.delete("/blog/:id", requireAuthenticate, blogControllers.deleteBlog);

export default router;
