import { Model, Types } from "mongoose";

export const getDBQueries = <ModelKeys>(
  model: Model<ModelKeys>,
  ids: Types.ObjectId[]
) => {
  let queries = [];
  for (const id of ids) {
    const query = new Promise((resolve) => resolve(model.findById(id)));
    queries.push(query);
  }
  return queries as Promise<ModelKeys>[];
};

export const getDBData = async <ModelKeys>(queries: Promise<ModelKeys>[]) => {
  try {
    const data = await Promise.all(queries);
    return data;
  } catch (error) {
    return undefined;
  }
};
