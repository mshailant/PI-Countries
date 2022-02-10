import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { LandingPage } from "./pages/Landing";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
