import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-light ">
      <div className="p-4 bg-black boxshadow" style={{ width: '700px' }}>
        <h2 className="text-start mb-2 text-light">Login</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control p-3" id="email" placeholder="Email" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control p-3" id="password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <a href="#" className="text-light">Forgot Your Password?</a>
            <div className="text-center">
              <button type="submit" className="btn btn-light mt-5 p-3">Log in</button>
            </div>
          </div>
        </form>
        <div className="text-center my-3">
          <hr className="text-light" />
          <span className="text-light px-2">------Or Login with------</span>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <button className="btn btn-outline-light w-100 p-3 me-2">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="btn btn-outline-light w-100 mx-2">
            <i className="fab fa-google"></i>
          </button>
          <button className="btn btn-outline-light w-100 ms-2">
            <i className="fab fa-apple"></i>
          </button>
        </div>
        <div className="text-center text-light">
          <span>Don’t have an account? <Link to="/signup" className="text-light">Sign Up!</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
