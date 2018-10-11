import React from "react";
import { Link } from "gatsby";
import hunterLogo from "../images/hunterLogo.png";

const Navbar = () => (
  <nav>
    <div>
      <Link to="/" className="home-mobile">
        <img className="hunter-logo" alt="hunter-logo" src={hunterLogo} />
        <h2>Dark Continent Index</h2>
      </Link>
      <div className="header">
        <Link to="/">
          <img className="hunter-logo" alt="hunter-logo" src={hunterLogo} />
        </Link>
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
      </div>
    </div>
  </nav>
);

export default Navbar;
