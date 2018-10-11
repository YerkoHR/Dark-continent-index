import React from "react";
import Helmet from "react-helmet";
import "../scss/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

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
    const { children, state, onFilter, onToggle } = this.props;
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
        <MobileNav state={state} onFilter={onFilter} onToggle={onToggle} />
        <Footer />
      </div>
    );
  }
}
