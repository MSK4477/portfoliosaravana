import homeSvg from "../svg/designer-9c.svg";
import TypeWriterEffect from 'typewriter-effect';
import resume from "../svg/resume.pdf"
 
const Home = () => {

  return (
    <div  id="home">
      <h1>
      <TypeWriterEffect
            options={{
              strings:  [
                "Hello I'm Saravana!!",
                "Welcome to My Portfolio..",
                "I am a Passionate Fullstack Developer..",
                "Check Out My Projects..",
                "Connect with Me..",
              ],
              autoStart: true,
              deleteSpeed:10,
              loop: true,
              
              cursor: "|",
              wrapperClassName: "typewriter",
            }}
          />
          </h1>
          <img src={homeSvg} alt="homeImg" />
          <a id="resume" href={resume} download="resume">Resume</a>
    </div>
  );
};

export default Home;
