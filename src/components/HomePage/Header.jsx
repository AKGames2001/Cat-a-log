import React from "react";
import { Link } from "react-router-dom";
import "../../resources/css/homepage.css";
import headerImage from "../../resources/images/header-image-1.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-text">
          <h1>
            Where shopping can <br />
            be a pleasure!
          </h1>
          <p>
            When we shop, the world shows signs of improvement, and the world is
            better, yet then it's not, and we have to do it once more.
          </p>
          <Link to="product" className="header-link">
            Start Now
          </Link>
        </div>
        <div className="header-image">
          <img src={headerImage} alt="/" className="header-image" />
        </div>
      </div>
    </>
  );
}

export default Header;
