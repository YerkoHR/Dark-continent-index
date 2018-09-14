import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav>
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
        <div>
          <Link to="/tags">Tags</Link>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/YerkoHR/gatsby-starter-netlify-cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Repository</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
