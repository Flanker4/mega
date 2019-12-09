import { takeLatest, put } from "redux-saga/effects";
import { authActions } from "../auth/actions";
import api from "../../services/api";

export function* registerUser(
  action: ReturnType<typeof authActions.signUp.started>
) {
  try {
    const data = yield api.Auth.register(
      action.payload.username,
      action.payload.email,
      action.payload.password
    );
    console.log("--response %j", data);
    const resultAction = authActions.signUp.done({
      params: action.payload,
      result: { token: "42" }
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

export function* watchRegisterAsync() {
  yield takeLatest(authActions.signUp.started.type, registerUser);
}
