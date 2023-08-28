import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <div className="menuBar">
      <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i>
      </div>

       <div className="logo">
        <h1 className="logoName">Saravana</h1>
        </div>
      <div className="mainDetails">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}>Skills</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact </Link>
      </div>
    </header>
   
  );
};

export default Header;
