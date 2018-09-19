import React from "react";
import Helmet from "react-helmet";
import "../scss/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div className="card__container">{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;