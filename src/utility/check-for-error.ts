import { getErrorMessage } from "./get-error-message";

type Check = {
  checker: Function;
  checkees: any[];
};

export async function checkForError(...checks: Check[]) {
  try {
    for (const check of checks) {
      await check.checker(...check.checkees);
    }
    return null;
  } catch (error) {
    return getErrorMessage(error);
  }
}
