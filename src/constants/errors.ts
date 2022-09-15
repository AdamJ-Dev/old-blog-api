// requireAuthenticate
export const TOKEN_REQUIRED = "Authorization token required.";
export const INAUTHED_REQUEST = "Request not authorized.";

// requireAuthorize
export const WRONG_USER = "You cannot perform this action on behalf of another user.";

// requireAdminship
export const NOT_ADMIN = "This action requires admin permissions.";

// userSchema.statics.login
export const NO_SUCH_USER = "No such user exists.";

// userSchema.statics.signup
export const USERNAME_TAKEN = "That username has been taken.";

// hash
export const INCORRECT_PASSWORD = "Incorrect password.";

// validate-user
export const MISSING_FIELDS = "All fields must be filled in.";
export const USERNAME_FORBIDDEN_CHARACTERS =
  "Your username contains forbidden characters.";

// validate-password
export const PASSWORD_TOO_SHORT =
  "Your password must contain at least 8 characters.";
export const PASSWORD_TOO_LONG =
  "Your password must contain at most 20 characters.";
export const PASSWORD_MISSING_UPPERCASE =
  "Your password must contain an uppercase character.";
export const PASSWORD_MISSING_LOWERCASE =
  "Your password must contain a lowercase character.";
export const PASSWORD_MISSING_NUMBER = "Your password must contain a number.";
export const PASSWORD_MISSING_SPECIAL_CHAR =
  "Your password must contain a special character.";

// validate-passcode
export const INCORRECT_PASSCODE = "Incorrect passcode.";

// 404
export const RESOURCE_NOT_FOUND = "No resources were found for this request.";

export const NO_SUCH_BLOG = "We could not find a matching blog.";
export const NO_SUCH_COMMENT = "No such comment was found.";

// updateComment 
export const NO_UPDATES_PROVIDED = "You did not submit any updates."