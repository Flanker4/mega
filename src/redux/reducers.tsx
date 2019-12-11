import { combineReducers } from "redux";
import { auth } from "./auth/reducers";
import { feed } from "./feed/reducers";

export default combineReducers({
  auth: auth,
  feed: feed
});
