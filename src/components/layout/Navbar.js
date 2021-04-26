import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h1 className="text-white"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt={title} style={{ width: '40px' }} /> <span>{title}</span></h1>
        
        <ul className="navbar-nav flex-row">
          <li className="mr-4"><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'GH Lookup'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;