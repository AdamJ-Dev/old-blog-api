import { INAUTHED_REQUEST } from "../../constants/errors";
import type { NextFunction, Request, Response } from "express";

const requireOwnership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const activeId = res.locals.user?._id.toString();
  if (activeId === process.env.OWNER_ID) {
    next();
  } else {
    res.status(401).json({ error: INAUTHED_REQUEST });
  }
};

export default requireOwnership;
