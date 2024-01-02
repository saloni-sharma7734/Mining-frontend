import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsChecked: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here using formData
    console.log('Form submitted:', formData);

    // For demonstration purposes, set isSubmitted to true
    setIsSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign up to access exclusive features and services.</h2>
      <div className="card p-4" style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#333', color: '#ecf0f1',height:'500px' }}>
        {!isSubmitted ? (
          <div>
            <p className="text-center"><h2>Signup</h2></p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  placeholder='Enter Your Username'
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  placeholder='Enter Your password'
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  name="termsChecked"
                  checked={formData.termsChecked}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
            <hr className="my-4" />
            <p className="text-center">
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-center">Thank you for signing up! You are now a member of our Mining Company.</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
