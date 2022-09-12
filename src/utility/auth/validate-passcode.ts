import { INCORRECT_PASSCODE } from "../../constants/errors";

export function checkPasscode(passcode: string) {
  const isIncorrect = passcode !== process.env.SIGN_UP_PASSCODE;
  if (!isIncorrect) {
    throw Error(INCORRECT_PASSCODE);
  }
}
