import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// my modules
import "../css/searchbar.css";
import PreferencesContext from "../utilities/PreferencesContext.js";
import { exists } from "../utilities/UtilityFunctions.js";
import DMenu from "./DMenu";

function SearchBar(props) {
  const [keyword, setKeyword] = useState("");
  const { categoryDetails, countryDetails, getNews, searchNews } =
    useContext(PreferencesContext);

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleClearClick() {
    if (!exists(keyword)) {
      return;
    }

    setKeyword("");
    getNews(categoryDetails.key, countryDetails.key);
  }

  function handleSearchClick() {
    if (!exists(keyword)) {
      return;
    }

    searchNews(keyword);
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "85px",
          marginBottom: "20px",
        }}
      >
        <DMenu type={2} />
        <DMenu type={1} />
      </div>
      <div className="search-box">
        <input
          onChange={handleChange}
          className="search-input"
          placeholder="Search here"
          value={keyword}
          maxLength="60"
        ></input>

        <button
          onClick={handleClearClick}
          type="button"
          className="cross-button"
        >
          <div className="cross-icon">
            <p className="cross-text">
              <FontAwesomeIcon icon={faXmark} />
            </p>
          </div>
        </button>

        <button
          onClick={handleSearchClick}
          type="button"
          className="search-button"
        >
          <div className="search-icon">
            <p className="icon-text">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </p>
          </div>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
