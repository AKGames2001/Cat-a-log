import React, { useState } from "react";
import FilterItem from "./SortProducts/FilterItem";
import Products from "./Products";
import "../../resources/css/product.css";

function Catalogue(props) {
  const [searchData, setSearchData] = useState({
    query: "",
    data: props.apiData,
  });

  function handleChange(e) {
    const results = props.apiData.filter((product) => {
      if (e.target.value === "") {
        return props.apiData;
      }
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchData({
      query: e.target.value,
      data: results,
    });
    console.log("Search: " + JSON.stringify(results));
    console.log("ApiData: " + props.apiData);
  }

  // const sideBar = {
  //   display: "flex",
  //   flexFlow: "column",
  //   gap: "15px",
  //   position: "fixed",
  //   width: "20vw",
  //   paddingLeft: "100px",
  //   marginTop: "5em",
  // };

  // const sideBarSearch = {
  //   backgroundColor: "rgb(224, 224, 224)",
  //   padding: "10px 10px",
  //   outline: "none",
  //   border: "none",
  //   borderRadius: "5px",
  // };

  // const sideBarFilter = {
  //   display: "flex",
  //   flexFlow: "column",
  //   gap: "10px",
  // };

  // const catalogue = {
  //   display: "flex",
  //   width: "100vw",
  //   height: "100%",
  // };

  return (
    <>
      <div className="catalogue-side-bar">
        {props.isMobile ? (
          <></>
        ) : (
          <div className="side-bar">
            <div>
              <input
                className="side-bar-search"
                placeholder="Search"
                value={searchData.query}
                onChange={handleChange}
              />
            </div>
            <div className="side-bar-filter">
              <FilterItem />
              <FilterItem />
              <FilterItem />
              <FilterItem />
            </div>
          </div>
        )}
        <Products apiData={searchData.data} isMobile={props.isMobile} />
      </div>
    </>
  );
}

export default Catalogue;
