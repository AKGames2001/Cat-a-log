import React from "react";
import '../../../resources/css/product.css'

function SortProduct(props) {
  // const currentSortState = props.sortState;

  function handleChange(event) {
    var selection = event.target.value;
    if (selection === "ascending") {
      props.sortA();
    } else if (selection === "descending") {
      props.sortD();
    } else {
      props.sortN();
    }
  }

  // const sortBy = {
  //   display: "flex",
  //   alignItems: "center",
  //   gap: "20px",
  // };

  // const sortDropdown = {
  //   height: "30px",
  //   width: "100px",
  // };

  return (
    <>
      <div className="catalogue-sort">
        <p htmlFor="sort-order">Sort by</p>
        <select name="sort-order" className="catalogue-sort-dropdown" onChange={handleChange} >
          <option value="">
            None
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </>
  );
}

export default SortProduct;
