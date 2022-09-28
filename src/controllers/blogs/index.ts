import { findAllBlogs, findBlogDrafts, findPublishedBlogs } from "./get/find-many";
import findTags from "./get/find-tags";
import findBlog from "./get/find-one";
import createBlog from "./post";
import updateBlog from "./put";
import deleteBlog from "./delete";

const blogControllers = {
  findAllBlogs,
  findBlogDrafts,
  findPublishedBlogs,
  findTags,
  findBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;