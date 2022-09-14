import type { Request, Response } from "express";
import { getErrorMessage } from "../../../../utility/get-error-message";
import Comment from "../../../../models/comment";
import { UserKeys } from "../../../../models/user";

type CredOptions = {
  isUser?: boolean;
  isAdmin?: boolean;
};

const getAuthor = (
  name?: string,
  creds?: CredOptions,
  activeUser?: UserKeys
) => {
  const isUser = Boolean(creds?.isUser);
  const isAdmin = Boolean(creds?.isAdmin);
  return {
    name: activeUser?.username || name,
    isUser,
    isAdmin,
  };
};

const createComment = async (
  req: Request,
  res: Response,
  creds?: CredOptions
) => {
  const { name, body, blogId, parentId } = req.body;
  const author = getAuthor(name, creds, res.locals.user);
  try {
    const comment = await Comment.create({
      author,
      body,
      blogId,
      parentId,
      pinned: false,
    });
    res.status(200).json({ comment });
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default createComment;
