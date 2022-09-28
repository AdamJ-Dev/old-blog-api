import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import { extractTags } from "./helpers/extract-tags";
import Blog from "../../../models/blog";

const findTags = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    const tags = extractTags(blogs);
    res.status(200).json({ tags });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findTags;
