import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SavedArticles from "./components/SavedArticles";

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/articles" component={SavedArticles} />
      </Switch>
    </div>
  </BrowserRouter>
    
  
)


export default App;