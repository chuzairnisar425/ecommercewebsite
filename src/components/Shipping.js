import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Shipping = () => {
  // Toggle functionality
  const [isOpenShipping, setIsOpenShipping] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);

  const toggleShipping = () => {
    setIsOpenShipping(!isOpenShipping);
  };

  const toggleHelp = () => {
    setIsOpenHelp(!isOpenHelp);
  };

  return (
    <div className="bg-black p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Secure Checkout</h2>
            <form className=''>
              <h4>Shipping Address</h4>
              <div className="form-row mt-3">
                <div className="form-group col-md-6 pr-1">
                  <input type="text" className="form-control no-bg" id="firstName" required placeholder='First Name'/>
                </div>
                <div className="form-group col-md-6 pl-1">
                  <input type="text" className="form-control no-bg" id="lastName" required placeholder='Last Name'/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 pr-1">
                  <input type="text" className="form-control no-bg" id="addressLine1" required placeholder='Address Line 1'/>
                </div>
                <div className="form-group col-md-6 pl-1">
                  <input type="text" className="form-control no-bg" id="addressLine2" placeholder='Apt, Suite (Optional)'/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 pr-1">
                  <input type="text" className="form-control no-bg" id="city" required placeholder='Town/City'/>
                </div>
                <div className="form-group col-md-4 pl-1 pr-1">
                  <div className="dropdown-wrapper">
                    <select id="state" className="form-control no-bg dropdown" required>
                      <option value="">Choose...</option>
                      <option>123</option>
                      <option>1231</option>
                      <option>234</option>
                    </select>
                    
                  </div>
                </div>
                <div className="form-group col-md-2 pl-1">
                  <input type="text" className="form-control no-bg" id="zip" required placeholder='Postal Code'/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 pr-1">
                  <input type="email" className="form-control no-bg" id="email" required placeholder='Email'/>
                </div>
                <div className="form-group col-md-6 pl-1">
                  <input type="text" className="form-control no-bg" id="phone" required placeholder='Phone Number'/>
                </div>
              </div>
              <div className="form-group">
              <p className="mt-3 text-white">
              By signing up, I agree that the X.Y.Z. Company may email me news and offers. I can <Link to="#" className="text-white">Unsubscribe</Link> at any time. I have read the <Link to="#" className="text-white">Privacy Policy</Link>. Offer details, financial incentives and exclusions available <Link to="#" className="text-white">here</Link>.
            </p>
                <input type="checkbox" className="form-check-input" id="useBilling" />
                <label className="form-check-label" htmlFor="useBilling">Use Shipping address as billing address</label>
              </div>
              <div className="form-group">
                <label>Payment Method</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentMethod" id="cod" value="cod" checked />
                  <label className="form-check-label" htmlFor="cod">Cash on delivery</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentMethod" id="debit" value="debit" />
                  <label className="form-check-label" htmlFor="debit">Debit Card</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentMethod" id="credit" value="credit" />
                  <label className="form-check-label" htmlFor="credit">Credit Card</label>
                </div>
              </div>
              <button type="submit" className="btn btn-light px-4">Next</button>
            </form>
          
          </div>
          <div className="col-md-4">
            <h3>Order Summary</h3>
            <div className="border p-3 mb-3">
              <p>Items: <span className="float-right">$30</span></p>
              <p>Estimated Tax: <span className="float-right">Calculated in CheckOut</span></p>
              <p>Shipping: <span className="float-right">$30</span></p>
              <p>Total: <span className="float-right">$30</span></p>
            </div>
            <div>
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
                <span>Need Help?</span>
                {isOpenHelp ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isOpenHelp && (
                <div className="dropdown-content">
                  <p>Contact us at: support@example.com</p>
                  <p>Call us at: 123-456-7890</p>
                </div>
              )}
            </div>
            <h4>Shopping Bag</h4>
            <div className="border p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p>Beige and Black dress (3-13 years)</p>
                  <p>Length: 32 (3-4 years)</p>
                </div>
                <div className="text-right">
                  <p>$2,300.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
