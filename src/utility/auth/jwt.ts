import jwt from "jsonwebtoken";

export type TokenSignature = {
  _id: string;
};

export const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET!, { expiresIn: "3d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};
