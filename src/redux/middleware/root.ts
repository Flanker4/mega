import { all, call, takeEvery } from "redux-saga/effects";
import { watchRegisterAsync } from "./auth";

function* sagaHelloWorld() {
  yield call(console.log, "Hello World");
}

export function* rootSaga() {
  yield all([sagaHelloWorld(), watchRegisterAsync()]);
}
