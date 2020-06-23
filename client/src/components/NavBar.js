import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div>
        <h2>Weightlifting Journal</h2>
      </div>
      <div className='nav-links'>
        <NavLink
          exact
          to='/'
          className='nav-link'
          activeClassName='nav-link-active'
        >
          Home
        </NavLink>
        <NavLink
          to='/signup'
          className='nav-link'
          activeClassName='nav-link-active'
        >
          Signup
        </NavLink>
        <NavLink
          to='/login'
          className='nav-link'
          activeClassName='nav-link-active'
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
