import { NO_SUCH_USER } from "../../../constants/errors";
import { bcryptCheckMatch } from "../../../utility/auth/hash";
import { checkInfoMissing } from "../../../utility/auth/validate-user";
import { checkForError } from "../../../utility/check-for-error";

async function login(this: any, username: string, password: string) {
  const infoMissingError = await checkForError({
    checker: checkInfoMissing,
    checkees: [username, password],
  });
  if (infoMissingError) throw Error(infoMissingError);

  const user = await this.findOne({ username });
  if (!user) throw Error(NO_SUCH_USER);

  const passwordError = await checkForError({
      checker: bcryptCheckMatch,
      checkees: [password, user.password],
  });
  if (passwordError) throw Error(passwordError);
    
  return user;
}

export default login;
