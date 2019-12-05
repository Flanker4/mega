import { AuthState } from "./types";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import { authActions } from "./actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const initialState: AuthState = {
  authenticated: false
};

export const auth = reducerWithInitialState(initialState)
  .case(authActions.logIn, (state, value) => ({
    username: value.username,
    authenticated: true
  }))
  .case(authActions.logOut, (state, value) => ({
    authenticated: false
  }));
