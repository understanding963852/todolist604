import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";

function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="header">
      <button className="toggle" onClick={toggleDarkMode}>
        {!darkMode && <FaMoon />}
        {darkMode && <FaSun />}
      </button>
      <ul className="filters">
        {filters.map((value, index) => {
          return (
            <li key={index}>
              <button
                className="filter"
                onClick={() => {
                  onFilterChange(value);
                }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
