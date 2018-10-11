import React from "react";

export default ({ onFilter, state, onToggle }) => (
  <ul className="filter__container">
    <li>
      <button className="filter" onClick={() => onFilter("default")}>
        All
      </button>
    </li>
    <li>
      <button
        className={"Royal Family" === state.filter ? "Royal" : ""}
        onClick={() => onFilter("Royal Family")}
      >
        Royal Family
      </button>
    </li>
    <li>
      <button
        className={"Zodiacs" === state.filter ? "Zodiacs" : ""}
        onClick={() => onFilter("Zodiacs")}
      >
        Zodiacs
      </button>
    </li>
    <li>
      <button
        className={"Bodyguards" === state.filter ? "Bodyguards" : ""}
        onClick={() => onFilter("Bodyguards")}
      >
        Bodyguards
      </button>
    </li>
    <li>
      <button
        className={"DC Expedition Team" === state.filter ? "Dark" : ""}
        onClick={() => onFilter("DC Expedition Team")}
      >
        DC Expedition Team
      </button>
    </li>
  </ul>
);
