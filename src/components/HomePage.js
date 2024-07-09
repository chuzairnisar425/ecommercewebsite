import React, { useState, useEffect } from "react";
import './HomePage.css';
import { Link } from 'react-router-dom';

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
import Footer from './Footer';
import TopHeader from './Topheader';
import Header from './Header';

function HomePage() {

  // State to handle the current image index for each card
  const [currentImages, setCurrentImages] = useState({
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
  });

  // State to store intervals for each card
  const [intervals, setIntervals] = useState({
    card1: null,
    card2: null,
    card3: null,
    card4: null,
  });

  // Images arrays for each card
  const imagesCard1 = [arrival1, arrival2, arrival3];
  const imagesCard2 = [arrival4, arrival5, arrival6];
  const imagesCard3 = [arrival7, arrival8, arrival9];
  const imagesCard4 = [arrival10, arrival11,arrival2];

  const handleMouseEnterr = (card, images) => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => ({
        ...prev,
        [card]: (prev[card] + 1) % images.length, // Cycle through images
      }));
    }, 1000); // Change image every 1 second

    setIntervals((prev) => ({
      ...prev,
      [card]: interval,
    }));
  };

  const handleMouseLeavee = (card) => {
    clearInterval(intervals[card]);
    setCurrentImages((prev) => ({
      ...prev,
      [card]: 0, // Reset to the first image
    }));
  };

  useEffect(() => {
    // Cleanup intervals on component unmount
    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [intervals]);



 



  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Update search term state
  
    if (!searchTerm.trim()) {
      setError('Please enter a valid search term.'); // Display error if search term is empty
      setSearchResults([]); // Clear search results
    } else {
      // Simulating search results with a sample data array
      const sampleData = [
        { image: arrival1, heading: 'New Arrivals' },
        { image: arrival2, heading: 'New Arrivals' },
        { image: arrival3, heading: 'New Arrivals' },
        { image: arrival4, heading: 'New Arrivals' },
        { image: arrival5, heading: 'New Arrivals' },
        { image: arrival6, heading: 'New Arrivals' },
        { image: arrival7, heading: 'New Arrivals' },
        { image: arrival8, heading: 'New Arrivals' },
        { image: arrival9, heading: 'New Arrivals' },
        { image: arrival10, heading: 'New Arrivals' },
        { image: arrival11, heading: 'New Arrivals' },
        { image: summer1, heading: 'Summer Collection' },
        { image: summer2, heading: 'Summer Collection' },
        { image: seller1, heading: 'Best Sellers' },
        { image: seller2, heading: 'Best Sellers' },
        { image: shop1, heading: 'Shop by Category' },
        { image: shop2, heading: 'Shop by Category' },
        { image: shop3, heading: 'Shop by Category' },
        { image: shop4, heading: 'Shop by Category' },
        { image: story1, heading: 'Happy Stories' },
        { image: story2, heading: 'Happy Stories' },
        { image: story3, heading: 'Happy Stories' }
      ];
  
      const results = sampleData.filter(item => item.heading.toLowerCase().includes(searchTerm.toLowerCase())); // Filtering sample data
      setSearchResults(results); // Update search results
      setError(''); // Clear error
    }
  };
  

  // Log search results to console
  console.log('Search Term:', searchTerm);
  console.log('Search Results:', searchResults);

  return (
    <div className="HomePage">
      <TopHeader />
      <Header onSearch={handleSearch} />

      <div className="">
        {/* Hero Section */}
        <div className="row hero-section mb-4">
  <div className="col-md-6 d-flex align-items-center justify-content-center">
    <div className='main-headings text-center'>
      <h1 className="heroheading text-start">
        <span className='lets-headings'>LET'S</span> EXPLORE 
        <span className='bg-red text-light'> UNIQUE</span> CLOTHES.
      </h1>
      <p>Live for Influential and Innovative fashion!</p>
    <Link to='/categories'>  <button className="btn btn-danger">Shop Now</button></Link>
    </div>
  </div>
  <div className="col-md-6 d-flex align-items-center">
    <img src={heroImage} alt="Hero" className="img-fluid w-100 h-100" />
  </div>
</div>


        {/* Display Error */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Display Search Results */}
        {searchTerm && searchResults.length === 0 && (
          <div className="alert alert-warning">No results found for "{searchTerm}". Please try a different search term.</div>
        )}

       
        <div className="row new-arrivals mb-4">
        {searchResults.length > 0 ? (
  // Display search results in browser
  searchResults.map((item, index) => (
    <div key={index} className="col-md-3">
      <div className="card mb-4 position-relative">
        <img className="card-img-top" src={item.image} alt="Item" />
        <span className="position-absolute top-0 end-0 heart-icon">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-body bg-black text-light">
          <h5 className="card-title d-inline">{item.heading}</h5>
          <i className="fas fa-shopping-cart float-end"></i>
          <p className="card-text">Co-Ord Sets</p>
          <p className="card-text text-danger">$.115.00</p>
        </div>
      </div>
    </div>
  ))
) : (
  // Display default new arrivals
  <>
      {/* New Arrivals */}
          <h2 className="text-center">New Arrivals</h2>
        <section className="newArrival d-flex flex-wrap justify-content-center align-items-center">
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card1', imagesCard1)}
            onMouseLeave={() => handleMouseLeavee('card1')}
          >
            <div className="image-container">
              {imagesCard1.map((img, index) => (
                <Link to='itemselect'>
                <img
                  key={index}
                  className={currentImages.card1 === index ? 'show' : ''}
                  src={img}
                  alt="Item"
                />
                </Link>
              ))}
            </div>
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
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card2', imagesCard2)}
            onMouseLeave={() => handleMouseLeavee('card2')}
          >
            <div className="image-container">
              {imagesCard2.map((img, index) => (
                <Link to='itemselect'>
                <img
                  key={index}
                  className={currentImages.card2 === index ? 'show' : ''}
                  src={img}
                  alt="Item"
                />
                </Link>
              ))}
            </div>
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
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card3', imagesCard3)}
            onMouseLeave={() => handleMouseLeavee('card3')}
          >
            <div className="image-container">
              {imagesCard3.map((img, index) => (
                 <Link to='itemselect'>
                 <img
                   key={index}
                   className={currentImages.card3 === index ? 'show' : ''}
                   src={img}
                   alt="Item"
                 />
                 </Link>
              ))}
            </div>
            <span className="position-absolute top-0 end-0 heart-icon">
              <i className="fas fa-heart"></i>
            </span>
            <div className="card-body bg-black text-light">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>              <p className="card-text">Co-Ord Sets</p>
              <p className="card-text text-danger">$.115.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card4', imagesCard4)}
            onMouseLeave={() => handleMouseLeavee('card4')}
          >
            <div className="image-container">
              {imagesCard4.map((img, index) => (
                 <Link to='itemselect'>
                 <img
                   key={index}
                   className={currentImages.card4 === index ? 'show' : ''}
                   src={img}
                   alt="Item"
                 />
                 </Link>
              ))}
            </div>
            <span className="position-absolute top-0 end-0 heart-icon">
              <i className="fas fa-heart"></i>
            </span>
            <div className="card-body bg-black text-light">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>              <p className="card-text">Co-Ord Sets</p>
              <p className="card-text text-danger">$.115.00</p>
            </div>
          </div>
        </div>
        {/* Repeat for other default items */}
        </section>
    </>
)}
</div>



        {/* Featured Sections */}
        <h2 className='text-center'>View Summer Collection</h2>
        <div className="row featured-section mb-4 bg-black">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={summer1} alt="Featured" className="summer1" />
          </div>
          <div className="col-md-6  d-flex align-items-center">
            <div className="text-container bg-black">
              <h3>Lorem Ipsumad</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
          <Link to='viewallcategories'><button className="btn btn-danger">Shop Now</button></Link>  
            </div>
          </div>
        </div>

        <div className="row featured-section mb-4">

          <div className="col-md-6 d-flex align-items-center">
            <div className="text-container">
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore. Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
              <Link to='viewallcategories'><button className="btn btn-danger">Shop Now</button></Link>  
              </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={summer2} alt="Featured" className="summer1" />
          </div>
        </div>

        {/* Best Sellers */}
        <h2 className='text-center '>Featured Best Sellers</h2>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6 shop-item">
              <img src={seller1} alt="Shop Men" className="img-fluid" />
        <Link to='categories'>     <button className="btn btn-danger shop-btn">Shop Men</button></Link> 
            </div>
            <div className="col-md-6 shop-item">
              <img src={seller2} alt="Shop Women" className="img-fluid" />
              <Link to='categories'>     <button className="btn btn-danger shop-btn">Shop Men</button></Link> 
              </div>
          </div>
        </div>


        {/* new arrival  */}

        <div className=" shop-section d-flex flex-column justify-content-center align-items-center">
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
                <Link to='categories'>     <button className="btn btn-danger btn-sm">SHOP NOW</button></Link> 
                </div>
            </div>
            <div className="col-md-4 shop-item mb-4">
              <img src={arrival6} alt="New Arrivals" className="img-fluid" />
              <div className="overlay d-flex align-items-center">
                <h3 className="mr-3 text-light mb-0">NEW ARRIVALS</h3>
                <Link to='categories'>     <button className="btn btn-danger btn-sm">SHOP NOW</button></Link> 
                </div>
            </div>
            <div className="col-md-4 shop-item mb-4">
              <img src={arrival7} alt="New Arrivals" className="img-fluid" />
              <div className="overlay d-flex align-items-center">
                <h3 className="mr-3 text-light mb-0">NEW ARRIVALS</h3>
        <Link to='categories'>     <button className="btn btn-danger btn-sm">SHOP NOW</button></Link> 
              </div>
            </div>
          </div>
        </div>

        {/* Favourite Collection */}
        <div className="grey-section  py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-left">
                <h2 className="mb-4">YOUR FAVORITE COLLECTION</h2>
                <p className="mb-4">BE THE FASHION TREND!!</p>
                <Link to='/categories'>  <button className="btn btn-danger">Shop Now</button></Link>

              
              </div>
              <div className="col-md-6 text-center">
                <img src={favourite} alt="Fashion Trend" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* BE THE FASHION TREND!! */}
        <>
      {/* New Arrivals */}
          <h2 className="text-center">BE THE FASHION TREND!!</h2>
        <section className="newArrival d-flex flex-wrap justify-content-center align-items-center">
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card1', imagesCard1)}
            onMouseLeave={() => handleMouseLeavee('card1')}
          >
            <div className="image-container">
              {imagesCard1.map((img, index) => (
                <Link to='itemselect'>
                <img
                  key={index}
                  className={currentImages.card1 === index ? 'show' : ''}
                  src={img}
                  alt="Item"
                />
                </Link>
              ))}
            </div>
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
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card2', imagesCard2)}
            onMouseLeave={() => handleMouseLeavee('card2')}
          >
            <div className="image-container">
              {imagesCard2.map((img, index) => (
                <Link to='itemselect'>
                <img
                  key={index}
                  className={currentImages.card2 === index ? 'show' : ''}
                  src={img}
                  alt="Item"
                />
                </Link>
              ))}
            </div>
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
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card3', imagesCard3)}
            onMouseLeave={() => handleMouseLeavee('card3')}
          >
            <div className="image-container">
              {imagesCard3.map((img, index) => (
                 <Link to='itemselect'>
                 <img
                   key={index}
                   className={currentImages.card3 === index ? 'show' : ''}
                   src={img}
                   alt="Item"
                 />
                 </Link>
              ))}
            </div>
            <span className="position-absolute top-0 end-0 heart-icon">
              <i className="fas fa-heart"></i>
            </span>
            <div className="card-body bg-black text-light">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>              <p className="card-text">Co-Ord Sets</p>
              <p className="card-text text-danger">$.115.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mb-4 position-relative"
            onMouseEnter={() => handleMouseEnterr('card4', imagesCard4)}
            onMouseLeave={() => handleMouseLeavee('card4')}
          >
            <div className="image-container">
              {imagesCard4.map((img, index) => (
                 <Link to='itemselect'>
                 <img
                   key={index}
                   className={currentImages.card4 === index ? 'show' : ''}
                   src={img}
                   alt="Item"
                 />
                 </Link>
              ))}
            </div>
            <span className="position-absolute top-0 end-0 heart-icon">
              <i className="fas fa-heart"></i>
            </span>
            <div className="card-body bg-black text-light">
              <h5 className="card-title d-inline">NEW ARRIVALS</h5>
              <Link to='/additem' >
              <i className="fas fa-shopping-cart float-end text-white"></i></Link>              <p className="card-text">Co-Ord Sets</p>
              <p className="card-text text-danger">$.115.00</p>
            </div>
          </div>
        </div>
        {/* Repeat for other default items */}
        </section>
    </>

        {/* // shopByCategories */}
<section id="shopByCategories" className="shopByCategories">
  <h2 className='text-center '>SHOP BY CATEGORY</h2>
  <div className="row">
    <div className="col-md-3 mb-4 position-relative">
      <div className="card">
        <img src={shop1} className="card-img-top" alt="Image 1" />
        <div className="overlay d-flex justify-content-center align-items-end ">
     <Link to='/viewallcategories'>     <button className="btn btn-danger mb-4">WINTER WEAR</button></Link>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4 position-relative">
      <div className="card">
        <img src={shop2} className="card-img-top" alt="Image 2" />
        <div className="overlay d-flex justify-content-center align-items-end">
        <Link to='/viewallcategories'>     <button className="btn btn-danger mb-4">WINTER WEAR</button></Link>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4 position-relative">
      <div className="card">
        <img src={shop3} className="card-img-top" alt="Image 3" />
        <div className="overlay d-flex justify-content-center align-items-end">
        <Link to='/viewallcategories'>     <button className="btn btn-danger mb-4">WINTER WEAR</button></Link>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4 position-relative">
      <div className="card">
        <img src={shop4} className="card-img-top" alt="Image 4" />
        <div className="overlay d-flex justify-content-center align-items-end">
        <Link to='/viewallcategories'>     <button className="btn btn-danger mb-4">WINTER WEAR</button></Link>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Happy Stories */}
        <section className="blogStories" id="blogStories">

    
        <h2 className='text-center'>HAPPY STORIES!!</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={story1} className="card-img-top  img-fluid" alt="Image 2" style={{ maxHeight: '700px' }} />
              <div className="card-body bg-black">
                <p className="card-text text-light">Your Perfect Story with Us!!</p>
                <button className="btn btn-outline-light  bg-black">READ MORE</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={story2} className="card-img-top img-fluid" alt="Image 2" style={{ maxHeight: '700px' }} />
              <div className="card-body bg-black">
                <p className="card-text text-light">Your Perfect Story with Us!!</p>
                <button className="btn btn-outline-light bg-black">READ MORE</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={story3} className="card-img-top  img-fluid" alt="Image 2" style={{ maxHeight: '700px' }} />
              <div className="card-body bg-black">
                <p className="card-text text-light">Your Perfect Story with Us!!</p>
                <button className="btn btn-outline-light  bg-black">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Newsletter */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
