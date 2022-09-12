import findAllBlogs from "./get/find-all";
import findBlog from "./get/find-blog";
import createBlog from "./post";
import updateBlog from "./put";
import deleteBlog from "./delete";

const blogControllers = {
  findAllBlogs,
  findBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;