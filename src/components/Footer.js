import React from 'react';
// import '../App.css';
import './Footer.css';

const Footer = () => {
  return (
    <div className="p-5 bg-black text-white py-4">
      <div className="row">
        <div className="col-md-3">
          <h5>How can we help you?</h5>
          <p>Call us: 988888-34521<br />Monday-Friday<br />Email: hunter1132@gmail.com</p>
          <form>
            <div className="form-group">
              <label>Receive exclusive promotions, private sales and news</label>
              <input type="email" className="form-control custom-input text-dark" placeholder="Email" required />
              <button type="submit" className="signupbtn  mt-2">Sign up Now!</button>
            </div>
          </form>
        </div>  
        <div className="col-md-3">
          <h5>My Account</h5>
          <ul className="list-unstyled">
            <li className="py-2"><a href="#" className="text-white ">Log in</a></li>
            <li className="py-2"><a href="#" className="text-white">Sign up</a></li>
            <li className="py-2"><a href="#" className="text-white">Account</a></li>
            <li className="py-2"><a href="#" className="text-white">Order History</a></li>
            <li className="py-2"><a href="#" className="text-white">Wishlist</a></li>
            <li className="py-2"><a href="#" className="text-white">Track your order</a></li>
          </ul>
          <button className="btn btn-danger  mt-3">Follow on Shop</button>
        </div>
        <div className="col-md-3">
          <h5>Information</h5>
          <ul className="list-unstyled">
            <li className="py-2"><a href="#" className="text-white">About Us</a></li>
            <li className="py-2"><a href="#" className="text-white">Contact Us</a></li>
            <li className="py-2"><a href="#" className="text-white">Size Guide</a></li>
            <li className="py-2"><a href="#" className="text-white">Careers</a></li>
            <li className="py-2"><a href="#" className="text-white">Store Location</a></li>
            <li className="py-2"><a href="#" className="text-white">Trends</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Company Policy</h5>
          <ul className="list-unstyled">
            <li className="py-2"><a href="#" className="text-white">Returns</a></li>
            <li className="py-2"><a href="#" className="text-white">Shipping & Handling Policy</a></li>
            <li className="py-2"><a href="#" className="text-white">Privacy Policy</a></li>
            <li className="py-2"><a href="#" className="text-white">Exchange Policy</a></li>
            <li className="py-2"><a href="#" className="text-white">Terms of Services</a></li>
            <li className="py-2"><a href="#" className="text-white">GDPR Compliance</a></li>
            <li className="py-2"><a href="#" className="text-white">FAQs</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
