import type { Request, Response } from "express";
import { RESOURCE_NOT_FOUND } from "../../constants/errors";

const serve404 = async (req: Request, res: Response) => {
  res.status(404).json({ error: RESOURCE_NOT_FOUND })
};

export default serve404;
