import bcrypt from "bcrypt";
import { INCORRECT_PASSWORD } from "../../constants/errors";

export const bcryptHash = async function (toHash: string) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(toHash, salt);
  return hashed;
};

async function bcryptGetMatch(candidate: string, hash: string) {
  const isMatch = await bcrypt.compare(candidate, hash);
  return isMatch;
}

export async function bcryptCheckMatch(candidate: string, hash: string) {
  const isPasswordMatch = await bcryptGetMatch(candidate, hash);
  if (!isPasswordMatch) throw Error(INCORRECT_PASSWORD);
}
