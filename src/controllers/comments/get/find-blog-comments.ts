import type { Request, Response } from "express";
import { NO_SUCH_BLOG } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import { byDateAsc } from "../../../utility/mongo-db/sort-documents";
import Blog from "../../../models/blog";
import Comment from "../../../models/comment";

const findBlogComments = async (req: Request, res: Response) => {
  const { blog_id } = req.params;
  try {
    const blog = await Blog.findById(blog_id);
    if (!blog) throw Error(NO_SUCH_BLOG);
    else {
      const comments = await Comment.find({ blogId: blog_id }).sort(byDateAsc);
      res.status(200).json({ comments });
    }
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findBlogComments;
