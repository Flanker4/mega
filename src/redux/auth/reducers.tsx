import { AuthState } from "./types";
import { authActions } from "./actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const initialState: AuthState = {
  isLoading: false,
  user: undefined
};

export const auth = reducerWithInitialState(initialState)
  .cases([authActions.signIn.started, authActions.signUp.started], state => ({
    ...state,
    isLoading: true
  }))
  .cases([authActions.signIn.failed, authActions.signUp.failed], state => ({
    ...state,
    isLoading: false
  }))
  .case(authActions.signIn.done, (state, value) => ({
    user: value.result,
    isLoading: false
  }))
  .case(authActions.signUp.done, (state, value) => ({
    ...state,
    isLoading: false
  }))
  .case(authActions.signOut, (state, value) => ({
    isLoading: false
  }));
