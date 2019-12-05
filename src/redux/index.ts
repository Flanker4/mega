import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { rootSaga } from "./middleware/root";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;

export type IStore = ReturnType<typeof reducer>;
