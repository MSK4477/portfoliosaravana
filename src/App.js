import "./styles/App.scss";
import { Toaster } from "react-hot-toast";
import Header from "./layout/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./layout/footer";
import "./styles/mediaQuery.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/projects.scss";
import "./styles/skills.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
function App() {
  return (
    <>
        <Header />
      <Home />
      <About />   \
      <Skills />
      <Projects /> 
      <Contact />
      <Footer />
      <Toaster /> 
      <div
      title="Send Mail"
        style={{
          position: "fixed",
          top: "50%",
          padding:"3px",
          backgroundColor: "black",
          cursor: "pointer",
          borderRadius: "5px",
          left: "2%",
        }}
      >
        <a
          style={{ color: "orangeRed", fontStyle: "italic", padding:"3px"}}
          href="mailto:ks7997068@gmail.com"
        >
<i className="fa-solid fa-envelope" id="mail"  style={{color:"#fafcff",hover:""}}></i></a>
      </div>
    </>
  );
}

export default App;
