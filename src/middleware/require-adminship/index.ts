import { NOT_ADMIN } from "../../constants/errors";
import type { NextFunction, Request, Response } from "express";

const requireAdminship = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdmin = res.locals.user?.admin;
  if (isAdmin) {
    next();
  } else {
    res.status(401).json({ error: NOT_ADMIN });
  }
};

export default requireAdminship;
