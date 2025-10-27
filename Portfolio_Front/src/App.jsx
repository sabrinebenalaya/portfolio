import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Visiteur/pages/Home";
import NavBar from "./Visiteur/components/NavBar";
import Projects from "./Visiteur/pages/Projects";
import About from "./Visiteur/pages/About";
import Contact from "./Visiteur/pages/Contact";
function App() {
  return (
    < >
      
     
          <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" index element={<Home />} />
         <Route path="/myProjects"  element={<Projects />} />
          <Route path="/aboutMe"  element={<About />} />
           <Route path="/contactMe"  element={<Contact/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
