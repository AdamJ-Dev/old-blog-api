import type { Request, Response } from "express";
import findManyBlogs from "./helpers/find-many-blogs";

export const findAllBlogs = (req: Request, res: Response) => {
  findManyBlogs(req, res);  
};

export const findBlogDrafts = (req: Request, res: Response) => {
  findManyBlogs(req, res, { isDraft: true });  
};

export const findPublishedBlogs = (req: Request, res: Response) => {
  findManyBlogs(req, res, { isDraft : false });  
};