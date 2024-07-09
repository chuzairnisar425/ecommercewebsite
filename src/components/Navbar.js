import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrival1 from '../Images/arrival1.png';
import './Navbar.css'; // Custom styles if needed
import { FiMenu } from 'react-icons/fi'; // Import hamburger icon from react-icons

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

  const [isCartVisible, setCartVisible] = useState(false);
  const [isWishlistVisible, setWishlistVisible] = useState(false);
  const cartItemCount = 3; // Example item count
  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu state
  };
  const handleCartMouseEnter = () => {
    setCartVisible(true);
  };

  const handleCartMouseLeave = () => {
    setCartVisible(false);
  };

  const handleWishlistMouseEnter = () => {
    setWishlistVisible(true);
  };

  const handleWishlistMouseLeave = () => {
    setWishlistVisible(false);
  };

  const scrollToCategories = () => {
    const element = document.getElementById('shopByCategories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToFeaturedCollection = () => {
    const element = document.getElementById('featuredCategories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }; const scrollToHappyBlogs = () => {
    const element = document.getElementById('blogStories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="top-bar bg-black text-white py-1 ">
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <FiMenu style={{fontSize:'2rem'}}/> {/* Hamburger icon */}
      </button>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="allcategories"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={scrollToCategories}
                    >
                      All Categories
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ width: 300 }}>
                      <h4 className=" ">Categories</h4 >
                      <Link className="dropdown-item " to="/tropical">Tropical</Link>
                      <Link className="dropdown-item" to="/locals-only">Locals Only</Link>
                      <Link className="dropdown-item" to="/denim-collection">Denim Collection</Link>
                      <div className="dropdown-divider"></div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link  className="nav-link dropdown-toggle"
                      to="#"
                      id="allcategories"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={scrollToFeaturedCollection}>
                      Featured Collection
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link dropdown-toggle"
                      to="#"
                      id="happystories"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={scrollToHappyBlogs}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/sale" id="saleDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sale
                    </Link>
                    <div className="dropdown-menu p-3" aria-labelledby="saleDropdown">
                      <div className="row">
                        <div className="col-md-4">
                          <h6>Sale</h6>
                          <Link className="dropdown-item" to="/sale/mens">Shop All Men's Sale</Link>
                          <Link className="dropdown-item" to="/sale/jeans">Jeans</Link>
                          <Link className="dropdown-item" to="/sale/shirts">Shirts & T-Shirts</Link>
                          <Link className="dropdown-item" to="/sale/pants">Pants & Chinos</Link>
                          <Link className="dropdown-item" to="/sale/jackets">Jean Jackets & Outerwear</Link>
                          <Link className="dropdown-item" to="/sale/sweaters">Sweaters & Sweatshirts</Link>
                          <Link className="dropdown-item" to="/sale/shorts">Shorts</Link>
                          <Link className="dropdown-item" to="/sale/cargos">Cargos</Link>
                          <Link className="dropdown-item" to="/sale/big-tall">Big & Tall</Link>
                        </div>
                        <div className="col-md-4 mr-5">
                          <h6>Sale</h6>
                          <Link className="dropdown-item" to="/sale/mens">Shop All Men's Sale</Link>
                          <Link className="dropdown-item" to="/sale/jeans">Jeans</Link>
                          <Link className="dropdown-item" to="/sale/shirts">Shirts & T-Shirts</Link>
                          <Link className="dropdown-item" to="/sale/pants">Pants & Chinos</Link>
                          <Link className="dropdown-item" to="/sale/jackets">Jean Jackets & Outerwear</Link>
                          <Link className="dropdown-item" to="/sale/sweaters">Sweaters & Sweatshirts</Link>
                          <Link className="dropdown-item" to="/sale/shorts">Shorts</Link>
                          <Link className="dropdown-item" to="/sale/cargos">Cargos</Link>
                          <Link className="dropdown-item" to="/sale/big-tall">Big & Tall</Link>
                        </div>
                        <div className="col-md-4">
                          <h6>Sale</h6>
                          <Link className="dropdown-item" to="/sale/mens">Shop All Men's Sale</Link>
                          <Link className="dropdown-item" to="/sale/jeans">Jeans</Link>
                          <Link className="dropdown-item" to="/sale/shirts">Shirts & T-Shirts</Link>
                          <Link className="dropdown-item" to="/sale/pants">Pants & Chinos</Link>
                          <Link className="dropdown-item" to="/sale/jackets">Jean Jackets & Outerwear</Link>
                          <Link className="dropdown-item" to="/sale/sweaters">Sweaters & Sweatshirts</Link>
                          <Link className="dropdown-item" to="/sale/shorts">Shorts</Link>
                          <Link className="dropdown-item" to="/sale/cargos">Cargos</Link>
                          <Link className="dropdown-item" to="/sale/big-tall">Big & Tall</Link>
                        </div>
                      </div>
                    </div>
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
            <div
              className="nav-link text-white mx-2 position-relative"
              onMouseEnter={handleWishlistMouseEnter}
              onMouseLeave={handleWishlistMouseLeave}
            >
              <i className="fa fa-heart" style={{ cursor: 'pointer' }}></i>
              {isWishlistVisible && (
                <div className="wishlist-dropdown position-absolute bg-white text-black p-3" style={{ right: 0, width: '400px', zIndex: 1000, borderRadius: '10px' }}>
                  <Wishlist />
                </div>
              )}
            </div>
            <div
              className="nav-link text-white position-relative"
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
            >
              <i className="fa fa-shopping-bag " style={{ cursor: 'pointer' }}></i>
              {isCartVisible && (
                <div className="cart-dropdown position-absolute bg-white text-black p-3" style={{ right: 0, width: '300px', borderRadius: '10px' }}>
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

const Wishlist = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-3" >
      <h1 className="text-center">Company’s Name</h1>
      <h2 className="text-center mt-3">Welcome back</h2>
      <p className="text-center">Log in for faster checkout and see all your benefits.</p>
      <div className="container-transition hover-animation w-100" style={{ maxWidth: "300px" }}>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <small className="form-text text-muted">
              <a href="#" className="text-decoration-none">Forgot Password</a>
            </small>
          </div>
          <button type="submit" className="btn btn-secondary btn-block">Log In</button>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none">Create a new account</a>
        </div>
        <div className="text-center my-3">
          <p>OR</p>
        </div>
        <button className="btn btn-secondary btn-block">Use a One-Time Passcode</button>
      </div>
      <p className="text-center mt-3" style={{ fontSize: "0.75rem" }}>
        By logging in, I agree to the Company's Terms, Terms of Use, and the Red Tab Program Conditions. I have read the Company's Privacy Policy.
      </p>
    </div>
  );
};

export default Navbar;