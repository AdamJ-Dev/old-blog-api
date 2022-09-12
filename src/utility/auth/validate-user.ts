import {
  USERNAME_FORBIDDEN_CHARACTERS,
  MISSING_FIELDS,
  USERNAME_TAKEN,
} from "../../constants/errors";

export function checkInfoMissing(...info: unknown[]) {
  for (const infoItem of info) {
    if (!infoItem) {
      throw Error(MISSING_FIELDS);
    }
  }
}

export function checkUsernameCharacters(username: string) {
  const regex = /^[A-Za-z0-9]+$/;
  const isAlphanumeric = regex.test(username);
  if (!isAlphanumeric) {
    throw Error(USERNAME_FORBIDDEN_CHARACTERS);
  }
}

export async function checkUsernameTaken(baseModel: any, username: string) {
  const isUsernameTaken = Boolean(await baseModel.findOne({ username }));
  if (isUsernameTaken) throw Error(USERNAME_TAKEN);
}
