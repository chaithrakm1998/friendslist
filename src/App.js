import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LogIn from "./components/log-in/log-in";
import SignUp from "./components/sign-up/sign-up";
import HomePage from "./pages/homepage/homepage";
function App() {
  return (<Router>
    
          <Switch>
            <Route exact path='/' component={LogIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Homepage" component={HomePage} />
          </Switch>
     </Router>
  );
}

export default App;