import { FeedState } from "./types";
import { feedActions } from "./actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const initialState: FeedState = {
  articleCount: 0,
  isLoading: false,
  isSending: false
};

export const feed = reducerWithInitialState(initialState)
  .case(feedActions.loadFeed.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(feedActions.loadFeed.failed, state => ({
    ...state,
    isLoading: false
  }))
  .case(feedActions.loadFeed.done, (state, value) => ({
    ...state,
    ...value.result,
    page: value.params.page,
    isLoading: false
  }))
  .case(feedActions.sendMessage.started, (state, value) => ({
    ...state,
    isSending: true
  }))
  .case(feedActions.sendMessage.failed, (state, value) => ({
    ...state,
    isSending: false
  }))
  .case(feedActions.sendMessage.done, (state, value) => ({
    ...state,
    articles: [value.result, ...(state.articles || [])],
    isSending: false
  }));
