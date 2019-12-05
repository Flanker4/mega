import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("Auth");

export const authActions = {
  logIn: actionCreator<{ username: string; password: string }>("AUTHENTICATE"),
  logOut: actionCreator("LOGOUT")
};
