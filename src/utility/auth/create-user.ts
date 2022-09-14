import { bcryptHash } from "./hash";

export async function createUser(
  model: any,
  username: string,
  password: string
) {
  const hashedPassword = await bcryptHash(password);
  const user = await model.create({ username, password: hashedPassword, owner: false });
  return user;
}
