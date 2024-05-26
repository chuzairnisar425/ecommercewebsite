import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';

function SignUp() {
  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 bg-black text-light   p-5">
      <div className="card p-4 bg-black text-white border-light boxshadow" >
        <h2 className="text-start mb-4 text-light display-3 ">Sign Up</h2>
        <div className="row align-items-center" style={{ height: '100%' }}>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control p-3" id="fullName" placeholder="Full Name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailAddress">Enter Email Address</label>
                <input type="email" className="form-control p-3" id="emailAddress" placeholder="Email Address" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label> 
                <input type="password" className="form-control p-3" id="password" placeholder="Password" />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control p-3" id="confirmPassword" placeholder="Confirm Password" />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div>
              <button type="submit" className="btn btn-light w-100 mb-3 p-3">Sign Up</button>
              <div className="text-center mb-3">
                <span className='text-light'>Already have an account? <Link to="/login" className="text-light">Log in</Link></span>
              </div>
              <div className="text-center mb-3">Or</div>
            </div>
            <div>
              <button className="btn btn-outline-light w-100 mb-3 p-3">
                <i className="fab fa-google"></i> Sign up with Google
              </button>
              <button className="btn btn-outline-light w-100 mb-3 p-3">
                <i className="fab fa-facebook-f"></i> Sign up with Facebook
              </button>
              <button className="btn btn-outline-light w-100 p-3">
                <i className="fab fa-apple"></i> Sign up with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
