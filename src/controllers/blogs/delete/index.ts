import type { Request, Response } from "express";
import { NO_SUCH_BLOG } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";
import Comment from "../../../models/comment";

const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndRemove(id);
    if (blog) {
      await Comment.deleteMany({ blogId: blog._id });
      res.status(200).json({ blog });
    } else {
      throw Error(NO_SUCH_BLOG);
    }
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default deleteBlog;
