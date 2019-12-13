import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux";
import { GlobalStyle } from "./styles";

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
