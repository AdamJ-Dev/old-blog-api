import findBlog from "./get";
import createBlog from "./post";
import updateBlog from "./put";
import deleteBlog from "./delete";

const blogControllers = {
  findBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};

export default blogControllers;