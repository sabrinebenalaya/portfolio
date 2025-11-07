import React from "react";
import { Plus, Award, Briefcase, GraduationCap } from "lucide-react";
import "../styles/AdminNavBar.css";
import { Link, useParams } from "react-router-dom";

function AdminNavBar({admin}) {
   
   const { id } = useParams();
  const menuItems = [
    { icon: <Plus size={20} />, label: "Add Project", path: `/admin/${id}/addProject` },
    { icon: <Award size={20} />, label: "Add Competence", path: `/admin/${id}/addCompetence` },
    { icon: <Briefcase size={20} />, label: "Add Experience", path: `/admin/${id}/addExperience` },
    { icon: <GraduationCap size={20} />, label: "Add Formation", path: `/admin/${id}/addFormation` }
  ];

  return (
    <div className="navbarContainer">
      {/* Header avec photo */}
      <div className="headerNavBar">
        <img 
          src="/assets/myPhoto.png" 
          alt="admin_photo"
          className="adminPhoto"
        />
        <h3 className="adminName">{admin.userName}</h3>
      </div>

      {/* Menu items */}
      <nav className="bodyNavbar">
        {menuItems.map((item, index) => (
         <Link
            key={index}
            to={item.path} 
            className="navItem"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default AdminNavBar;