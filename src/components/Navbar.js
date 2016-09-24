import React, { PropTypes } from 'react';

const Navbar = ({ signout }) => (
  <div>
    <button
      onClick={signout}
    >Sign Out</button>
    <input
    placeholder="Find Patients"></input>
  </div>
);

Navbar.propTypes = {
  signout: PropTypes.func.isRequired,
};

export default Navbar;
