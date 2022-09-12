import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";

const createBlog = async (req: Request, res: Response) => {
  const { title, path, body } = req.body;
  try {
    const blog = await Blog.create({ title, path, body });
    res.status(200).json({ blog });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default createBlog;
