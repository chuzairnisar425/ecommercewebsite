import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../App.css'

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
      <div className="top-bar bg-dark text-white py-1">
        <div className="">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <nav className="navbar navbar-expand-md navbar-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/categories" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Categories
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="categoriesDropdown">
                        {/* Add dropdown items here */}
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/" id="featuredCollectionDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Featured Collection
                      </Link>
                      {/* Add dropdown menu for featured collection */}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sale">
                        Sale
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <Link to="/login" className="btn btn-outline-secondary text-light mr-5">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
              <form onSubmit={handleSubmit} className="d-flex align-items-center position-relative">
                <input
                  type="text"
                  className="form-control formBgColor pr-5"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary position-absolute search-button">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <Link className="nav-link text-white mx-2" to="/"><i className="fa fa-heart"></i></Link>
              <Link  className="nav-link text-white mr-2" to="/EmptyCard"><i className="fa fa-shopping-bag"></i></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="banner bg-danger text-white text-center py-4">
        <div className="">
          <h1>GET $50 OFF $150, $75 OFF $200 OR $100 OFF $350+</h1>
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
