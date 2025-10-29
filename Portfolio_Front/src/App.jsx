
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Visiteur/pages/Home";
import NavBar from "./Visiteur/components/NavBar";
import Projects from "./Visiteur/pages/Projects";
import About from "./Visiteur/pages/About";
import Contact from "./Visiteur/pages/Contact";
import "./App.css"
function App() {
  return (
   <>
  <BrowserRouter>
    <NavBar className="navbar"/>
    <div className="page-content">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/myProjects" element={<Projects />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/contactMe" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
</>
  );
}

export default App;
