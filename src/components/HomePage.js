import React from 'react';
import './HomePage.css';
// import images 
import heroImage from '../Images/heroimage.png';
import arrival1 from '../Images/arrival1.png';
import arrival2 from '../Images/arrival2.png';
import arrival3 from '../Images/arrival3.png';
import arrival4 from '../Images/arrival4.png';
import arrival5 from '../Images/arrival5.png';
import arrival6 from '../Images/arrival6.png';
import arrival7 from '../Images/arrival7.png';
import arrival8 from '../Images/arrival8.png';
import arrival9 from '../Images/arrival9.png';
import arrival10 from '../Images/arrival10.png';
import arrival11 from '../Images/arrival11.png';
import summer1 from '../Images/summer1.png';
import summer2 from '../Images/summer2.png';

import seller1 from '../Images/seller1.png';
import seller2 from '../Images/seller2.png';
import shop1 from '../Images/shop1.png';
import shop2 from '../Images/shop2.png';
import shop3 from '../Images/shop3.png';
import shop4 from '../Images/shop4.png';
import story1 from '../Images/story1.png';
import story2 from '../Images/story2.png';
import story3 from '../Images/story3.png';
import favourite from '../Images/favourite.png';
import Newsletter from './Newsletter';


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
          <div className="col-md-3">
          <div className="card mb-4 position-relative">
          <img className="card-img-top" src={arrival1} alt="Item"/>
          <span className="position-absolute top-0 end-0">
            <i className="fas fa-heart text-danger"></i>
          </span>
              <div className="card-body">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <i className="fas fa-shopping-cart float-end"></i>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card mb-4 position-relative">
          <img className="card-img-top" src={arrival2} alt="Item"/>
          <span className="position-absolute top-0 end-0">
            <i className="fas fa-heart text-danger"></i>
          </span>
              <div className="card-body">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <i className="fas fa-shopping-cart float-end"></i>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card mb-4 position-relative">
          <img className="card-img-top" src={arrival3} alt="Item"/>
          <span className="position-absolute top-0 end-0">
            <i className="fas fa-heart text-danger"></i>
          </span>
              <div className="card-body">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <i className="fas fa-shopping-cart float-end"></i>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card mb-4 position-relative">
          <img className="card-img-top" src={arrival4} alt="Item"/>
          <span className="position-absolute top-0 end-0">
            <i className="fas fa-heart text-danger"></i>
          </span>
              <div className="card-body">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <i className="fas fa-shopping-cart float-end"></i>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Sections */}
        <div className="row featured-section mb-4">
  <div className="col-md-6 d-flex align-items-center justify-content-center">
    <img src={summer1} alt="Featured" className="summer1"/>
  </div>
  <div className="col-md-6 d-flex align-items-center">
    <div className="text-container">
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
      <button className="btn btn-danger">Shop Now</button>
    </div>
  </div>
</div>

<div className="row featured-section mb-4">
 
  <div className="col-md-6 d-flex align-items-center">
    <div className="text-container">
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
      <button className="btn btn-danger">Shop Now</button>
    </div>
  </div>
  <div className="col-md-6 d-flex align-items-center justify-content-center">
    <img src={summer2} alt="Featured" className="summer1"/>
  </div>
</div>
        
        {/* Best Sellers */}
        <h2 className='text-center '>Featured Best Sellers</h2>
        <div className="container-fluid ">
      <div className="row">
        <div className="col-md-6 shop-item">
          <img src={seller1} alt="Shop Men" className="img-fluid" />
          <button className="btn btn-danger shop-btn">Shop Men</button>
        </div>
        <div className="col-md-6 shop-item">
          <img src={seller2} alt="Shop Women" className="img-fluid" />
          <button className="btn btn-danger shop-btn">Shop Women</button>
        </div>
      </div>
    </div>


{/* new arrival  */}

<div className="container-fluid shop-section d-flex flex-column justify-content-center align-items-center">
      <div className="row mb-4 text-center">
        <div className="col-12">
          <h2 className="text-light">There are several classic styles to pick from, including wrap dresses, jumpsuits, and loose shirting.</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 shop-item mb-4">
          <img src={arrival5} alt="New Arrivals" className="img-fluid" />
         
          <div className="overlay d-flex align-items-center">
            <h3 className="mr-3 text-light mb-0">NEW ARRIVALS</h3>
            <button className="btn btn-danger btn-sm">SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-4 shop-item mb-4">
          <img src={arrival6} alt="New Arrivals" className="img-fluid" />
          <div className="overlay d-flex align-items-center">
            <h3 className="mr-3 text-light mb-0">NEW ARRIVALS</h3>
            <button className="btn btn-danger btn-sm">SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-4 shop-item mb-4">
          <img src={arrival7} alt="New Arrivals" className="img-fluid" />
          <div className="overlay d-flex align-items-center">
            <h3 className="mr-3 text-light mb-0">NEW ARRIVALS</h3>
            <button className="btn btn-danger btn-sm">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>


    {/* favourite collection  */}
    <div className="grey-section  py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-left">
            <h2 className="mb-4">YOUR FAVORITE COLLECTION</h2>
            <p className="mb-4">BE THE FASHION TREND!!</p>
            <a href="#" className="btn btn-danger">Shop Now</a>
          </div>
          <div className="col-md-6 text-center">
            <img src={favourite} alt="Fashion Trend" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
        
        {/* BE THE FASHION TREND!! */}
        <h2 className='text-center mt-4 mb-4'>BE THE FASHION TREND!!</h2>
        <div className="row new-arrivals mb-4">
          {/* Repeat this block for each item */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={arrival8} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={arrival9} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={ arrival10} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img className="card-img-top" src={arrival11} alt="Item"/>
              <div className="card-body">
                <h5 className="card-title">NEW ARRIVALS</h5>
                <p className="card-text">Co-Ord Sets</p>
                <p className="card-text text-danger">$.115.00</p>
              </div>
            </div>
          </div>
        </div>
 {/* Shop Catergory */}
 <h2 className='text-center '>SHOP BY CATEGORY</h2>
 <div className="row">
      <div className="col-md-3 mb-4 position-relative">
        <div className="card">
          <img src={shop1} className="card-img-top" alt="Image 1" />
          <div className="overlay d-flex justify-content-center align-items-end ">
            <button className="btn btn-danger mb-4">WINTER WEAR</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4 position-relative">
        <div className="card">
          <img src={shop2} className="card-img-top" alt="Image 2" />
          <div className="overlay d-flex justify-content-center align-items-end">
            <button className="btn btn-danger mb-4">WINTER WEAR</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4 position-relative">
        <div className="card">
          <img src={shop3} className="card-img-top" alt="Image 3" />
          <div className="overlay d-flex justify-content-center align-items-end">
            <button className="btn btn-danger mb-4">WINTER WEAR</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4 position-relative">
        <div className="card">
          <img src={shop4} className="card-img-top" alt="Image 4" />
          <div className="overlay d-flex justify-content-center align-items-end">
            <button className="btn btn-danger mb-4">WINTER WEAR</button>
          </div>
        </div>
      </div>
    </div>

    {/* HAPPY STORIES!!? */}

    <h2 className='text-center'>HAPPY STORIES!!</h2>
    <div className="row">
      {/* Card 1 */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={story1} className="card-img-top  img-fluid" alt="Image 2" style={{ maxHeight: '700px' }}/>
          <div className="card-body bg-dark">
            <p className="card-text text-light">Your Perfect Story with Us!!</p>
            <button className="btn btn-outline-light  bg-dark">READ MORE</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={story2} className="card-img-top img-fluid" alt="Image 2" style={{ maxHeight: '700px' }}/>
          <div className="card-body bg-dark">
            <p className="card-text text-light">Your Perfect Story with Us!!</p>
            <button className="btn btn-outline-light bg-dark">READ MORE</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={story3} className="card-img-top  img-fluid" alt="Image 2" style={{ maxHeight: '700px' }}/>
          <div className="card-body bg-dark">
            <p className="card-text text-light">Your Perfect Story with Us!!</p>
            <button className="btn btn-outline-light  bg-dark">READ MORE</button>
          </div>
        </div>
      </div>
    </div>

        {/* Newsletter */}
<Newsletter/>
       
      </div>
    </div>
  );
}

export default HomePage;
