import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <nav>
    <div className="nav-wrapper black">
      <Link to="/homepage/" className="brand-logo">
        Gitcha
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
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
