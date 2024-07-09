import React, { useState } from 'react';
import TopHeader from './Topheader';
import { Link } from 'react-router-dom';
import '../App.css';
import './EmptyCard.css';
import arrival5 from '../Images/arrival5.png';
import arrival6 from '../Images/arrival6.png';
import arrival7 from '../Images/arrival7.png';
import arrival1 from '../Images/arrival1.png';
import { FaShoppingCart, FaHeart, FaChevronDown, FaChevronUp, FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Navbar from './Navbar';

const EmptyCard = () => {
    const initialProducts = [
        { id: 1, img: arrival5, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 115.00 },
        { id: 2, img: arrival6, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 150.00 },
        { id: 3, img: arrival7, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 100.00 },
        { id: 4, img: arrival1, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 120.00 },
    ];

    const [products, setProducts] = useState(initialProducts);
    const [sortOption, setSortOption] = useState('');

    const handleSortChange = (event) => {
        const option = event.target.value;
        setSortOption(option);

        let sortedProducts = [...products];
        if (option === 'Price, high to low') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (option === 'Price, low to high') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === 'Newest') {
            sortedProducts = initialProducts;
        }
        setProducts(sortedProducts);
    };

    const [isOpenShipping, setIsOpenShipping] = useState(false);
    const [isOpenHelp, setIsOpenHelp] = useState(false);

    const toggleShipping = () => {
        setIsOpenShipping(!isOpenShipping);
    };

    const toggleHelp = () => {
        setIsOpenHelp(!isOpenHelp);
    };

    // Payment popup functionality
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentPopup = () => {
        setShowPaymentPopup(!showPaymentPopup);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handleSaveDetails = () => {
        if (!selectedPaymentMethod) {
            alert('Please select a payment method before saving.');
        } else {
            alert(`You have selected ${selectedPaymentMethod} method.`);
            setShowPaymentPopup(false);
        }
    };

      // Checkout popup functionality
      const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

      const handleCheckoutPopup = () => {
          setShowCheckoutPopup(!showCheckoutPopup);
      };
  
      const handleClosePopup = () => {
          setShowCheckoutPopup(false); // Updated to close checkout popup
      };

    return (
        <div className='bg-black'>
            <TopHeader />
            <Navbar />
            {/* <div className="mx-2 mt-3">
                <div className="row align-items-center border-bottom pb-2">
                    <div className="col-md-12">
                        <nav className="nav nav-pills">
                            <Link className="nav-link active readywear" to="#">READY TO WEAR</Link>
                            <Link className="nav-link" to="/ViewAllCategories">View all</Link>
                            <Link className="nav-link" to="#">Tops</Link>
                            <Link className="nav-link" to="#">Outerwear</Link>
                            <Link className="nav-link" to="#">Jackets and Coats</Link>
                            <Link className="nav-link" to="#">Denims</Link>
                            <Link className="nav-link" to="#">T-Shirts & polo shirts</Link>
                            <Link className="nav-link" to="#">Leather Clothing</Link>
                            <Link className="nav-link" to="#">Jeans</Link>
                            <Link className="nav-link" to="#">Suits</Link>
                            <Link className="nav-link" to="#">Trousers</Link>
                            <Link className="nav-link" to="#">Jogging suits</Link>
                        </nav>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <span className="text-white">Filter:</span>
                        <select className="form-control d-inline-block w-auto ml-2">
                            <option>Availability</option>
                        </select>
                    </div>
                    <div className="col-md-6 text-right">
                        <span className="text-white">Sort by:</span>
                        <select
                            className="form-control d-inline-block w-auto ml-2"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option>Price, high to low</option>
                            <option>Price, low to high</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <span className="text-white">{products.length} Products</span>
                    </div>
                </div>
            </div> */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 d-flex flex-column align-items-center justify-content-center text-white bg-black py-5">
                        <header className="shopping-header bg-black d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <span className="ml-2">SHOPPING BAG</span>
                                <FaShoppingCart className="shopping-icon" />
                            </div>
                            <div>0 Items</div>
                        </header>
                        <hr className="divider" />
                        <h2 className='mt-4'>Your cart is empty!!</h2>
                    <Link to='/viewallcategories'>    <button className="btn btn-light my-3">Continue Shopping</button></Link>
                        <p>
                            Have an account?{' '}
                            <Link to="/Login" className="text-light">
                                Sign in
                            </Link>{' '}
                            or{' '}
                            <Link to="/Signup" className="text-light">
                                Create an Account
                            </Link>{' '}
                            to see your saved items.
                        </p>
                    </div>
                    <div className="col-md-4 bg-black text-white py-5">
                        <div className="payment-summary">
                            <h4>PAYMENT SUMMARY</h4>
                            <hr />
                            <div className="d-flex justify-content-between border-bottom-item">
                                <span>Items</span>
                                <span>-</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom-item">
                                <span>Estimated Tax</span>
                                <span>-</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom-item font-weight-bold">
                                <span>Total</span>
                                <span>-</span>
                            </div>

                            <div className="d-flex mt-3">
                                <button className="btn btn-light mr-3 w-50" onClick={handlePaymentPopup}>Payment Method</button>
                                <button className="btn btn-light w-50" onClick={handleCheckoutPopup}>Checkout</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex'>
                <div className='col-md-8'>
                    <div className="favorites-container text-white bg-black p-4">
                        <h4 className="d-flex align-items-center">
                            YOUR FAVORITES <FaHeart className="ml-2" />
                        </h4>
                        <p>
                            <span className="font-weight-bold">Log In</span> or{' '}
                            <span className="font-weight-bold">Sign Up</span> to view your Favorite items
                        </p>
                        <div className="d-flex">
                            <Link to='/Login'> <button className="btn btn-outline-light mr-2">Log In</button></Link>
                            <Link to='/Signup'> <button className="btn btn-outline-light">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-between border-bottom-item" onClick={toggleShipping}>
                        <span>Shipping and Returns</span>
                        {isOpenShipping ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {isOpenShipping && (
                        <div className="dropdown-content">
                            <p>Details about shipping and returns...</p>
                        </div>
                    )}
                    <div className="d-flex justify-content-between border-bottom-item" onClick={toggleHelp}>
                        <span>Need help?</span>
                        {isOpenHelp ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {isOpenHelp && (
                        <div className="dropdown-content">
                            <p>Information on getting help...</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="row bg-black text-light">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-3">
                        <div className="card border-light bg-black text-white">
                            <img className="card-img-top" src={product.img} alt="Item" />
                            <span className="position-absolute top-0 end-0 heart-icon">
                                <FaHeart />
                            </span>
                            <div className="card-body bg-black text-light">
                                <h5 className="card-title d-inline">{product.title}</h5>
                                <div className="icon-container float-end">
                                    <div className="small-circle blue"></div>
                                    <div className="small-circle pink"></div>
                                    <div className="small-circle green"></div>
                                    <FaShoppingCart />
                                </div>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text text-danger">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Newsletter/>
            <Footer/>




  {/* Checkout popup */}
  {showCheckoutPopup && (
                <div className="checkout-popup">
                    <div className="checkout-popup-content">
                    <button className="btn btn-light close-btn" onClick={handleClosePopup}>
                    <i className="fas fa-times"></i>
                </button>
                        <div className="row">
                            <div className="col-md-6">
                                {/* Left div */}
                                <div className="text-center">
                                    <h2>GUEST CUSTOMERS</h2>
                                    <p>Check out without an account</p>
                                    <button className="btn btn-secondary">CHECK OUT AS GUEST</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* Right div */}
                                <div className="text-center">
                                    <p>Log in for faster checkout and see all your benefits.</p>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                        <small><Link to="/forgot-password">Forgot password?</Link></small>
                                    </div>
                                    <button className="btn btn-danger">Login</button>
                                    <p>or</p>
                                    <Link to="/signup">Create a new account</Link>
                                    <p><strong>OR</strong></p>
                                    <button className="btn btn-light">Use a One-Time Passcode</button>
                                    <p>By logging in, I agree to the Company's <Link to="/terms-of-use">Terms of Use</Link> and the Red Program Conditions. I have read the <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}



{/* payment method  */}
{showPaymentPopup && (
  <div className="payment-popup">
    <div className="payment-popup-content">
      <button className="close-button" onClick={handlePaymentPopup}>×</button>
      <h2>Payment Method</h2>
      <div className="form-group">
        <label>Country or Region</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Address Line 1</label>
        <input type="text" className="form-control" />
      </div>
      <h3>Payment</h3>
      <div className="payment-options">
        <div
          className={`payment-option ${
            selectedPaymentMethod === 'Card Payment' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodChange('Card Payment')}
        >
          <FaCreditCard />
          <span>Card Payment</span>
        </div>
        <div
          className={`payment-option ${
            selectedPaymentMethod === 'PayPal' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodChange('PayPal')}
        >
          <FaPaypal />
          <span>PayPal</span>
        </div>
        <div
          className={`payment-option ${
            selectedPaymentMethod === 'Bank Payment' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodChange('Bank Payment')}
        >
          <FaUniversity />
          <span>Bank Payment</span>
        </div>
      </div>
      <div className="form-group">
        <label>Card Number</label>
        <input type="number" className="form-control" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Expiry Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group col-md-6">
          <label>CVC</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-check d-flex align-items-center">
        <input type="checkbox" className="form-check-input mr-2" />
        <label className="form-check-label">Billing is the same as shipping information</label>
      </div>
      <p>
        By providing your card information, you allow Name Shop to charge your card for future payments in accordance with their terms.
      </p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-danger" onClick={handlePaymentPopup}>Cancel</button>
        <button className="btn btn-danger" onClick={handleSaveDetails}>Save Details</button>
      </div>
    </div>
  </div>
)}

  
    
<h2 className='text-center'>New Arrivals</h2>
<div className="container-fluid d-flex">
<div className="col-md-3">
  <div className="card mb-4 position-relative">
    <img className="card-img-top" src={arrival1} alt="Item" />
    <span className="position-absolute top-0 end-0 heart-icon">
      <i className="fas fa-heart"></i>
    </span>
    <div className="card-body bg-black text-light">
      <h5 className="card-title d-inline">NEW ARRIVALS</h5>
      <div className="icon-container float-end">
         <div className="small-circle blue"></div>
        <div className="small-circle pink"></div>
        <div className="small-circle green"></div>
        <i className="fas fa-shopping-cart"></i>
       
      </div>
      <p className="card-text">Co-Ord Sets</p>
      <p className="card-text text-danger">$.115.00</p>
    </div>
  </div>
</div>
<div className="col-md-3">
  <div className="card mb-4 position-relative">
    <img className="card-img-top" src={arrival1} alt="Item" />
    <span className="position-absolute top-0 end-0 heart-icon">
      <i className="fas fa-heart"></i>
    </span>
    <div className="card-body bg-black text-light">
      <h5 className="card-title d-inline">NEW ARRIVALS</h5>
      <div className="icon-container float-end">
         <div className="small-circle blue"></div>
        <div className="small-circle pink"></div>
        <div className="small-circle green"></div>
        <i className="fas fa-shopping-cart"></i>
       
      </div>
      <p className="card-text">Co-Ord Sets</p>
      <p className="card-text text-danger">$.115.00</p>
    </div>
  </div>
</div>

<div className="col-md-3">
  <div className="card mb-4 position-relative">
    <img className="card-img-top" src={arrival1} alt="Item" />
    <span className="position-absolute top-0 end-0 heart-icon">
      <i className="fas fa-heart"></i>
    </span>
    <div className="card-body bg-black text-light">
      <h5 className="card-title d-inline">NEW ARRIVALS</h5>
      <div className="icon-container float-end">
         <div className="small-circle blue"></div>
        <div className="small-circle pink"></div>
        <div className="small-circle green"></div>
        <i className="fas fa-shopping-cart"></i>
       
      </div>
      <p className="card-text">Co-Ord Sets</p>
      <p className="card-text text-danger">$.115.00</p>
    </div>
  </div>
</div>

<div className="col-md-3">
  <div className="card mb-4 position-relative">
    <img className="card-img-top" src={arrival1} alt="Item" />
    <span className="position-absolute top-0 end-0 heart-icon">
      <i className="fas fa-heart"></i>
    </span>
    <div className="card-body bg-black text-light">
      <h5 className="card-title d-inline">NEW ARRIVALS</h5>
      <div className="icon-container float-end">
         <div className="small-circle blue"></div>
        <div className="small-circle pink"></div>
        <div className="small-circle green"></div>
        <i className="fas fa-shopping-cart"></i>
       
      </div>
      <p className="card-text">Co-Ord Sets</p>
      <p className="card-text text-danger">$.115.00</p>
    </div>
  </div>
</div>
</div>




<Newsletter/>
        <Footer/>
    </div>
  )
}

export default EmptyCard