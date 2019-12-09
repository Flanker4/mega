import { AuthState } from "./types";
import { authActions } from "./actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const initialState: AuthState = {
  authenticated: false
};

export const auth = reducerWithInitialState(initialState)
  .case(authActions.signIn.done, (state, value) => ({
    username: value.result.token,
    authenticated: true
  }))
  .case(authActions.signOut, (state, value) => ({
    authenticated: false
  }));
