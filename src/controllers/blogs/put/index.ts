import type { Request, Response } from "express";
import { NO_SUCH_BLOG, NO_UPDATES_PROVIDED } from "../../../constants/errors";
import { getErrorMessage } from "../../../utility/get-error-message";
import Blog from "../../../models/blog";
import { filterByDefined } from "../../../utility/lib/obj/filter-by-defined";

const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, path, body, tags } = req.body;
  try {
    const blog = await Blog.findById(id);
    if (!blog) throw Error(NO_SUCH_BLOG);
    else {
      Object.assign(blog, filterByDefined({ title, path, body, tags }));
      const update = await blog.save();
      res.status(200).json({ blog: update });
    }
  } catch (err) {
    res.status(409).json({ error: getErrorMessage(err) });
  }
};

export default updateBlog;
