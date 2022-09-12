import {
  checkInfoMissing,
  checkUsernameCharacters,
  checkUsernameTaken,
} from "../../../utility/auth/validate-user";
import { checkPasswordCharacters } from "../../../utility/auth/validate-password";
import { UserModel } from "..";
import { checkPasscode } from "../../../utility/auth/validate-passcode";

export function getSignupChecks(
  model: UserModel,
  username: string,
  password: string,
  passcode: string
) {
  const checks = [
    {
      checker: checkInfoMissing,
      checkees: [username, password],
    },
    {
      checker: checkPasscode,
      checkees: [passcode],
    },
    {
      checker: checkUsernameCharacters,
      checkees: [username],
    },
    {
      checker: checkUsernameTaken,
      checkees: [model, username],
    },
    {
      checker: checkPasswordCharacters,
      checkees: [password],
    },
  ];

  return checks;
}
