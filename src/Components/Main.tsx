import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUp } from "./SignUp";
import { SignIn } from "./SigIn";
import { Home } from "./Home";

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
