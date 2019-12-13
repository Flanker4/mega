import { takeLatest, put } from "redux-saga/effects";
import api from "../../services/api";
import { feedActions } from "./actions";
import { DummyArticle } from "./types";

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

export function* sendMessage(
  action: ReturnType<typeof feedActions.sendMessage.started>
) {
  try {
    const data = yield api.Feed.sendMessage(action.payload.message);

    const resultAction = feedActions.sendMessage.done({
      params: action.payload,
      result: data.article
    });
    yield put(resultAction);
  } catch (error) {
    const resultAction = feedActions.sendMessage.failed({
      params: action.payload,
      error: error
    });
    alert("Error: sending message" + JSON.stringify(error));
    yield put(resultAction);
  }
}

export function* watchFeedAsync() {
  yield takeLatest(feedActions.loadFeed.started.type, loadFeed);
  yield takeLatest(feedActions.sendMessage.started.type, sendMessage);
}
