import { getErrorMessage } from "../../../utility/get-error-message";
import { createToken } from "../../../utility/auth/jwt";
import type { Request, Response } from "express";
import User from "../../../models/user";

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id.toString());
    const cookieData = { id: user._id, token };
    res.cookie("user", JSON.stringify(cookieData));
    res.status(200).json({ user: cookieData });
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export default login;
