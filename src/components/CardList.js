import React from "react";
import { Link } from "gatsby";

export default ({ data }) => (
  <div>
    <div className="card__container">
      {data.map(({ node: post }) => (
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
);
