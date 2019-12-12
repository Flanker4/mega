import actionCreatorFactory from "typescript-fsa";
import { User } from "./types";

const actionCreator = actionCreatorFactory("Auth");

export const authActions = {
  signIn: actionCreator.async<{ email: string; password: string }, User>(
    "SIGNIN"
  ),
  signUp: actionCreator.async<
    {
      username: string;
      email: string;
      password: string;
    },
    null
  >("SIGNUP"),
  signOut: actionCreator<{ token: string }>("LOGOUT")
};
