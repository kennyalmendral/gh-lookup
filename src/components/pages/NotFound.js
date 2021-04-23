import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div id="page-not-found" className="container py-5 d-flex justify-content-center">
      <div className="card shadow-sm">
        <div className="card-header">
          <h3 className="mb-0">Page not found</h3>
        </div>

        <div className="card-body">
          <p className="m-0">The page you are looking for does not exist. <Link to="/">Go back to home</Link></p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;