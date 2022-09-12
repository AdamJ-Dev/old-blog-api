import { createUser } from "../../../utility/auth/create-user";
import { checkForError } from "../../../utility/check-for-error";
import { getSignupChecks } from "./get-checks";

async function signup(
  this: any,
  username: string,
  password: string,
  passcode: string
) {
  const checks = getSignupChecks(this, username, password, passcode);

  const error = await checkForError(...checks);
  if (error) {
    throw Error(error);
  }

  const user = await createUser(this, username, password);
  return user;
}

export default signup;
