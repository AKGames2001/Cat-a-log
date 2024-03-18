import React from "react";
import "../../resources/css/productdetails.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

function ProductRoutes(props) {
  const params = useParams();

  let data = props.apiData.filter((product) => {
    return product.id === Number(params.id);
  });
  return (
    <>
      <div className="product">
        <div className="product-image">
          <img src={data[0].images[0]} className="w3-center" alt="/"/>
        </div>
        <div className="product-details">
          <h3 style={{ fontSize: "24px" }}>{data[0].title}</h3>
          <p style={{ fontSize: "14px" }}>{data[0].description}</p>
          <p style={{ fontSize: "18px" }}>${data[0].price}</p>
          <div className="product-action">
            <div className="product-btn">ADD TO CART</div>
            <div className="product-btn">BUY NOW</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductRoutes;
