import "./styles/App.scss";
import Header from "./layout/header"
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "./styles/mediaQuery.scss"
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/projects.scss";
import "./styles/skills.scss";
function App() {
  return (
    <>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />

     
    </>
  );
}

export default App;
