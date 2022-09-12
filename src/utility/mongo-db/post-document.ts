import type { Request, Response } from "express";
import { getErrorMessage } from "../get-error-message";
import { inheritKeys } from "../../lib/object/inherit";
import { Model } from "mongoose";

type ModelInfo<ModelKeys> = {
  type: string;
  model: Model<ModelKeys>;
  keys: string[];
};

export const postDocument = async <ModelKeys>(
  req: Request,
  res: Response,
  modelInfo: ModelInfo<ModelKeys>
) => {
  const post = inheritKeys(req.body, modelInfo.keys);
  try {
    const document = await modelInfo.model.create(post);
    res.status(200).json(objectify(modelInfo.type, document));
  } catch (error) {
    res.json({ error: getErrorMessage(error) });
  }
};
