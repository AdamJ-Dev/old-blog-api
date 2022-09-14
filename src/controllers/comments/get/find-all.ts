import type { Request, Response } from "express";
import Comment from "../../../models/comment";
import { getErrorMessage } from "../../../utility/get-error-message";

const findAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find().sort({ createdAt: 'asc'});
    res.status(200).json({ comments });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findAllComments;
