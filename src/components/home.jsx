import React, { useState, useEffect } from "react";
import homeSvg from "../svg/designer-9c.svg"
const Home = () => {
  const texts = ["Hello Im Saravana!!","Welcome to My Portfolio 🙂","I am A Passionate Fullstack Developer. 🧑🏾‍💻", "Check Out My Projects 👀", "Connect with Me 🔗"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      // setCurrentTextIndex (currentTextIndex +1)
      // if(currentTextIndex === texts.length){
      //   setCurrentTextIndex (0)
      // }

      setCurrentTextIndex((currentTextIndex + 1) % texts.length)

    }, 2500);
 
    return () => clearInterval(interval);
  }, [currentTextIndex, texts.length]);
console.log(currentTextIndex)
  return (
    <div className="home">
      <div className="homeText">
        <h1 style={{color:"#ffffff", fontFamily:"Roboto"}}>{texts[currentTextIndex]}</h1> 
        </div>
        <img src={homeSvg} alt="homeImg" />
        
    </div>
  );
};

export default Home;
