import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import Bars from '../images/bars.svg';
import { FaBars } from "react-icons/fa";
import gpLogo from "../assets/images/optimed.png";
import "../assets/css/Navbar.css";
import CasualButton from "./CasualButton";
import { navbarData } from "../data/NavbarData";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className={navbar ? "logo-container active" : "logo-container"}>
        <Link className="logo" to="/">
          <img
            style={{ width: "100px", height: "60px" }}
            className={navbar ? "logo-image active" : "logo-image"}
            src={gpLogo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className={navbar ? "nav-menu active" : "nav-menu"}>
        {navbarData.map((item, index) => (
          <NavLink
            exact
            className="nav-menu-link"
            activeClassName="nav-menu-link active"
            to={item.link}
            key={index}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      {/* <div className="right-side-menu">
        <CasualButton
          link="/contact"
          text="Contact Us"
          icon={<FaBars className="icon-btn" onClick={toggle} />}
        />
      </div> */}
    </nav>
  );
};

export default Navbar;
