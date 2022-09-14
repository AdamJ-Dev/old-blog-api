import { NO_SUCH_COMMENT } from "../../../constants/errors";
import type { Request, Response } from "express";
import Comment from "../../../models/comment";
import { getErrorMessage } from "../../../utility/get-error-message";

const findComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (comment) {
      res.status(200).json({ comment });
    } else {
      throw Error(NO_SUCH_COMMENT);
    }
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findComment;
