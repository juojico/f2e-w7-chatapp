import React, { Suspense, lazy, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Loader from "./component/Loader";
import Select from "./component/Select";
import Store from "./store";
import { text } from "./i18n";

const Hall = lazy(() => import("./router/hall"));
const Bar = lazy(() => import("./router/bar"));
const Club = lazy(() => import("./router/club"));
const Room = lazy(() => import("./router/room"));
const Chat = lazy(() => import("./router/chat"));

const defaultTheme = {
  primary: "#DDB16F",
  secondary: "white",
  lightgrey: "rgba(0, 0, 0, 0.4)",
  grey: "rgba(0, 0, 0, 0.53)",
  darkgrey: "rgba(0, 0, 0, 0.7)",
  whitegrey: "rgba(255, 255, 255, 0.6)",
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
  const [lang, setLang] = useState("en");
  const handleLang = e => {
    setLang(e.target.value);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Store.Provider value={{ text: text[lang] }}>
        <Main>
          <Select onChange={handleLang} />
          <Router>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path='/' component={Hall} />
                <Route exact path='/bar/' component={Bar} />
                <Route exact path='/club/' component={Club} />
                <Route exact path='/room/' component={Room} />
                <Route exact path='/:type/chat/:chatId' component={Chat} />
              </Switch>
            </Suspense>
          </Router>
        </Main>
      </Store.Provider>
    </ThemeProvider>
  );
}

export default App;
