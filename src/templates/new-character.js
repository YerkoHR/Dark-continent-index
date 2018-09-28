import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// the contentComponent || content lines ad relations are to fix a preview bug in the netlify cms

export const BlogPostTemplate = ({
  content,
  tags,
  title,
  contentComponent,
  faction,
  debut,
  nen,
  img
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section>
      <Helmet title={`${title} | Character`} />
      <h2>{title}</h2>
      <div className="grid">
        <Img fluid={img} />
        <div className="sub-grid">
          <ul className="section-1">
            {faction && <li>Faction: {faction}</li>}
            {nen && <li>Nen type: {nen}</li>}
            {debut && <li>DC debut: {debut}</li>}
          </ul>
          <PostContent className="section-2" content={content} />
        </div>
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
        contentComponent={HTMLContent}
        faction={post.frontmatter.faction}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        debut={post.frontmatter.debut}
        img={post.frontmatter.image.childImageSharp.fluid}
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
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
        debut
      }
    }
  }
`;
