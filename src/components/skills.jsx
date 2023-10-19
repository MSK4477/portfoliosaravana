import React from "react";
import skills from "../json/skills.json";
const Skills = () => {
  return (
    <main id="skills">
      <section className="skillContainer">
        <h1>Skills</h1>
        {skills.skills.map((item) => (
          <div className="mainSection">
            <img src={item.img} alt="img" />
            <div>{item.name}</div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Skills;
