import { INAUTHED_REQUEST } from "../../constants/errors";
import type { NextFunction, Request, Response } from "express";

const requireAuthorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;
  const activeId = res.locals.user;
  if (activeId === user_id) {
    next();
  } else {
    res.status(401).json({ error: INAUTHED_REQUEST });
  }
};

export default requireAuthorize;
