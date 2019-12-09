import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { rootSaga } from "./middleware/root";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const routMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routMiddleware)
  )
);
sagaMiddleware.run(rootSaga);

export default store;

export type IStore = ReturnType<typeof reducer>;
