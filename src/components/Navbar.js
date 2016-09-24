import React, { PropTypes } from 'react';

const Navbar = ({ search }) => (
  <div>
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: '#43BFC7'}}>
        
        <img className="logo" src={require('../assets/Logo.png')} />
    
        <input
          className="search-input right"
          placeholder="Find patients"
          onChange={search}
        />
        
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Navbar;
