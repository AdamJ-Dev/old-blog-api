import {
  PASSWORD_TOO_SHORT,
  PASSWORD_TOO_LONG,
  PASSWORD_MISSING_UPPERCASE,
  PASSWORD_MISSING_LOWERCASE,
  PASSWORD_MISSING_NUMBER,
  PASSWORD_MISSING_SPECIAL_CHAR,
} from "../../constants/errors";

function checkLength(password: string) {
  const insufficient = password.length < 8;
  if (insufficient) {
    throw Error(PASSWORD_TOO_SHORT);
  }
  const excessive = password.length > 20;
  if (excessive) {
    throw Error(PASSWORD_TOO_LONG);
  }
}

function checkContains(regex: RegExp, test: string, error: string) {
  const contains = regex.test(test);
  if (!contains) {
    throw Error(error);
  }
}

export function checkPasswordCharacters(password: string) {
  checkLength(password);
  checkContains(/[A-Z]/, password, PASSWORD_MISSING_UPPERCASE);
  checkContains(/[a-z]/, password, PASSWORD_MISSING_LOWERCASE);
  checkContains(/[0-9]/, password, PASSWORD_MISSING_NUMBER);
  checkContains(/[^A-Za-z0-9]/, password, PASSWORD_MISSING_SPECIAL_CHAR);
}
