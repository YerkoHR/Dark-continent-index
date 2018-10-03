import React from "react";
import Helmet from "react-helmet";
import "../scss/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: false
    };
  }

  componentDidMount() {
    this.setState({ animate: true });
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet title="Home | Dark continent index" />
        <Navbar />
        <div
          className={
            this.state.animate
              ? "content__container fade-in"
              : "content__container fade-out"
          }
        >
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
