import React from "react";
import { useNavigate } from "react-router-dom";
// import ProdImg from "../../resources/images/header-image-1.svg";
import { FaArrowRight } from "react-icons/fa";

function ItemCatalogue(props) {
  const navigate = useNavigate();

  function redirectPage(id) {
    navigate("/product/" + id);
  }

  function cardMapper(arr) {
    const slicedData = arr.slice(0, 4);
    console.log(slicedData);
    return slicedData.map((ele) => (
      <>
        {console.log(ele)}
        <div className="item-row-card">
          <img
            src={ele.images[0]}
            alt="/"
            onClick={(event) => redirectPage(ele.id, event)}
          />
          <div className="item-row-card-info">
            <h4>{ele.title}</h4>
            <p>${ele.price}</p>
          </div>
        </div>
      </>
    ));
  }

  function splitByCategory(categoryType) {
    const results = props.apiData.filter((product) => {
      return product.category.toLowerCase().includes(categoryType.toLowerCase());
    });
    return results;
  }

  return (
    <>
      <div className="item-catalogue">
        <div className="item-row">
          <h3>Picks For You</h3>
          <div className="item-row-strip">
            <div className="item-row-cards">{cardMapper(props.apiData)}</div>
            <div>
              <FaArrowRight className="item-row-show-more" />
            </div>
          </div>
        </div>
        <div className="item-row">
          <h3>Search By Laptops</h3>
          <div className="item-row-strip">
            <div className="item-row-cards">{cardMapper(splitByCategory("laptops"))}</div>
            <div>
              <FaArrowRight className="item-row-show-more" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCatalogue;
