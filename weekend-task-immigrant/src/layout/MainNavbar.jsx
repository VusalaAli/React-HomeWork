import React from "react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <>
      <header>
       <div className="container">
       <div className="header">
          <div>
            <p>We believe we helps people for happier lives</p>
          </div>
          <div className="logo">
            <img src="/src/assets/images/immigration.png" alt="" />
          </div>
          <div className="tel">
            <span>+880 123 12 658 439</span>
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>
       </div>
        <nav>
          <ul className="navlist">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/immigration">Immigration</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavbar;
