import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SavedArticles from "./components/SavedArticles";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/api/articles" component={SavedArticles} />
      </Switch>
    </div>
  </Router>
    
  
)


export default App;