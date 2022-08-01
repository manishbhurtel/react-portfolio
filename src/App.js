import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <>
        <Navbar fname="Namrata" />
        <div className="content">
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home fname="NAMRATA" lname="BHURTEL" />}
            />
            <Route path="/about" render={() => <About fname="Namrata"/>} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
