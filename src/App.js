import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Details from './pages/details/details'
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
            <Route exact path='/details/:id' component={Details} />
          </Switch>
     </Router>
  );
}

export default App;