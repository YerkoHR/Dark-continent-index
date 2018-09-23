import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import "../scss/index.scss";

export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ""
    };
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  renderSwitch(filter) {
    const data = this.props.data;
    const kakin = data.kakin.edges;
    const bodyguards = data.bodyguards.edges;
    const zodiacs = data.zodiacs.edges;
    const def = data.default.edges;

    switch (filter) {
      case "Kakin":
        return <CardList data={kakin} />;
      case "Bodyguards":
        return <CardList data={bodyguards} />;
      case "Zodiacs":
        return <CardList data={zodiacs} />;
      default:
        return <CardList data={def} />;
    }
  }

  onFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div>
        <Layout>
          <Filters onFilter={this.onFilter} />
          {this.renderSwitch(this.state.filter)}
        </Layout>
      </div>
    );
  }
}

export const fragment = graphql`
  fragment indexFrag on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      title
      templateKey
      faction
      image
    }
  }
`;
export const query = graphql`
  query {
    kakin: allMarkdownRemark(
      filter: { frontmatter: { faction: { eq: "Kakin" } } }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    zodiacs: allMarkdownRemark(
      filter: { frontmatter: { faction: { eq: "Zodiacs" } } }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    bodyguards: allMarkdownRemark(
      filter: { frontmatter: { faction: { eq: "Bodyguards" } } }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    default: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "new-character" } } }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
  }
`;
