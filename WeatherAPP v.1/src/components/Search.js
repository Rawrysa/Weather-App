import React, { useState } from "react";
import { Link } from "react-router-dom"

import "../styles/Search.css";

export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("");

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <label className="Search__label">
        <input
          className="Search__input"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ex: Tokyo, Japan"
        />
      </label>
      <Link to="/current-weather" className="Search__button" onClick={handleButtonClick}>
        Search
      </Link>
    </div>
  );
}
