import React from "react";
import Img from "gatsby-image";

export default ({ imgBeast, beastAbilities }) => (
  <div className="grid">
    <ul className="beast-abilities">
      <li>type: parasitic</li>
      <li>abilities: {beastAbilities}</li>
    </ul>
    <Img fluid={imgBeast} />
  </div>
);
