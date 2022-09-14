import { INAUTHED_REQUEST } from "../../constants/errors";
import type { NextFunction, Request, Response } from "express";

const requireOwnership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isOwner = res.locals.user?.owner;
  if (isOwner) {
    next();
  } else {
    res.status(401).json({ error: INAUTHED_REQUEST });
  }
};

export default requireOwnership;
