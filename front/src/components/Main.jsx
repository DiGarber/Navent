import React from "react";
import { Route, Switch } from "react-router-dom";
import TestSelector from "./TestSelector";
import TestContainer from "../containers/TestContainer";
import PreTestView from "./PreTestView";
import Auth from "./Auth";

const Main = () => (
  <Switch>
    <Route exact path="/test/:userid/:skillid" component={PreTestView} />
    <Route exact path="/" component={TestSelector} />
    <Route exact path="/register" component={Auth} />
    <Route path="/tests/:name" component={TestContainer} />
  </Switch>
);

export default Main;
