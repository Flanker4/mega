import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("Auth");

export const LogIn = actionCreator<{ username: string; password: string }>(
  "AUTHENTICATE"
);
export const LogOut = actionCreator("LOGOUT");
