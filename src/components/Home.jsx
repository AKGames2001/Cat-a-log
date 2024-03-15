import React from "react";
import "../resources/css/home.css";
import Catalogue from "./HomePage/Catalogue";

function Home(props) {
  const navBar = {
    display: "flex",
    position: "fixed",
    padding: "0px 100px",
    height: "4em",
    width: "calc(100vw - 200px)",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  };

  const navLinks = {
    display: "flex",
    gap: "3em",
  };

  const navLinksAnchor = {
    fontWeight: "bold",
    fontSize: "14px",
  };

  const navSearchInput = {
    backgroundColor: "rgb(224, 224, 224)",
    padding: "10px 30px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <>
      <nav style={navBar}>
        <h3>Cat-a-log.</h3>
        <div style={navLinks}>
          <a href="" style={navLinksAnchor}>
            Home
          </a>
          <a href="" style={navLinksAnchor}>
            Shop
          </a>
          <a href="" style={navLinksAnchor}>
            About
          </a>
        </div>
        <div>
          <input style={navSearchInput} placeholder="Search" />
        </div>
      </nav>
      <Catalogue apiData={props.apiData} />
    </>
  );
}

export default Home;
