import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <div className="mobile-nav">
      <Link to="/">
        <span />
        <div>Home</div>
      </Link>
      <Link to="/about">
        <span />
        <div>About</div>
      </Link>
      <Link to="/tags">
        <span />
        <div>Tags</div>
      </Link>
      <a
        rel="noopener noreferrer"
        href="https://github.com/YerkoHR/gatsby-starter-netlify-cms"
        target="_blank"
      >
        <span />
        <div>Rep</div>
      </a>
    </div>
  );
};
