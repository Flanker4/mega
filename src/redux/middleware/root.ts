import { all, call } from "redux-saga/effects";

function* sagaHelloWorld() {
  yield call(console.log, "Hello World");
}

export function* rootSaga() {
  yield all([sagaHelloWorld()]);
}
