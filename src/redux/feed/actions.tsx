import actionCreatorFactory from "typescript-fsa";
import { Article } from "./types";
const actionCreator = actionCreatorFactory("Feed");

interface FeedResponse {
  articles: Article[];
  articleCount: number;
}

export const feedActions = {
  loadFeed: actionCreator.async<{ page: number }, FeedResponse>("loadFeed")
};
