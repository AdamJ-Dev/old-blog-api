import type { Request, Response } from "express";
import type { FilterQuery } from "mongoose";
import { getErrorMessage } from "../../../../utility/get-error-message";
import { byDateDesc } from "../../../../utility/mongo-db/sort-documents";
import { BlogKeys } from "../../../../models/blog";
import Blog from "../../../../models/blog";

const findManyBlogs = async (
  req: Request,
  res: Response,
  condition: FilterQuery<BlogKeys> = {}
) => {
  try {
    const blogs = await Blog.find(condition).sort(byDateDesc);
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findManyBlogs;
