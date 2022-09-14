import { NO_SUCH_COMMENT } from "../../../constants/errors";
import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import Comment from "../../../models/comment";

const findComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (!comment) throw Error(NO_SUCH_COMMENT);
    else {
      res.status(200).json({ comment });
    }
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findComment;
