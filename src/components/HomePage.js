import React from 'react';
import './HomePage.css';
// import images 
import heroImage from '../Images/heroimage.png';
import arrival1 from '../Images/arrival1.png';
import arrival2 from '../Images/arrival2.png';
import arrival3 from '../Images/arrival3.png';
import arrival4 from '../Images/arrival4.png';
import summer1 from '../Images/summer1.png';


function HomePage() {
  return (
    
    <div className="HomePage">
   
      {/* Main Content */}
      <div className="mx-5 mt-4 ">
        {/* Hero Section */}
        <div className="row hero-section mb-4">
          <div className="col-md-6 d-flex align-items-center">
            <div className='main-headings'>
              <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1>

              <p className='  '>Live for Influential and Innovative fashion!</p>
              <button className="btn btn-danger">Shop Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={heroImage} alt="Hero" className="img-fluid"/>
          </div>
        </div>
        
        {/* New Arrivals */}
        <h2 className='text-center'>New Arrivals</h2>
        <div className="row new-arrivals mb-4">
          {/* Repeat this block for each item */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={arrival1} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={arrival2} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={ arrival3} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={arrival4} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Sections */}
        <div className="row featured-section mb-4">
          <div className="col-md-6">
            <img src={summer1} alt="Featured" className="img-fluid"/>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore  dolore  Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore  dolore Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore  dolore </p>
              <button className="btn btn-danger">Shop Now</button>
            </div>
          </div>
        </div>
        
        {/* Best Sellers */}
        <h2>Featured Best Sellers</h2>
        <div className="row best-sellers mb-4">
          {/* Repeat this block for each item */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src="bestseller-image-url" alt="Bestseller"/>
              <div className="card-body">
                <h5 className="card-title">Item Name</h5>
                <p className="card-text">$Price</p>
                <button className="btn btn-danger">View</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Happy Stories */}
        <h2>Happy Stories!!</h2>
        <div className="row happy-stories mb-4">
          {/* Repeat this block for each story */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img className="card-img-top" src="happy-story-image-url" alt="Happy Story"/>
              <div className="card-body">
                <p className="card-text">Customer review or story</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="newsletter bg-dark text-white text-center py-4">
          <div className="container">
            <h4>Join Our Newsletters</h4>
            <form className="form-inline justify-content-center">
              <input type="email" className="form-control mr-2" placeholder="Your Email" />
              <button className="btn btn-danger" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
