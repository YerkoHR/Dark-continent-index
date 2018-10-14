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
      filter: "all"
    };
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }
  renderSwitch(filter) {
    const data = this.props.data;
    const royal = data.royal.edges;
    const bodyguards = data.bodyguards.edges;
    const zodiacs = data.zodiacs.edges;
    const def = data.default.edges;
    const expedition = data.expedition.edges;

    switch (filter) {
      case "Royal Family":
        return <CardList data={royal} />;
      case "Bodyguards":
        return <CardList data={bodyguards} />;
      case "Zodiacs":
        return <CardList data={zodiacs} />;
      case "DC Expedition Team":
        return <CardList data={expedition} />;
      default:
        return <CardList data={def} />;
    }
  }
  onFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <Layout>
        <Filters onFilter={this.onFilter} state={this.state} />
        {this.renderSwitch(this.state.filter)}
      </Layout>
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
      image {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;
export const query = graphql`
  query {
    royal: allMarkdownRemark(
      filter: { frontmatter: { faction: { eq: "Royal Family" } } }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    zodiacs: allMarkdownRemark(
      filter: { frontmatter: { faction: { eq: "Zodiacs" } } }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    bodyguards: allMarkdownRemark(
      filter: { frontmatter: { faction: { eq: "Bodyguards" } } }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    expedition: allMarkdownRemark(
      filter: {
        frontmatter: { faction: { eq: "Dark Continent Expedition Team" } }
      }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
    default: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "new-character" } } }
      sort: { fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...indexFrag
        }
      }
    }
  }
`;
