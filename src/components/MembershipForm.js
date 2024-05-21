import React from 'react';
import '../App.css'
import NewsletterSignup from './NewsletterSignup';
const MembershipForm = () => {
  return (
    <>
    
    <div className='bg-dark text-light'>
    <div className="p-5 ">
      <div className="row">
        <div className="col-md-4">
          <h2>Company's Name Member Program</h2>
          <p>Sign up for Company’s Policy to get exclusive access to products, events, and offers. Just provide a few details. It’s free to join and open to all.</p>
          <ul>
            <li>New email subscribers enjoy 20% off on their first order.</li>
            <li>Get free shipping & returns on all orders.</li>
            <li>Celebrate your birthday in style with a special offer.</li>
            <li>New arrivals, limited edition collabs, BIG sales you’re first to everything.</li>
          </ul>
        </div>
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" className="form-control inputField bg-dark text-light" id="firstName" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" className="form-control inputField bg-dark text-light" id="lastName" placeholder="Enter your last name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" className="form-control inputField bg-dark text-light" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control inputField bg-dark text-light" id="password" placeholder="Enter your password" required />
              <small className="form-text text-muted">
                Passwords must be at least 8 characters and can’t be easy to guess. Commonly used or risky passwords are not permitted.
              </small>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="birthdayMonth">Birthday Gift (Optional)</label>
              <div className="row">
                <div className="col">
                  <select className="form-control inputField bg-dark text-light" id="birthdayMonth">
                    <option>Month</option>
                    {/* Add month options here */}
                  </select>
                </div>
                <div className="col">
                  <select className="form-control inputField bg-dark text-light" id="birthdayYear">
                    <option>Year</option>
                    {/* Add year options here */}
                  </select>
                </div>
              </div>
              <small className="form-text text-muted ">
                We'll email you a discount on your birthday every year.
              </small>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="newsOffers" />
              <label className="form-check-label" htmlFor="newsOffers">Send me news & offers from Company.</label>
            </div>
            <button type="submit" className="btn btn-outline-secondary text-light w-100">Join</button>
            <small className="form-text text-muted mt-2">
              By creating an account, I agree to the Company Terms of Use and the Member Program Terms and Conditions. I have read the Privacy Policy and Financial Incentive Notice and Offer Terms.
            </small>
          </form>
        </div>
      </div>
    </div>
    </div>
    <NewsletterSignup />

    </>
  );
};

export default MembershipForm;
