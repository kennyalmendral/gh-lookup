import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-dark">
      <h1 className="text-white"><i className={icon}></i> {title}</h1>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'React GitHub Finder',
  icon: 'fa fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
