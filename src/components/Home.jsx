import React, { useState } from "react";
import "../resources/css/home.css";
import Catalogue from "./HomePage/Catalogue";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Home(props) {
  const [data, setData] = useState(props.apiData);

  function searchItem(keyword) {
    let word = keyword;
    const results = props.apiData.filter((product) => {
      return product.title.toLowerCase().includes(word.toLowerCase());
    });
    console.log(results);
    setData(results);
  }

  return (
    <>
      <NavBar apiData={props.apiData} searchFunction={searchItem} isMobile={props.isMobile}/>
      <Catalogue apiData={data} isMobile={props.isMobile} />
      <Footer />
    </>
  );
}

export default Home;
