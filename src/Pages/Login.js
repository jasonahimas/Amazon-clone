import React, { useState } from 'react'
import Header from './Header'
import "./Login.css"
import { auth } from '../firebase';
import {Navigate, useNavigate} from "react-router-dom";
function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setpassword]=useState('');
  
  

  const login=(event)=>{
    event.preventDefault(); // this stops the refresh
    // do login logic
    auth
     .SignInWithEmailAndPassword(email,password)
     .then((auth)=>{
       //logged in ,redirect to home page;
       history('/');
     } )
     .catch((e)=>alert(e.message));
  }
  
  const register=event=>{
    event.preventDefault(); 
  
  auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
       //create a user and logged in,redirect to homepage
      history('/');
      })
      .catch((e)=>alert(e.message));
    }
  return (  
    
   

    <div className='login'>
      
      <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="" />
     <div className="login_container">
      <h1>Sign In</h1>
      <form>
        <h5>Email</h5>
        <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
        <h5>Password</h5>
        <input value={password}  onChange={event=>setpassword(event.target.value)} type="password" />
        <button onClick={login} type='submit' className='login_signinbutton'>Sign In</button>
      </form>
      <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

      <button onClick={register} className='login_registerbutton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login