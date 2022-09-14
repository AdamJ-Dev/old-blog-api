import { UserKeys } from "../../../../models/user";
import { CredOptions } from "./create-comment";

export const getAuthor = (suppliedName: string | undefined, creds?: CredOptions, activeUser?: UserKeys) => {
  const name = activeUser?.username || suppliedName!;
  const isUser = Boolean(creds?.isUser);
  const isAdmin = Boolean(creds?.isAdmin);
  return {
    name,
    isUser,
    isAdmin,
  };
};
