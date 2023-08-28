import "./styles/App.scss";
import Header from "./layout/header"
import Home from "./components/home";
import "./styles/mediaQuery.scss"
import "./styles/header.scss";
import "./styles/home.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
