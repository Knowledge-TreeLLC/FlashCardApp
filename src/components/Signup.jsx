import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  return (
    <div>
      <h2>
        Signup
      </h2>
      <form>
        <label htmlFor="signup-username"> Username:
          <input type="text" id="signup-username"/>
        </label>
        <label htmlFor="signup-password"> Password: 
          <input type="text" id="signup-password"/>
        </label>
        <button type="submit" >Signup</button>
        {/* <button>
          <Link to="/home">Home 
          </Link>
        </button> */}
      </form>
    </div>
  )
}
export default Signup;