import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useParams, useOutlet } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import AdminPanel from "../components/AdminPanel";
import "../styles/AdminHome.css";
import api from "../../Middleware/api";
import { isAuth } from "../../Middleware/isAuth";
function AdminHome() {
  const { id } = useParams();

const [admin, setAdmin] = useState({})
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          isAuth(token);
        } else {
          console.error("Aucun token d'authentification trouvé");
          return;
        }

        const response = await api.get(`/admin/get-profile/${id}`);
        if (!response) {
          console.log(response.data.msg);
        }
        setAdmin(response.data.response);
      
      } catch (error) {
        console.error("Erreur lors de la récupération du profil:", error);
      }
    };
    fetchProfile();
  }, [id]);
    const outlet = useOutlet();

  return (
     <div className="adminHomeContainer">
      <AdminNavBar admin={admin} />
      <AdminPanel admin={admin} />

      <div className="mainContent">
       {outlet || <div><h1>hello</h1>  </div>} 
      </div>
    </div>
  );
}

export default AdminHome;
