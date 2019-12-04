import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
