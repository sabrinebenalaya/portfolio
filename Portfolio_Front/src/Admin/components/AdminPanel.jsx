import React, { useState } from "react";
import { Mail, CheckSquare, ChevronDown, User, LogOut } from "lucide-react";
import TodoModal from "./TodoModal";
import "../styles/AdminPanel.css";

function AdminPanel({admin}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  return (
    <>
      <div className="adminPanelContainer">
        <nav className="adminPanel">
          
          {/* Icône Todo */}
          <button 
            onClick={() => setShowTodo(true)} 
            className="panelButton"
          >
            <CheckSquare size={24} color="white" />
          </button>

          {/* Icône Email */}
          <a href="/admin/emails" className="panelButton">
            <Mail size={24} color="white" />
          </a>

          {/* Dropdown Admin */}
          <div className="dropdownContainer">
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              className="adminDropdownButton"
            >
             {admin.userName}
              <ChevronDown size={20} />
            </button>

            {showDropdown && (
              <div className="dropdownMenu">
                <a href="/admin/profile" className="dropdownItem">
                  <User size={18} />
                  Profil
                </a>
                <a href="/logout" className="dropdownItem dropdownItemBorder">
                  <LogOut size={18} />
                  Déconnexion
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>

      <TodoModal isOpen={showTodo} onClose={() => setShowTodo(false)} />
    </>
  );
}

export default AdminPanel;