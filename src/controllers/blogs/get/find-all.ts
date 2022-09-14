import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import { byDateDesc } from "../../../utility/mongo-db/sort-documents";
import Blog from "../../../models/blog";

const findAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort(byDateDesc);
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findAllBlogs;
