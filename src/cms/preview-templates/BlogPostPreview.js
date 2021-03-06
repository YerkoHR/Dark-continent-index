import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/new-character";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor("body")}
    faction={entry.getIn(["data", "faction"])}
    abilities={entry.getIn(["data", "abilities"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
    debut={entry.getIn(["data", "debut"])}
    nen={entry.getIn(["data", "nen"])}
    img={entry.getIn(["data", "profileImage"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
