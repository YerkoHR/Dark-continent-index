import React from "react";
import Img from "gatsby-image";

export default ({ imgBeast }) => (
  <div className="grid">
    <ul className="beast-abilities">
      <li>type: parasitic</li>
      <li>ability: description</li>
    </ul>
    <Img fluid={imgBeast} />
  </div>
);
