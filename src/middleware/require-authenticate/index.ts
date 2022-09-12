import { getTokenByAuthHeader, getUserId } from "./helpers";
import { INAUTHED_REQUEST, TOKEN_REQUIRED } from "../../constants/errors";
import { TokenSignature, verifyToken } from "../../utility/auth/jwt";
import type { NextFunction, Request, Response } from "express";

const requireAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization: authHeader } = req.headers;
  if (!authHeader) {
    return res.status(401).json({ error: TOKEN_REQUIRED });
  }
  try {
    const token = getTokenByAuthHeader(authHeader);
    const { _id } = verifyToken(token) as TokenSignature;
    res.locals.user = await getUserId(_id);
    next();
  } catch (err) {
    res.status(401).json({ error: INAUTHED_REQUEST });
  }
};

export default requireAuthenticate;
