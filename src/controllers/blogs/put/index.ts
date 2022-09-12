import type { Request, Response } from "express";
import { NO_SUCH_BLOG } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";

const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, path, body } = req.body;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      Object.assign(blog, { title, path, body });
      const update = await blog.save();
      res.status(200).json({ blog: update });
    } else {
      throw Error(NO_SUCH_BLOG);
    }
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default updateBlog;
