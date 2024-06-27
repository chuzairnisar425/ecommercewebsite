import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../App.css'
import Navbar from './Navbar';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Call parent component function to handle search
  };

  return (
    <header>
     <Navbar/>

      <div className="banner bg-danger text-white text-center py-4">
        <div className="text-center">
          <h1 className='display-5'>GET $50 OFF $150, $75 OFF $200 OR $100 OFF $350+</h1>
          <div className="d-flex justify-content-center mt-2">
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
