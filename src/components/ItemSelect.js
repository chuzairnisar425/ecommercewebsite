  import React, { useState } from 'react';
  import TopHeader from './Topheader';
  import { Link } from 'react-router-dom';
  import '../App.css'
  import './ItemSelect.css'
  import arrival5 from '../Images/arrival5.png';
  import arrival6 from '../Images/arrival6.png';
  import arrival7 from '../Images/arrival7.png';
  import arrival1 from '../Images/arrival1.png';
  import like1 from '../Images/like1.png';
  import like2 from '../Images/like2.png';
  import like3 from '../Images/like3.png';
  import like4 from '../Images/like4.png';

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
                            <Link  className="nav-link text-white mr-2" to="/EmptyCard"><i className="fa fa-shopping-bag"></i></Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="mx-2 mt-3">
                {/* <div className="row align-items-center border-bottom pb-2">
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
            


                    <div className="container1">
                    <div className="row ">
        {/* First Div with four small images */}
        <div className="col-md-2">
                      
      {/* First Div with four small images */}
      <div className="small-images">
        <img src={arrival1} alt="Small 1" className="small-img" />
        <img src={arrival1} alt="Small 2" className="small-img" />
        <img src={arrival1} alt="Small 3" className="small-img" />
        <img src={arrival1} alt="Small 4" className="small-img" />
      </div>
      </div>

      {/* Second Div with one larger image */}
      <div className="col-md-6 ">
      <div className="large-image ">
        <img src={arrival1} alt="Large" className="large-img" />
      </div>
      </div>

      {/* Third Div with content */}
      <div className="col-md-4">
      <div className="content">
                        <h1>105 REGULAR FIT JEANS</h1>
                        <div className="rating">
                            ★★★★★ (0 reviews)
                        </div>
                        <p className="price text-danger">$69.50 <span> or 4 installments of $17.38</span></p>
                        <div className="colors">
                            <span>Back To You - Medium Wash Stretch </span>
                            <br/>
                            <div className="color-swatch" style={{ backgroundColor: 'pink' }}></div>
                            <div className="color-swatch" style={{ backgroundColor: 'blue' }}></div>
                            <div className="color-swatch" style={{ backgroundColor: 'green' }}></div>
                            <div className="color-swatch" style={{ backgroundColor: 'red' }}></div>
                        </div>
                        <div className="sizes">
                            <span>Size: </span>
                            <br/>
                            <button className="size-button">S</button>
                            <button className="size-button">M</button>
                            <button className="size-button">L</button>
                        </div>
                        <div className="waist">
                            <span>Waist: </span>
                            <br/>
                            {['30', '31', '32', '33', '34', '35', '36', '38', '40'].map(size => (
                                <button className="waist-button" key={size}>{size}</button>
                            ))}
                        </div>
                        <div className="length">
                            <span>Length: </span>
                            <br/>
                            {['29', '30', '32', '34', '36'].map(length => (
                                <button className="length-button" key={length}>{length}</button>
                            ))}
                        </div>
                        <div className="quantity">
                            <span>Select Quantity: </span>
                            <br/>
                            <button className="quantity-button">-</button>
                            <span className="quantity-number">1</span>
                            <button className="quantity-button">+</button>
                        </div>
                        <div className="pickup-ship">
                            <button className="pickup-button">Pickup In-Store 
                            <br/>
                                <span>Select size to see if item is in 
                                stock </span>
                            </button>
                            <button className="ship-button">Ship
                            <br/>
                                <span>Select size to see if item is in 
                                stock </span>
                            </button>
                        </div>
                        <div className="actions">
                            <p>Select your store</p>
                     
                            <button className="add-to-cart w-100 mb-3">ADD TO CART</button>
                        <br/>
                            <button className="buy-now w-100">BUY IT NOW</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
  


                <div className="container-fluid">
    <div className="row">
        {/* <!-- First Column: Product Description -->  */}
        
        <div className="col-md-6">
            <div className="product-description">
                <h1>Lorem Ipsum</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore  dolore Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore  dolore Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore  dolore</p>
                <button className="shop-now">SHOP NOW</button>
            </div>
        </div>
        {/* <!-- Second Column: Product Details --> */}
        <div className="col-md-6">
            <div className="product-details">
                <h2>How it Fits:</h2>
                <p> <strong>Leg Opening:</strong> Straight</p>
                <div className="fit-chart">
                    <span>Super Skinny</span>
                    <span>Wide Leg</span>
                </div>
                <p> <strong>Stretch:</strong> Low Stretch: </p>
                <div className="stretch-chart">
                    <span>No Stretch</span>
                    <span>High Stretch</span>
                </div>
                <ul >
                    <li>Regular Through The Thigh</li>
                    <li>Sits at your waist</li>
                    <li>Straight leg</li>
                    <li>Front rise: 11 1/4", Knee: 18", Leg opening 16"</li>
                    <li>Measurements based on size 32</li>
                    <li>Model is 6'3" with a 32" waist. They're wearing a size 32x32.</li>
                </ul>
                <h2>Composition & Care</h2>
                <ul>
                    <li>99% cotton, 1% elastane</li>
                    <li>Denim</li>
                    <li>Stretch</li>
                    <li>Zip fly</li>
                    <li>5-pocket styling</li>
                    <li>Recycled cotton</li>
                    <li>Machine wash cold, normal cycle. Wash inside out with like colors, do not bleach, tumble dry medium, warm iron, dry clean possible.</li>
                    <li>Imported</li>
                </ul>
            </div>
        </div>
    </div>
</div>



<div className="container-cards">
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

<h2 className='text-center'>YOU MAY ALSO LIKE</h2>
<div className='container-cards'>

<br/>

<div className="col-md-3">
  <div className="card mb-4 position-relative">
    <img className="card-img-top" src={like1} alt="Item" />
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
    <img className="card-img-top" src={like2} alt="Item" />
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
    <img className="card-img-top" src={like3} alt="Item" />
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
    <img className="card-img-top" src={like4} alt="Item" />
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


                    </div>


<Newsletter/>
<Footer/>
        
    </div>
  )
}

export default ItemSelect