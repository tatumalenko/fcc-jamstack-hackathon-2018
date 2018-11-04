import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/homepage/" className="brand-logo">
        Commit RPG
      </Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Link to="/">My Profile</Link>
        </li>
        <li>
          <Link to="/store/">Store</Link>
        </li>
        <li>
          <Link to="/404/">Log Out</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
