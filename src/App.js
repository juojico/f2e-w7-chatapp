import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import MainMenu from "./componet/MainMenu";

const Hall = lazy(() => import("./router/hall"));
const Bar = lazy(() => import("./router/bar"));
const Club = lazy(() => import("./router/club"));
const Room = lazy(() => import("./router/room"));

const defaultTheme = {
  primary: "#DDB16F",
  secondary: "white",
  lightgrey: "rgba(0, 0, 0, 0.4)",
  grey: "rgba(0, 0, 0, 0.53)",
  black: "black",
  white: "white"
};

const Main = styled.div`
  position: absolute;
  width: 100%;
  max-width: 768px;
  height: 100%;
  left: 50%;
  transform: translate(-50%);
  background-color: ${props => props.theme.primary};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Router>
          <MainMenu />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={Hall} />
              <Route path='/bar/' component={Bar} />
              <Route path='/club/' component={Club} />
              <Route path='/room/' component={Room} />
            </Switch>
          </Suspense>
        </Router>
      </Main>
    </ThemeProvider>
  );
}

export default App;
