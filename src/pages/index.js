import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import "../scss/cards.scss";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section>
          <div>
            <h1>Dark continent characters</h1>
            <div className="card__container">
              {posts.map(({ node: post }) => (
                <div key={post.id}>
                  <Link className="card" to={post.fields.slug}>
                    {post.frontmatter.image && (
                      <img
                        src={`${post.frontmatter.image}`}
                        alt={post.frontmatter.title}
                      />
                    )}
                    <div className="name">{post.frontmatter.title}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "new-character" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
      }
    }
  }
`;
