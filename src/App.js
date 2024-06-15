import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';


const App = () => {
  return (

    
    // <Router>
      <div>
       
        <HomePage/>
        {/* <Newsletter/> */}
       
        
        {/* Route Definitions */}
        {/* <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes> */}
      </div>
    // </Router>
  );
};

export default App;
