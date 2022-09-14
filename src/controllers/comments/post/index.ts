import type { Request, Response } from "express";
import { createComment } from "./helpers/create-comment";

export const createAdminComment = (req: Request, res: Response) => {
  createComment(req, res, { isUser: true, isAdmin: true });
};

export const createUserComment = (req: Request, res: Response) => {
  createComment(req, res, { isUser: true });
};

export const createOrdinaryComment = (req: Request, res: Response) => {
  createComment(req, res);
};
