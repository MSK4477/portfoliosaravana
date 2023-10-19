import React from "react";
import { motion } from "framer-motion"
import me from "../images/me.png";
function About() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
      opacity:0,
      y: "-100%",
    },

    three: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <main id="about">
      <h2 style={{ color: "black" }}>About Me</h2>

      <section>
        <motion.div className="about-me"
         whileInView={animations.whileInView}
         initial={animations.one}
        >
          <p>
            I'm Saravana, a 2021 Computer Science graduate from Hindustan
            College of Arts and Science. I am a fresher, and I am enthusiastic
            about starting my career as a web developer.
          </p>
        </motion.div>
        <motion.div
          className="img"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <img src={me} alt="me" />
        </motion.div>
        
        <motion.div  className="end"
         whileInView={animations.whileInView}
         initial={animations.three}
        >
          -- --
        </motion.div>
      </section>


    </main>
  );
}

export default About;
