import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Visiteur/pages/Home";
import NavBar from "./Visiteur/components/NavBar";
import Projects from "./Visiteur/pages/Projects";
import About from "./Visiteur/pages/About";
import Contact from "./Visiteur/pages/Contact";
import "./App.css";
import Login from "./Admin/pages/Login";
import ForgotPassword from "./Admin/pages/ForgotPassword";
import AdminHome from "./Admin/pages/AdminHome";
import Register from "./Admin/pages/Register";
function App() {
  return (
    <>
      <BrowserRouter>
      

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/myProjects" element={<Projects />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/contactMe" element={<Contact />} />

         <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/forgotPassword" element={<ForgotPassword />} />
          <Route path="/admin/register" element={<Register />}/>
        </Routes>
     
         
      </BrowserRouter>
    </>
  );
}

export default App;
