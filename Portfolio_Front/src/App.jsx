import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Visiteur/pages/Home";
import Projects from "./Visiteur/pages/Projects";
import About from "./Visiteur/pages/About";
import Contact from "./Visiteur/pages/Contact";
import "./App.css";
import Login from "./Admin/pages/Login";
import ForgotPassword from "./Admin/pages/ForgotPassword";
import AdminHome from "./Admin/pages/AdminHome";
import Register from "./Admin/pages/Register";
import PublicLayout from "./PublicLayout";
import ProtectedRoute from "./ProtectedRoute";
import AddProject from "./Admin/pages/AddProject";
import AddCompetence from "./Admin/pages/AddCompetence";
import AddExperience from "./Admin/pages/AddExperience";
import AddFormation from "./Admin/pages/AddFormation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgotPassword" element={<ForgotPassword />} />
        <Route path="/admin/register" element={<Register />} />


         <Route element={<PublicLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/myProjects" element={<Projects />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/contactMe" element={<Contact />} />
        </Route>



        <Route path="/admin/:id" element={<ProtectedRoute><AdminHome /></ProtectedRoute>}>
          <Route path="addProject" element={<AddProject />} />
          <Route path="addCompetence" element={<AddCompetence />} />
          <Route path="addExperience" element={<AddExperience />} />
          <Route path="addFormation" element={<AddFormation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
