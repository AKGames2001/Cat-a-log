import React from "react";
import FilterItem from "./SortProducts/FilterItem";
import Products from "./Products";

function Catalogue(props) {
  const sideBar = {
    display: "flex",
    flexFlow: "column",
    gap: "15px",
    position: "fixed",
    width: "20vw",
    paddingLeft: "100px",
    marginTop: "5em",
  };

  const sideBarSearch = {
    backgroundColor: "rgb(224, 224, 224)",
    padding: "10px 10px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
  };

  const sideBarFilter = {
    display: "flex",
    flexFlow: "column",
    gap: "10px",
  };

  const catalogue = {
    display: "flex",
    width: "100vw",
    height: "calc(100vh - 4em)",
  };

  return (
    <>
      <div style={catalogue}>
        <div style={sideBar}>
          <div>
            <input style={sideBarSearch} placeholder="Search" />
          </div>
          <div style={sideBarFilter}>
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <FilterItem />
          </div>
        </div>
        <Products apiData={props.apiData} />
      </div>
    </>
  );
}

export default Catalogue;
