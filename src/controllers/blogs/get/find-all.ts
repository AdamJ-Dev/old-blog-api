import type { Request, Response } from "express";
import Blog from "../../../models/blog";
import { getErrorMessage } from "../../../utility/get-error-message";

const findAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findAllBlogs;
