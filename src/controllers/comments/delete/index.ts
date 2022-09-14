import type { Request, Response } from "express";
import { NO_SUCH_COMMENT } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import { toObjectId } from "../../../utility/mongo-db/to-object-id";
import unravelCommentThread from "./helpers/unravel-thread";
import { getPromisesToDeleteComments } from "./helpers/promise-delete";

const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const thread = await unravelCommentThread(toObjectId(id));
    if (!thread.length) throw Error(NO_SUCH_COMMENT);
    else {
      await Promise.all(getPromisesToDeleteComments(thread));
      res.status(200).json({ comments: thread });
    }
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default deleteComment;
