import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';


const Login = () => {


  const submitLogin = () => {
    
  }

  const redirectSignUp = () => {
    history.push('/signup');
  }

  return (
    <div>
      <h2>
        Login Credentials
      </h2>
      <form>
        <label htmlFor="username"> Username:
          <input type="text" id = "username"/>
        </label>
         <label htmlFor="password"> Password:
          <input type="text" id = "password"/>
        </label>
        <button type="submit" >Login</button>
        <button type="submit" onClick={redirectSignUp}> Signup</button>
      </form>
    </div>
  )
}
export default Login;