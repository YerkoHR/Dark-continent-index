import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import NenBeast from "../components/NenBeast";

export const BlogPostTemplate = ({
  content,
  tags,
  title,
  contentComponent,
  faction,
  debut,
  nen,
  img,
  imgFluid,
  imgBeast
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <Helmet title={`${title} | Character`} />
      <div className="grid">
        <div className="sub-grid">
          <ul className="section-1">
            <h3 className="character__name">{title}</h3>

            <li>Faction: {faction}</li>
            <li>Nen type: {nen}</li>
            <li>DC debut: {debut}</li>
          </ul>
          <PostContent className="section-2" content={content} />

          <div className="section-3">
            {tags && (
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link className={`${tag}`} to={`/tags/${kebabCase(tag)}/`}>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {imgFluid ? <Img fluid={imgFluid} /> : <img src={img} alt="" />}
      </div>
      {tags.indexOf("prince") !== -1 && <NenBeast imgBeast={imgBeast} />}
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { frontmatter: post } = data.markdownRemark;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        faction={post.faction}
        tags={post.tags}
        title={post.title}
        debut={post.debut}
        imgFluid={post.profileImage.childImageSharp.fluid}
        img={post.profileImage.childImageSharp.fluid.src}
        nen={post.nen}
        imgBeast={post.imgBeast ? post.imgBeast.childImageSharp.fluid : ""}
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
        profileImage {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imgBeast {
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
