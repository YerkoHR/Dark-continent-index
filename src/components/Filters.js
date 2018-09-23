import React from "react";

export default ({ onFilter }) => (
  <div>
    <ul className="filter__container">
      <li>
        <button className="filter" onClick={() => onFilter("default")}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => onFilter("Kakin")}>Kakin</button>
      </li>
      <li>
        <button onClick={() => onFilter("Zodiacs")}>Zodiacs</button>
      </li>
      <li>
        <button onClick={() => onFilter("Bodyguards")}>Bodyguard</button>
      </li>
    </ul>
  </div>
);
