import React, { useState } from 'react';
import TopHeader from './Topheader';
import { Link } from 'react-router-dom';
import '../App.css'
import './EmptyCard.css'
import arrival5 from '../Images/arrival5.png';
import arrival6 from '../Images/arrival6.png';
import arrival7 from '../Images/arrival7.png';
import arrival1 from '../Images/arrival1.png';

import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Newsletter from './Newsletter';
import Footer from './Footer';
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

// toggle functionality 
    const [isOpenShipping, setIsOpenShipping] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);

  const toggleShipping = () => {
    setIsOpenShipping(!isOpenShipping);
  };

  const toggleHelp = () => {
    setIsOpenHelp(!isOpenHelp);
  };


  return (
    <div className='bg-black'>
    <TopHeader />
    <div className="top-bar bg-black text-white py-1">
        <div className="container">
            <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/categories" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All Categories
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="categoriesDropdown"></div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="featuredCollectionDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Featured Collection
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sale">
                                        Sale
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <Link to="/login" className="btn btn-outline-secondary text-light mr-5">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <form className="d-flex align-items-center position-relative">
                        <input
                            type="text"
                            className="form-control formBgColor pr-5"
                            placeholder="What are you looking for?"
                        />
                        <button type="submit" className="btn btn-primary position-absolute search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <Link className="nav-link text-white mx-2" to="/"><i className="fa fa-heart"></i></Link>
                    <Link  className="nav-link text-white mr-2" to="/EmptyCard"><i className="fa fa-shopping-bag"></i></Link>
                    </div>
            </div>
        </div>
    </div>
    <div className="mx-2 mt-3">
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
        </div>



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
      <hr className="divider"/>
          <h2 className='mt-4'>Your cart is empty!!</h2>
          <button className="btn btn-light my-3">Continue Shopping</button>
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
              <button className="btn btn-light mr-3 w-50">Payment Method</button>
              <button className="btn btn-light w-50">Checkout</button>
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
    </div>
    
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