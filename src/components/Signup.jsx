import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  return (
    <div>
      <h2>
        Signup
      </h2>
      {/* <form>
        <label for="username"> Username:
          <input type="text"
            placeholder="Enter your username"
          />
        </label>
        <label for="password"> Password:
          <input type="text"
            placeholder="Enter your password"
          />
        </label>
        <input type="button">Signup</input>
        <button>
          <Link to="/home">Home
          </Link>
        </button>
      </form> */}
    </div>
  )
}
export default Signup;