import React from 'react'
// import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav>
    <div class="nav-wrapper">
      <a href="http://localhost:8000/" class="brand-logo">
        Commit RPG
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="http://localhost:8000/">My Profile</a>
        </li>
        <li>
          <a href="http://localhost:8000/">Store</a>
        </li>
        <li>
          <a href="http://localhost:8000/">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
