import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";

const Body = styled.div`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Body className="bg-gray-300">
          <Header>
            <Switch>
              <Route exact path="/">
                home
              </Route>
              <Route path="/about">about</Route>
              <Route path="/portfolio">portfolio</Route>
              <Route path="/contact">contact</Route>
              <Route path="*">404</Route>
            </Switch>
          </Header>
        </Body>
      </div>
    </Router>
  );
}

export default App;
