import actionCreatorFactory from "typescript-fsa";
import { string } from "prop-types";

const actionCreator = actionCreatorFactory("Auth");

export const authActions = {
  signIn: actionCreator.async<
    { username: string; password: string },
    { token: string }
  >("SIGNIN"),
  signUp: actionCreator.async<
    {
      username: string;
      email: string;
      password: string;
    },
    { token: string }
  >("SIGNUP"),
  signOut: actionCreator<{ token: string }>("LOGOUT")
};
