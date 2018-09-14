import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="header">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/tags">Tags</Link>
    <div>
      <a
        href="https://github.com/YerkoHR/gatsby-starter-netlify-cms"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Repository</span>
      </a>
    </div>
  </nav>
);

export default Navbar;
