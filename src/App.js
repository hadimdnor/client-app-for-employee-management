import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Signup, Mainpage } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/mainpage" exact component={() => <Mainpage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;