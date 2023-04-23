import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// my modules
import SearchBar from "./Searchbar.jsx";
import DMenu from "./DMenu.jsx";
import "../css/navbar.css";
import { vars, routes } from "../utilities/Vars.js";

function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    navigate("/login");
  };

  const handleLogoutClick = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  function changeNavbarStyle() {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener("scroll", changeNavbarStyle);

  const inlineStyle1 = {
    background: `linear-gradient(${vars.gradient}, transparent)`,
  };

  const inlineStyle2 = {
    background: "transparent",
  };

  return (
    <div>
      <nav
        className="navbar-custom navbar navbar-expand-lg navbar-dark fixed-top"
        style={isScrolled ? inlineStyle1 : inlineStyle2}
      >
        <div className="container-fluid">
          <Link className="custom-brand navbar-brand" to={routes.home}>
            <p className="brand-name">{vars.brandName}</p>
          </Link>
        </div>

        {/* <div className="dmenu-div">
          <DMenu type={2} />
          <DMenu type={1} />
        </div> */}

        {/* <SearchBar /> */}

        <button
          style={{
            fontFamily: "Montserrat",
            backgroundColor: "var(--dark)",
            color: "white",
            borderRadius: "0.3rem",
            height: "2.2rem",
            width: "fit-content",
            padding: "0 1rem 0 1rem",
            border: "none",
          }}
          onClick={
            !localStorage.getItem("token")
              ? handleLoginClick
              : handleLogoutClick
          }
        >
          {!localStorage.getItem("token") ? "Login" : "Logout"}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
