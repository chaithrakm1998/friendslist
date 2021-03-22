import React from 'react';
import {Route} from 'react-router-dom';
import LogIn from '../../components/log-in/log-in';
import SignUpPage from '../../pages/signuppage/signuppage';

//import './signinpage.styles.scss';

const SignInPage = () => (
  <div className='sign-in'>
    <LogIn />
    
    <Route exact path='/sign-up' component={SignUpPage} />
  </div>
);

export default SignInPage;