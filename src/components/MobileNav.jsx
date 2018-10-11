import React from "react";

export default () => {
  return (
    <div className="mobile-nav">
      <a href="/">
        <span />
        <div>Home</div>
      </a>
      <a href="/about">
        <span />
        <div>About</div>
      </a>
      <a href="/tags">
        <span />
        <div>Tags</div>
      </a>
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
