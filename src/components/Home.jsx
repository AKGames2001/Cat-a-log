import React from "react";
import NavBar from "./NavBar";
import Header from "./HomePage/Header";
import ItemCatalogue from "./HomePage/ItemCatalogue";
import Footer from "./Footer";

function Home(props) {
  return (
    <>
      <NavBar apiData={props.apiData} searchFunction={props.searchItem} isMobile={props.isMobile}/>
      <Header />
      <ItemCatalogue apiData={props.apiData}/>
      <Footer />
    </>
  );
}

export default Home;
