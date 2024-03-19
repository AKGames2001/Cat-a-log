import React from "react";
import "../resources/css/home.css";
import Catalogue from "./ProductPage/Catalogue";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Product(props) {
  return (
    <>
      <NavBar apiData={props.apiData} searchFunction={props.searchItem} isMobile={props.isMobile}/>
      <Catalogue apiData={props.apiData} isMobile={props.isMobile} />
      <Footer />
    </>
  );
}

export default Product;
