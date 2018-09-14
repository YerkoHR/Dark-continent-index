import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/new-character";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor("body")}
    faction={entry.getIn(["data", "faction"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
    debut={entry.getIn(["data", "debut"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
