import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./Auth/SigIn";
import SignUp from "./Auth/SignUp";

export const Main = (props: any) => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
    </Switch>
  );
};
