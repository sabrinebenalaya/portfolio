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
        {/* Routes publiques */}
        <Route element={<PublicLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/myProjects" element={<Projects />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/contactMe" element={<Contact />} />
        </Route>

        {/* Routes admin publiques */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgotPassword" element={<ForgotPassword />} />
        <Route path="/admin/register" element={<Register />} />

        {/* Routes admin protégées avec Outlet */}
        <Route
          path="/admin/:id"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        >
          {/* Routes enfants qui s'affichent dans <Outlet /> */}
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