import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { rootSaga } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import { loadState, saveState } from "../services/storage";

export const history = createBrowserHistory();

const routMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routMiddleware)
  )
);
store.subscribe(() => {
  saveState(store.getState());
});
sagaMiddleware.run(rootSaga);

export default store;

export type IStore = ReturnType<typeof reducer>;
