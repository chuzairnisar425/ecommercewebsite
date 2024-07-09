import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../App.css'
import Navbar from './Navbar';

function Header() {

  

  return (
    <header>
     <Navbar/>

      <div className="banner bg-danger text-white text-center py-4">
        <div className="text-center">
          <h1 className='display-5'>GET $50 OFF $150, $75 OFF $200 OR $100 OFF $350+</h1>
          <div className="d-flex justify-content-center mt-2 shoplinks">
            <Link className="text-white mx-2" to="/">Shop Men</Link>
            <Link className="text-white mx-2" to="/">Shop Women</Link>
            <Link className="text-white mx-2" to="/">Shop Kids</Link>
          </div>
          <p>Online only. Auto-applied at checkout.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
