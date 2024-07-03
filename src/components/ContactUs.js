import React, { useState } from 'react';
import './ContactUs.css'; // Make sure to create a corresponding CSS file for styling
import TopHeader from './Topheader';
import Navbar from './Navbar';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
   // Reset form fields
   setFormData({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
};

  return (
<div>
    <TopHeader/>
   <Navbar/>
      <div className="contact-us mt-5">
     
      <h1 className="main-heading">Get In Touch</h1>
      <h2 className="sub-heading">Send us an email!!</h2>
      <p className="description">Ask us anything! We are here to help.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
