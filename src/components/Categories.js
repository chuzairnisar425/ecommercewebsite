import React, { useState } from 'react';
import TopHeader from './Topheader';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Categories.css';
import arrival5 from '../Images/arrival5.png';
import arrival6 from '../Images/arrival6.png';
import arrival7 from '../Images/arrival7.png';
import summer1 from '../Images/summer1.png';
import summer2 from '../Images/summer2.png';
import shop1 from '../Images/shop1.png';
import shop2 from '../Images/shop2.png';
import shop3 from '../Images/shop3.png';
import shop4 from '../Images/shop4.png';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Categories = () => {
  const initialProducts = [
    { id: 1, img: arrival5, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 115.00, rating: 4.5, sales: 100, recommendation: 1 },
    { id: 2, img: arrival6, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 150.00, rating: 4.7, sales: 200, recommendation: 3 },
    { id: 3, img: arrival7, title: 'NEW ARRIVALS', description: 'Co-Ord Sets', price: 100.00, rating: 4.2, sales: 150, recommendation: 2 },
    // Add more products as needed
  ];
  

  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState('Recommended');

const handleSortChange = (event) => {
  const option = event.target.value;
  setSortOption(option);

  let sortedProducts = [...products];
  if (option === 'Price, high to low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (option === 'Price, low to high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (option === 'Newest') {
    // Assuming initialProducts is already sorted from newest to oldest
    sortedProducts = initialProducts;
  } else if (option === 'Top Rated') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (option === 'Best Sellers') {
    sortedProducts.sort((a, b) => b.sales - a.sales);
  } else if (option === 'Recommended') {
    sortedProducts.sort((a, b) => a.recommendation - b.recommendation);
  }
  setProducts(sortedProducts);
};


  return (
    <div className='bg-black'>
      <TopHeader />
      {/* Rest of your header and navigation components */}
    <Navbar/>
      {/* <div className="mx-2 mt-3">
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
</div> */}
        {/* Sort by dropdown */}
        <div className="row mt-2">
          <div className="col-md-6">
            <span className="text-white ml-4">Filter:</span>
            <select className="form-control d-inline-block w-auto ml-2">
              <option>Availability</option>
              {/* Add your filter options here */}
            </select>
          </div>
          <div className="col-md-6 text-right">
            <span className="text-white">Sort by:</span>
            <select
              className="form-control d-inline-block w-auto ml-2"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option>Recommended</option>
              <option>Best Sellers</option>
              <option>Latest Arrival</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
                <option>Top Rated</option>
              {/* Add more sort options if needed */}
            </select>
          </div>
        </div>

        {/* Display total products count */}
        <div className="row mt-2">
          <div className="col-md-12">
            <span className="text-white">{products.length} Products</span>
          </div>
        </div>

        {/* Display products */}
        <div className="container d-flex justify-content-center">
          <div className="d-flex flex-wrap justify-content-center">
            {products.map((product) => (
              <div className="card mb-4 position-relative mx-2" key={product.id}>
                <img className="card-img-top" src={product.img} alt="Item" />
                <span className="position-absolute top-0 end-0 heart-icon">
                  <i className="fas fa-heart"></i>
                </span>
                <div className="card-body bg-black text-light">
                  <h5 className="card-title d-inline">{product.title}</h5>
                    <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-danger">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container d-flex justify-content-center">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card mb-4 position-relative mx-2">
          <img className="card-img-top" src={arrival5} alt="Item" />
          <span className="position-absolute top-0 end-0 heart-icon">
            <i className="fas fa-heart"></i>
          </span>
          <div className="card-body bg-black text-light">
            <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
            <p className="card-text">Co-Ord Sets</p>
            <p className="card-text text-danger">$115.00</p>
          </div>
        </div>
  
        <div className="card mb-4 position-relative mx-2">
          <img className="card-img-top" src={arrival6} alt="Item" />
          <span className="position-absolute top-0 end-0 heart-icon">
            <i className="fas fa-heart"></i>
          </span>
          <div className="card-body bg-black text-light">
            <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
            <p className="card-text">Co-Ord Sets</p>
            <p className="card-text text-danger">$115.00</p>
          </div>
        </div>
   
        <div className="card mb-4 position-relative mx-2">
          <img className="card-img-top" src={arrival7} alt="Item" />
          <span className="position-absolute top-0 end-0 heart-icon">
            <i className="fas fa-heart"></i>
          </span>
          <div className="card-body bg-black text-light">
            <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
            <p className="card-text">Co-Ord Sets</p>
            <p className="card-text text-danger">$115.00</p>
          </div>
        </div>
        <div className="col-md-3">
      <div className="card mb-4 position-relative">
        <img className="card-img-top" src={arrival5} alt="Item" />
        <span className="position-absolute top-0 end-0 heart-icon">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-body bg-black text-light">
          <h5 className="card-title d-inline">NEW ARRIVALS</h5>
            <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
          <p className="card-text">Co-Ord Sets</p>
          <p className="card-text text-danger">$.115.00</p>
        </div>
      </div>
    </div> <div className="col-md-3">
      <div className="card mb-4 position-relative">
        <img className="card-img-top" src={arrival6} alt="Item" />
        <span className="position-absolute top-0 end-0 heart-icon">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-body bg-black text-light">
          <h5 className="card-title d-inline">NEW ARRIVALS</h5>
            <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
          <p className="card-text">Co-Ord Sets</p>
          <p className="card-text text-danger">$.115.00</p>
        </div>
      </div>
    </div> <div className="col-md-3">
      <div className="card mb-4 position-relative">
        <img className="card-img-top" src={arrival7} alt="Item" />
        <span className="position-absolute top-0 end-0 heart-icon">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-body bg-black text-light">
          <h5 className="card-title d-inline">NEW ARRIVALS</h5>
            <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
          <p className="card-text">Co-Ord Sets</p>
          <p className="card-text text-danger">$.115.00</p>
        </div>
      </div>
    </div> <div className="col-md-3">
      <div className="card mb-4 position-relative">
        <img className="card-img-top" src={arrival5} alt="Item" />
        <span className="position-absolute top-0 end-0 heart-icon">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-body bg-black text-light">
          <h5 className="card-title d-inline">NEW ARRIVALS</h5>
            <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
          <p className="card-text">Co-Ord Sets</p>
          <p className="card-text text-danger">$.115.00</p>
        </div>
      </div>
    </div>


    <div className="card mb-4 position-relative mx-2">
          <img className="card-img-top" src={arrival6} alt="Item" />
          <span className="position-absolute top-0 end-0 heart-icon">
            <i className="fas fa-heart"></i>
          </span>
          <div className="card-body bg-black text-light">
            <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
            <p className="card-text">Co-Ord Sets</p>
            <p className="card-text text-danger">$115.00</p>
          </div>
        </div>
        <div className="card mb-4 position-relative mx-2">
          <img className="card-img-top" src={arrival7} alt="Item" />
          <span className="position-absolute top-0 end-0 heart-icon">
            <i className="fas fa-heart"></i>
          </span>
          <div className="card-body bg-black text-light">
            <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
            <p className="card-text">Co-Ord Sets</p>
            <p className="card-text text-danger">$115.00</p>
          </div>
        </div>
        <div className="card mb-4 position-relative mx-2">
          <img className="card-img-top" src={arrival7} alt="Item" />
          <span className="position-absolute top-0 end-0 heart-icon">
            <i className="fas fa-heart"></i>
          </span>
          <div className="card-body bg-black text-light">
            <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>
            <p className="card-text">Co-Ord Sets</p>
            <p className="card-text text-danger">$115.00</p>
          </div>
        </div>
      </div>
    </div>




        {/* Featured Sections */}
 <h2 className='text-center'>View Summer Collection</h2>
        <div className="row featured-section mb-4 bg-black">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={summer1} alt="Featured" className="summer1" />
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
            <img src={summer2} alt="Featured" className="summer1" />
          </div>
        </div>



 {/* Shop Category */}
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

        <Newsletter />
        <Footer />
      </div>
  
  );
};

export default Categories;










