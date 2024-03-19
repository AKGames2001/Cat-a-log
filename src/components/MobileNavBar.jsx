import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileNavBar() {
  const [navOpen, setNavOpen] = useState(false);

  function closeNav() {
    setNavOpen(false);
  }
  function openNav() {
    setNavOpen(true);
  }

  return navOpen ? (
    <div className="nav-links">
      <BiX className="nav-link-close" onClick={closeNav} />
      <Link to="/" className="nav-links-item">
        Home
      </Link>
      <Link to="/product" className="nav-links-item">
        Shop
      </Link>
      <Link to="/about" className="nav-links-item">
        About
      </Link>
    </div>
  ) : (
    <RxHamburgerMenu className="nav-burger" onClick={openNav} />
  );
}

export default MobileNavBar;
