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
  img,
  helmet
}) => {
  return (
    <section>
      {helmet || ""}
      <div>
        <h1>
          {title} {debut} {faction}
        </h1>
        <img src={img} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {tags && tags.length ? (
          <div>
            <h4>Tags</h4>
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
        faction={post.frontmatter.faction}
        helmet={<Helmet title={`${post.frontmatter.title} | Character`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        debut={post.frontmatter.debut}
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
        tags
        debut
      }
    }
  }
`;
