import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/nav";
import Home from "./components/home";

const Body = styled.div`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Body>
          <Nav>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">about</Route>
              <Route path="/portfolio">portfolio</Route>
              <Route path="/contact">contact</Route>
              <Route path="*">404</Route>
            </Switch>
          </Nav>
        </Body>
      </div>
    </Router>
  );
}

export default App;
