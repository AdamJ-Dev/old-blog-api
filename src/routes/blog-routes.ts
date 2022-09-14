import express from "express";
import requireAuthenticate from "../middleware/require-authenticate";
import blogControllers from "../controllers/blogs";
import requireAdminship from "../middleware/require-adminship";

const router = express.Router();

router.get("/blogs", blogControllers.findAllBlogs);
router.get("/blog/:id", blogControllers.findBlog);
router.post("/blog/create", requireAuthenticate, requireAdminship, blogControllers.createBlog);
router.put("/blog/:id", requireAuthenticate, requireAdminship, blogControllers.updateBlog);
router.delete("/blog/:id", requireAuthenticate, requireAdminship, blogControllers.deleteBlog);

export default router;
