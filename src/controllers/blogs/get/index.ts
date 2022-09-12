import { NO_SUCH_BLOG } from "../../../constants/errors";
import type { Request, Response } from "express";
import Blog from "../../../models/blog";
import { getErrorMessage } from "../../../utility/get-error-message";

const findBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json({ blog });
    } else {
      throw Error(NO_SUCH_BLOG);
    }
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findBlog;
