import { findAllBlogs, findBlogDrafts, findPublishedBlogs } from "./get/find-many";
import findBlogTags from "./get/find-tags";
import findBlog from "./get/find-blog";
import createBlog from "./post";
import updateBlog from "./put";
import deleteBlog from "./delete";

const blogControllers = {
  findAllBlogs,
  findBlogDrafts,
  findPublishedBlogs,
  findBlogTags,
  findBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;