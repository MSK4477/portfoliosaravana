import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
   
      {showMenu ? (
         <nav id={showMenu ? "header": ""}>
         <h1>Saravana</h1> 

        <main>
           <i
            onClick={toggleMenu}
            className="fa-solid fa-bars"
            id="menuIcon"
            style={{ color: "#000000" }}
          ></i>

          <a href="#home" >Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" >Contact</a>
        </main>
            </nav>

      ) : (

        <div id="menu">
          <i
            onClick={toggleMenu}
            className="fa fa-times" aria-hidden="true"
              id="menuIcon"
            style={{ color: "#000000", fontSize:"23px" }}
          ></i>
           <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
</>
  );
};

export default Header;
