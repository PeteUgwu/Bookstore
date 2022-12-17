import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="title-div">
      <h2 className="title">BOOKSTORE CMS</h2>
    </div>
    <div className="menu">
      <nav>
        <ul className="menu-list">
          <li className="list-item">
            <Link to="/">Books</Link>
          </li>
          <li className="list-item">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  </div>
);

export default Navbar;
