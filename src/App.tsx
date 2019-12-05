import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthContainer from "./Components/AuthContainer";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Components/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContainer />
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
    </BrowserRouter>
  );
};

export default App;
