import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";

const createBlog = async (req: Request, res: Response) => {
  const { title, path, body, tags, isDraft } = req.body;
  try {
    const blog = await Blog.create({
      title,
      path,
      body,
      tags,
      isDraft
    });
    res.status(200).json({ blog });
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default createBlog;
