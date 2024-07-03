import React from 'react';
import './About.css'; // Import your CSS file for styling if needed
import arrival1 from '../Images/arrival1.png';
import TopHeader from './Topheader';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div>
<TopHeader/>

<Navbar/>
    <div className="main-container">
      <div className="left-content">
        <img src={arrival1 }alt="About Image" className="about-image" />
      </div>
      <div className="right-content">
        <h2 className="text-center">Lsahdahdihiodjioahfioadhfhaofaivno fhadofhios
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor at tellus auctor ullamcorper vel non metus. Fusce efficitur faucibus purus non vestibulum. Mauris vel volutpat libero, at maximus lectus. Integer hendrerit purus quis fermentum rutrum. Proin rutrum, nisl non convallis placerat, justo nisl commodo libero, et semper ligula est at velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor at tellus auctor ullamcorper vel non metus. Fusce efficitur faucibus purus non vestibulum. Mauris vel volutpat libero, at maximus lectus. Integer hendrerit purus quis fermentum rutrum. Proin rutrum, nisl non convallis placerat, justo nisl commodo libero, et semper ligula est at velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor at tellus auctor ullamcorper vel non metus. Fusce efficitur faucibus purus non vestibulum. Mauris vel volutpat libero, at maximus lectus. Integer hendrerit purus quis fermentum rutrum. Proin rutrum, nisl non convallis placerat, justo nisl commodo libero, et semper ligula est at velit.
        </p>
      </div>
      
      </div>
      <Footer/>
    </div>
  );
};

export default About;
