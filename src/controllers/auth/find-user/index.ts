import { NO_SUCH_USER } from "../../../constants/errors";
import type { Request, Response } from "express";
import { getErrorMessage } from "../../../utility/get-error-message";
import User from "../../../models/user";

const findUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      throw Error(NO_SUCH_USER)
    } else res.status(200).json({ id });
  } catch (err) {
    res.status(404).json({ error: getErrorMessage(err) });
  }
};

export default findUser;
