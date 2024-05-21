import React from 'react';
import '../App.css'
const NewsletterSignup = () => {
  return (
<div className=' bg-black
 text-light'>

    <div className="p-5 ">
      <div className="row align-items-center">
        <div className="col-md-5 ">
          <h2>JOIN OUR NEWSLETTERS</h2>
          <p>Sign up to our newsletter to get updates on our latest collection, newly launched, and exclusive sales!!</p>
        </div>
        <div className="col-md-7">
          <form className="form-inline justify-content-center">
            <input type="email" className="form-control mb-2 mr-sm-2 p-2 w-50" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-secondary mb-2">Read More</button>
          </form>
        </div>
      </div>
    </div>
</div>
  );
};

export default NewsletterSignup;
