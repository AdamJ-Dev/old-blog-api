import { getErrorMessage } from "../../../utility/get-error-message";
import { createToken } from "../../../utility/auth/jwt";
import type { Request, Response } from "express";
import User from "../../../models/user";

const signup = async (req: Request, res: Response) => {
  const { username, passcode, password } = req.body;
  try {
    const user = await User.signup(username, password, passcode);
    const id = user._id.toString();
    const token = createToken(id);
    const cookieData: Record<string, string> = { id, token };
    if (user.admin) cookieData['admin'] = user.admin; 
    res.cookie("user", JSON.stringify(cookieData));
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export default signup;
