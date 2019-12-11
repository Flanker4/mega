import { all } from "redux-saga/effects";
import { watchFeedAsync } from "./feed/saga";
import { watchRegisterAsync as watchAuthAsync } from "./auth/saga";

export function* rootSaga() {
  yield all([watchAuthAsync(), watchFeedAsync()]);
}
