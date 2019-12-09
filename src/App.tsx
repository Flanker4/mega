import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { Main } from "./Components/Main";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { history } from "./redux/index";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <HeaderContainer />
        <Main />
      </div>
    </Router>
  );
};

export default App;
