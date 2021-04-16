import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h1 className="text-white"><i className={icon}></i> {title}</h1>

        <ul className="navbar-nav flex-row">
          <li className="mr-4"><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'GitHub Lookup',
  icon: 'fa fa-search'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
