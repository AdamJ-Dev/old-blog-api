import { getTokenByAuthHeader } from "./helpers";
import { INAUTHED_REQUEST, TOKEN_REQUIRED } from "../../constants/errors";
import { TokenSignature, verifyToken } from "../../utility/auth/jwt";
import type { NextFunction, Request, Response } from "express";
import { getErrorMessage } from "../../utility/get-error-message";
import User from "../../models/user";

const requireAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization: authHeader } = req.headers;
  try {
    if (!authHeader) throw Error(TOKEN_REQUIRED);
    
    const token = getTokenByAuthHeader(authHeader);
    const { _id } = verifyToken(token) as TokenSignature;
    const user = await User.findById(_id);
    
    if (!user) throw Error(INAUTHED_REQUEST);
    
    res.locals.user = user; 
    next();
  } catch (err) {
    res.status(401).json({ error: getErrorMessage(err) });
  }
};

export default requireAuthenticate;
