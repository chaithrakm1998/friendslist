import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  SignUpPage from './pages/signuppage/signuppage';
import  LogInPage from './pages/loginpage/loginpage';
import HomePage from "./pages/homepage/homepage";
import About  from './pages/about/About';
import'bootstrap/dist/css/bootstrap.css';
function App() {
  return (<Router>
      
          <Switch>
            <Route exact path='/' component={LogInPage} />
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/about" component={About}/>
          </Switch>
     </Router>
  );
}

export default App;