import { AuthState } from "./types";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import { LogIn, LogOut } from "./actions";

const initialState: AuthState = {
  authenticated: false
};

export default function auth(
  state: AuthState = initialState,
  action: Action
): AuthState {
  if (isType(action, LogIn)) {
    return {
      username: action.payload.username,
      authenticated: true
    };
  }
  if (isType(action, LogOut)) {
    return {
      authenticated: false
    };
  }
  return state;
}
