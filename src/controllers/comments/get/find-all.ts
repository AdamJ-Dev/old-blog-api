import type { Request, Response } from "express";
import { byDateAsc } from "../../../utility/mongo-db/sort-documents";
import { getErrorMessage } from "../../../utility/get-error-message";
import Comment from "../../../models/comment";

const findAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find().sort(byDateAsc);
    res.status(200).json({ comments });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findAllComments;
