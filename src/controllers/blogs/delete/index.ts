import type { Request, Response } from "express";
import { NO_SUCH_BLOG } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";

const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndRemove(id);
    // also, later, have to delete all comments associated with the blog
    if (blog) {
      res.status(200).json({ blog });
    } else {
      throw Error(NO_SUCH_BLOG);
    }
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default deleteBlog;