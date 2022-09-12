import mongoose, { Model, Schema, Types } from "mongoose";
import login from "./login";
import signup from "./signup";

type Signup = (
  username: string,
  password: string,
  passcode: string
) => Promise<UserKeys>;
type Login = (username: string, password: string) => Promise<UserKeys>;

export type UserKeys = {
  _id: Types.ObjectId;
  username: string;
  password: string;
};

type UserMethods = {
  signup: Signup;
  login: Login;
};

export type UserModel = Model<UserKeys> & UserMethods;

const userSchema: Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = signup;
userSchema.statics.login = login;

const User = mongoose.model<UserKeys, UserModel>("User", userSchema);
export default User;
