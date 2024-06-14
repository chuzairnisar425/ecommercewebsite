// src/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="top-bar bg-dark text-white py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <nav className="navbar navbar-expand-md navbar-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Categories
                      </a>
                      <div className="dropdown-menu" aria-labelledby="categoriesDropdown">
                        {/* Add dropdown items here */}
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Featured Collection
                      </a>                    </li>
                    <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Blog
                      </a>                    </li>
                    <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Sale
                      </a>                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
            <button className="btn btn-outline-secondary  text-light mr-5"><i className="fas fa-sign-in-alt"></i> Login</button>          
                <input type="text" className="form-control formBgColor" placeholder="What are you looking for?"  />
              <a className="nav-link text-white mx-2" href="/"><i className="fa fa-heart"></i></a>
              <a className="nav-link text-white" href="/"><i className="fa fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="banner bg-danger text-white text-center py-4">
        <div className="container">
          <h1 >GET $50 OFF $150, $75 OFF $200 OR $100 OFF $350+</h1>
          <div className="d-flex justify-content-center mt-2">
            <a className="text-white mx-2" href="/">Shop Men</a>
            <a className="text-white mx-2" href="/">Shop Women</a>
            <a className="text-white mx-2" href="/">Shop Kids</a>
          </div>
          <p>Online only. Auto-applied at checkout.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
