import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </Router>
  )
}


// ---App
//   --Signup
//   --Login
//   --Home
//     -- Input 
//     -- Display


export default App;

