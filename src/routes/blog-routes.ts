import express from "express";
import requireAuthenticate from "../middleware/require-authenticate";
import blogControllers from "../controllers/blogs";
import requireAdminship from "../middleware/require-adminship";

const router = express.Router();

router.get("/blogs", requireAuthenticate, requireAdminship, blogControllers.findAllBlogs);
router.get("/blogs/drafts", requireAuthenticate, requireAdminship, blogControllers.findBlogDrafts);
router.get("/blogs/public", blogControllers.findPublishedBlogs);

router.get("/blogs/tags", blogControllers.findTags);

router.get("/blog/:id", requireAuthenticate, requireAdminship, blogControllers.findBlog);
router.get("/blog/public/:id", blogControllers.findBlog);
router.get("/blog/draft/:id", requireAuthenticate, requireAdminship, blogControllers.findBlog);

router.post("/blog/create", requireAuthenticate, requireAdminship, blogControllers.createBlog);
router.put("/blog/:id", requireAuthenticate, requireAdminship, blogControllers.updateBlog);
router.delete("/blog/:id", requireAuthenticate, requireAdminship, blogControllers.deleteBlog);

export default router;
