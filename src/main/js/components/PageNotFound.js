// components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <main className="error-container">
    <img
      className="error-image"
      alt="Error Page Illustration"
      src="https://dh2wg6yal4wru.cloudfront.net/notfound.png"
    />
    <h1 className="error-heading">404 We're sorry!</h1>
    <p className="error-message">We couldn't find what you're looking for</p>
    <p className="back-to-home">
      <Link to="/">» Go back to the main page</Link>
    </p>
  </main>
);

export default PageNotFound;
