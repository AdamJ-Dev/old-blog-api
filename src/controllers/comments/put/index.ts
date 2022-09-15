import type { Request, Response } from "express";
import { NO_SUCH_COMMENT } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import Comment from "../../../models/comment";

const updateComment = async (req: Request, res: Response) => {
  const { comment_id } = req.params;
  const { pinned } = req.body;
  try {    
    const comment = await Comment.findById(comment_id);
    if (!comment) throw Error(NO_SUCH_COMMENT);
    
    Object.assign(comment, { pinned });
    const update = await comment.save();

    res.status(200).json({ comment: update });
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default updateComment;
