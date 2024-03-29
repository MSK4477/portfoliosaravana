import homeSvg from "../svg/designer-9c.svg";
import TypeWriterEffect from 'typewriter-effect';

 
const Home = () => {
const resume = "https://docs.google.com/document/d/1X-QuS2IW_me78cWJ8xTqNI8XyXsaWrDY/edit"
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
          <a id="resume" href={resume} rel="noreferrer" target="_blank">Resume</a>
    </div>
  );
};

export default Home;
