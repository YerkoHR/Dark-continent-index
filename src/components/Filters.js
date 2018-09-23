import React from "react";

export default ({ onFilter }) => (
  <div>
    <h3>Filter</h3>
    <ul>
      <li>
        <button onClick={() => onFilter("default")}>All</button>
      </li>
      <li>
        <button onClick={() => onFilter("Kakin")}>Kakin</button>
      </li>
      <button onClick={() => onFilter("Zodiacs")}>Zodiacs</button>
      <li />
      <button onClick={() => onFilter("Bodyguards")}>Bodyguard</button>
      <li />
    </ul>
  </div>
);
