import { takeLatest, put } from "redux-saga/effects";
import { authActions } from "../auth/actions";
import api from "../../services/api";
import { feedActions } from "./actions";

export function* loadFeed(
  action: ReturnType<typeof feedActions.loadFeed.started>
) {
  try {
    const data = yield api.Feed.loadPage(action.payload.page);
    const resultAction = feedActions.loadFeed.done({
      params: action.payload,
      result: data
    });
    yield put(resultAction);
  } catch (error) {
    const resultAction = feedActions.loadFeed.failed({
      params: action.payload,
      error: error
    });
    alert("Error: loading feed" + JSON.stringify(error));
    yield put(resultAction);
  }
}

export function* watchFeedAsync() {
  yield takeLatest(feedActions.loadFeed.started.type, loadFeed);
}
