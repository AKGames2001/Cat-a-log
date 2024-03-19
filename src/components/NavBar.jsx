import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import MobileNavBar from "./MobileNavBar";
import "../resources/css/navbar.css";

function NavBar(props) {
  const [navSearch, setNavSearch] = useState("");

  // const navBar = {
  //   display: "flex",
  //   position: "fixed",
  //   padding: "0px 100px",
  //   height: "4em",
  //   width: "calc(100vw - 200px)",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   backgroundColor: "white",
  // };

  // const navLinks = {
  //   display: "flex",
  //   gap: "3em",
  // };

  // const navLinksAnchor = {
  //   display: "flex",
  //   flexFlow: "column",
  //   fontWeight: "bold",
  //   fontSize: "14px",
  // };

  // const navSearchContainer = {
  //   display: "flex",
  //   backgroundColor: "rgb(224, 224, 224)",
  //   width: "50%",
  //   borderRadius: "5px",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };

  // const navSearchIcon = {
  //   display: "flex",
  //   width: "20px",
  //   padding: "0px 10px",
  //   height: "auto",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  // const navSearchInput = {
  //   padding: "10px 30px 10px 0px",
  //   outline: "none",
  //   border: "none",
  //   width: "100%",
  //   backgroundColor: "rgb(224, 224, 224)",
  //   borderRadius: "5px",
  // };

  //   let navBorderStyle = {
  //     background: "red",
  //     backgroundRepeat: "repeat-x",
  //     backgroundSize: "16px 4px",
  //     backgroundPosition: "-50px 0px",
  //     padding: "1px",
  //     transition: "background-position 2s",
  //     display: "block",
  //   };

  function searchItem(e) {
    if (e.key === "Enter") {
      console.log(e.key);
      props.searchFunction(navSearch);
    }
  }

  function changeHandler(e) {
    setNavSearch(e.target.value);
  }

  return (
    <>
      <nav className="nav-bar">
        <h3><Link to="/">Cat-a-log.</Link></h3>
        <div className="nav-search">
          <BiSearch className="nav-search-icon" />
          <input
            className="nav-search-input"
            placeholder="Search"
            value={navSearch}
            onChange={changeHandler}
            onKeyDown={searchItem}
          />
        </div>
        {props.isMobile ? (
          <MobileNavBar />
        ) : (
          <div className="nav-links">
            <BiX className="nav-link-close"/>
            <Link to="/" className="nav-links-item">
              Home
            </Link>
            <Link to="/product" className="nav-links-item">
              Shop
            </Link>
            <Link to="/about" className="nav-links-item">
              About
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
