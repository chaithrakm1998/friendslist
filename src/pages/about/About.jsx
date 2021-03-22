import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
export default function About(){
    return(
        <div>
            
        <div className='header'>
    
    <Link className='logo-container' to='/homepage'> 
      <Logo className='logo' /> 
      
    </Link>
    
    <div className='options'>
      <Link className='option' to='/'>
        SIGN OUT
      </Link>
      </div>
        </div>
        <div className="d-flex justify-content-center"><h1>ABOUT</h1></div>
        <div className="content">Hello..!!!</div>
        </div>
    )
}