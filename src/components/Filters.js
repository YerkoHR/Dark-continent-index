import React from "react";

export default ({ onFilter }) => (
  <ul className="filter__container">
    <li>
      <button onClick={() => onFilter("default")}>All</button>
    </li>
    <li>
      <button onClick={() => onFilter("Royal Family")}>Royal Family</button>
    </li>
    <li>
      <button onClick={() => onFilter("Zodiacs")}>Zodiacs</button>
    </li>
    <li>
      <button onClick={() => onFilter("Bodyguards")}>Bodyguards</button>
    </li>
    <li>
      <button onClick={() => onFilter("DC Expedition Team")}>
        DC Expedition Team
      </button>
    </li>
  </ul>
);
