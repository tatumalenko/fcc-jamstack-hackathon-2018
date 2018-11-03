import React from 'react'
// import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav>
    <div class="nav-wrapper">
      <a href="https://materializecss.com" class="brand-logo">
        Commit RPG
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="https://materializecss.com">My Profile</a>
        </li>
        <li>
          <a href="https://materializecss.com">Store</a>
        </li>
        <li>
          <a href="https://materializecss.com">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
