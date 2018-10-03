import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => (
  <div className="card__container">
    {data.map(({ node: post }) => (
      <div key={post.id}>
        <Link className="card" to={post.fields.slug}>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />

          <div className="name__container">
            <div className="name">{post.frontmatter.title.split(" ")[0]}</div>
            <span
              className={`faction-color ${
                post.frontmatter.faction.split(" ")[0]
              }`}
            />
          </div>
        </Link>
      </div>
    ))}
  </div>
);
