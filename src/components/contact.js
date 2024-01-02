import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import contact from '../images/dump-truck-pit-mine.jpg'
import Header from './header';
import Footer from './footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Contact form submitted:', formData);

    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Header />

      <div
        className="container mt-5"
        style={{
          background: `url(${contact})`,
          backgroundPosition: 'center',
          position: 'relative',
          // paddingBottom: 'px', 
          marginBottom: '90px',
        }}
      >
        <h2 className="text-center my-4" style={{ color: '#ecf0f1' }}>
          Contact Us
        </h2>
        <div
          className="card p-4"
          style={{
            backgroundColor: 'rgba(51, 51, 51, 0.8)',
            color: '#ecf0f1',
            maxWidth: '400px',
            height:'500px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            marginBottom : '90px',
          }}
        >
          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
              placeholder='Enter Your Name'
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
              placeholder='Enter Your Email Id'
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder='Your Message Here'
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      
      <Footer />
    </>
  );
};

export default ContactForm;
