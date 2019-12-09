import { takeLatest, put } from "redux-saga/effects";
import { authActions } from "../auth/actions";
import api from "../../services/api";
import { push } from "react-router-redux";

export function* signUpUser(
  action: ReturnType<typeof authActions.signUp.started>
) {
  try {
    const data = yield api.Auth.register(
      action.payload.username,
      action.payload.email,
      action.payload.password
    );
    const resultAction = authActions.signUp.done({
      params: action.payload,
      result: null
    });

    yield put(resultAction);
  } catch (error) {
    const resultAction = authActions.signUp.failed({
      params: action.payload,
      error: error
    });
    alert("Error: " + JSON.stringify(error));
    yield put(resultAction);
  }
}

export function* signInUser(
  action: ReturnType<typeof authActions.signIn.started>
) {
  try {
    const data = yield api.Auth.login(
      action.payload.email,
      action.payload.password
    );
    const resultAction = authActions.signIn.done({
      params: action.payload,
      result: data.user
    });

    yield put(resultAction);
    yield put(push("/"));
  } catch (error) {
    const resultAction = authActions.signIn.failed({
      params: action.payload,
      error: error
    });
    alert("Error: " + JSON.stringify(error));
    yield put(resultAction);
  }
}

export function* watchRegisterAsync() {
  yield takeLatest(authActions.signUp.started.type, signUpUser);
  yield takeLatest(authActions.signIn.started.type, signInUser);
}
