import React, { useState } from "react";
import SortProduct from "./SortProducts/SortProduct";
import DisplayProduct from "./DisplayProducts/DisplayProduct";
import '../../resources/css/product.css'

function Products(props) {
  // Passing isMobile as props.isMobile

  const [sortState, setSortState] = useState("");
  const [data, setData] = useState(props.apiData);

  function sortAscending() {
    setSortState("ascending");
    // console.log(data);

    function compare(a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    let sortedData = data.sort(compare);
    console.log("hehe");
    setData(sortedData);
  }

  function sortDescending() {
    setSortState("desceding");
    console.log(sortState);

    function compare(a, b) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    }
    let sortedData = data.sort(compare);
    console.log("hehe");
    setData(sortedData);
  }

  function noSort() {
    setSortState("");
    // console.log(sortState);
    setData(props.apiData);
  }

  // const catalogueStyle = {
  //   display: "flex",
  //   flexFlow: "column",
  //   width: "80vw",
  //   paddingRight: "100px",
  //   marginTop: "4em",
  //   marginLeft: "25vw",
  // };

  // const catalogueTitleStyle = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: "10px 0px",
  // };

  // const paraStyle = {
  //   fontSize: "14px",
  // };

  return (
    <>
      <div className="catalogue">
        <div className="catalogue-title">
          <p className="catalogue-title-p">Showing Results from API</p>
          <SortProduct
            sortState={sortState}
            sortA={sortAscending}
            sortD={sortDescending}
            sortN={noSort}
          />
        </div>
        <DisplayProduct data={data} isMobile={props.isMobile}/>
      </div>
    </>
  );
}

export default Products;
