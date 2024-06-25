import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrival1 from '../Images/arrival1.png';

import './Navbar.css'; // Custom styles if needed

const Navbar = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const cartItemCount = 3; // Example item count

  const handleMouseEnter = () => {
    setCartVisible(true);
  };

  const handleMouseLeave = () => {
    setCartVisible(false);
  };

  return (
    <div className="top-bar bg-black text-white py-1">
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
            <form className="d-flex align-items-center position-relative">
              <input
                type="text"
                className="form-control formBgColor pr-5"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="btn btn-primary position-absolute search-button">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <Link className="nav-link text-white mx-2" to="/"><i className="fa fa-heart"></i></Link>
            <div 
              className="nav-link text-white position-relative" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa fa-shopping-bag"></i> {cartItemCount}
              {isCartVisible && (
                <div className="cart-dropdown position-absolute bg-white text-black p-3" style={{right: 0, width: '300px'}}>
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex justify-content-between w-100">
                      <h5>Your Bag</h5>
                      <i className="fa fa-shopping-bag">{cartItemCount}</i>
                    </div>
                    <p className="mt-2">20% off for new Subscribers. <Link to="/signup" ><span className='signupclr'> Sign Up.</span></Link></p>
                    <h6>Ship</h6>
                    <div className="d-flex align-items-center mt-3">
                      <img src={arrival1} alt="Cart Item" className="img-fluid mr-3" style={{ width: '60px' }} />
                      <div>
                        <p>501 90’s Women’s Jeans</p>
                        <p>Left Out - Light Wash</p>
                        <span className='text-danger lead fw-bold '>$59.98</span> <span className='text-decoration-line-through'>$59.98</span>
                        <p>23W X 32L</p>
                        <p>Qty: 2</p>
                        <p>Subtotal: $119.96</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
