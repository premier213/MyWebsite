import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";

const Body = styled.div`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

function App() {
  return (
    <Router>
      <Body>
        <div className="App min-h-screen">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio">portfolio</Route>
            <Route path="/contact">contact</Route>
            <Route path="*">404</Route>
          </Switch>
        </div>
      </Body>
    </Router>
  );
}

export default App;
