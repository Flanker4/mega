import { FeedState } from "./types";
import { feedActions } from "./actions";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const initialState: FeedState = {
  articleCount: 0,
  isLoading: false
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
    ...value.result,
    isLoading: false
  }));
