import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main = lazy(() => import("../components/Main/Main"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
