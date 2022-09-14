import { WRONG_USER } from "../../constants/errors";
import type { NextFunction, Request, Response } from "express";

const requireAuthorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;
  const activeId = res.locals.user._id.toString();
  if (activeId === user_id) {
    next();
  } else {
    res.status(401).json({ error: WRONG_USER });
  }
};

export default requireAuthorize;
