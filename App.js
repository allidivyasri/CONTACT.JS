// src/pages/Homepage.jsx
import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Homepage</h1>
      <p>This is some homepage content.</p>

      <div className="contact-section">
        <h2>Quick Contact</h2>
        <form className="contact-form">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Message:</label>
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;