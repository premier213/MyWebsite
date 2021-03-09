import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/nav/navMobile";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

const Body = styled.div`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

function App() {
  return (
    <Router>
      <Body>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="*">404</Route>
          </Switch>
        </div>
      </Body>
    </Router>
  );
}

export default App;
