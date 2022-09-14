import type { Request, Response } from "express";
import Comment from "../../../models/comment";
import { getErrorMessage } from "../../../utility/get-error-message";

const findBlogComments = async (req: Request, res: Response) => {
  const { blog_id } = req.params; 
  try {
    const comments = await Comment.find({ blogId: blog_id }).sort({ createdAt: 'asc'});
    res.status(200).json({ comments });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findBlogComments;
