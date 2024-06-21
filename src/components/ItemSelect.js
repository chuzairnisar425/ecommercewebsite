import React, { useState } from 'react';
import TopHeader from './Topheader';
import { Link } from 'react-router-dom';
import '../App.css'
import './ItemSelect.css'
import arrival5 from '../Images/arrival5.png';
import arrival6 from '../Images/arrival6.png';
import arrival7 from '../Images/arrival7.png';
import arrival1 from '../Images/arrival1.png';
import shop1 from '../Images/shop1.png';
import shop2 from '../Images/shop2.png';
import shop3 from '../Images/shop3.png';
import shop4 from '../Images/shop4.png';
import bigImage from '../Images/bigImage.png'; 
import Newsletter from './Newsletter';
import Footer from './Footer';

const ItemSelect = () => {
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
                            <Link className="nav-link text-white" to="/"><i className="fa fa-shopping-bag"></i></Link>
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
                <div className="container-cards">
                    <div className="left-side">
                        {products.map((product) => (
                            <div className="card mb-4 position-relative" key={product.id}>
                                <img className="card-img-top" src={product.img} alt="Item" />
                                <span className="position-absolute top-0 end-0 heart-icon">
                                    <i className="fas fa-heart"></i>
                                </span>
                                <div className="card-body bg-black text-light">
                                    <h5 className="card-title d-inline">{product.title}</h5>
                                    <i className="fas fa-shopping-cart float-end"></i>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text text-danger">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>


                    <div className="container">
      {/* First Div with four small images */}
      <div className="small-images">
        <img src={arrival1} alt="Small 1" className="small-img" />
        <img src={arrival1} alt="Small 2" className="small-img" />
        <img src={arrival1} alt="Small 3" className="small-img" />
        <img src={arrival1} alt="Small 4" className="small-img" />
      </div>

      {/* Second Div with one larger image */}
      <div className="large-image">
        <img src={arrival1} alt="Large" className="large-img" />
      </div>

      {/* Third Div with content */}
      <div className="content">
        <h1>Content Title</h1>
        <p>This is some content that goes in the third div.</p>
      </div>
    </div>


                    </div>


<Newsletter/>
<Footer/>
        
    </div>
  )
}

export default ItemSelect