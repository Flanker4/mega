import React from "react";
import logo from "./logo.svg";
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

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
};

export default App;
