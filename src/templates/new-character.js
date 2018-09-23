import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const BlogPostTemplate = ({
  content,
  tags,
  title,
  faction,
  debut,
  nen,
  img
}) => {
  return (
    <section>
      <Helmet title={`${title} | Character`} />
      <h2>{title}</h2>
      <div className="grid">
        <img alt={`${title}`} src={img} />
        <div className="sub-grid">
          <ul className="section-1">
            <li>Faction: {faction}</li>
            <li>Nen type: {nen}</li>
            <li>DC debut: {debut}</li>
          </ul>
          <div
            className="section-2"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {tags && tags.length ? (
            <div className="section-3">
              <span>Tags:</span>
              <ul>
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        faction={post.frontmatter.faction}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        debut={post.frontmatter.debut}
        img={post.frontmatter.image}
        nen={post.frontmatter.nen}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        faction
        title
        nen
        image
        tags
        debut
      }
    }
  }
`;
