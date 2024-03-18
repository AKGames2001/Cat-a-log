import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function About(props) {
  return (
    <>
      <NavBar apiData={props.apiData} isMobile={props.isMobile}/>
      <Footer />
    </>
  );
}

export default About;
