import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link className={`${tag}`} to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ));

    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout position={"left"}>
        <Helmet title={`${tag} | ${title}`} />
        <div className="tags__container">
          <h3>{tagHeader}</h3>
          <ul className="taglist">{postLinks}</ul>

          <Link className="to-all-tags" to="/tags/">
            Browse all tags &rarr;
          </Link>
        </div>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
