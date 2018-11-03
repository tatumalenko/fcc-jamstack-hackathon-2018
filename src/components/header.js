import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <nav>
    <div class="nav-wrapper">
      <a href="http://localhost:8000/" class="brand-logo">
        Commit RPG
      </a>
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
