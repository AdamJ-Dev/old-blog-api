import { NO_SUCH_BLOG } from "../../../constants/errors";
import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";

const findBlog = async (req: Request, res: Response) => {
  const { id } = req.params; 
  try {
    const blog = await Blog.findById(id);
    if (!blog) throw Error(NO_SUCH_BLOG);
    else {
      res.status(200).json({ blog });
    } 
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findBlog;
