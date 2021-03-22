import React from 'react';
import GoogleLogin from '../social/GoogleLogin'

import {Link} from 'react-router-dom';
import { auth } from '../../firebase';
//import './sign-in.scss';
class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  

  render() {
    
    return (
      <div>
        
            
       <div className="d-flex justify-content-center"><h1>Login</h1></div>

      <div className="d-flex justify-content-center">
       
        <form onSubmit={this.handleSubmit} required>
        
        <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div classname='btn' align="center" >
                <Link to='/homepage'>
          <button type="button" class="btn btn-outline-primary mr-1">Sign in</button>
                </Link>
                
               
            <GoogleLogin/>
                
          
            <div className='title'>Don't have a account?</div>
            <Link to='/sign-up'>
            <button type="button" class="btn btn-outline-primary">Sign Up</button>
            </Link>
            </div>
        </form>
     
      </div>
      </div>
    );
  }
}

export default LogIn;