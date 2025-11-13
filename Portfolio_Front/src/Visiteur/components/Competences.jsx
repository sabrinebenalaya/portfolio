import React, { useState, useEffect } from "react";
import api from "../../Middleware/api";
import { URL_Localhost } from "../../config";
import axios from "axios";

function Competences() {
  const [competences, setCompetences] = useState([]);
  

  const fetchCompetence = async (id) => {
    try {
      const response = await axios.get(`${URL_Localhost}admin/get-profile`);
      if (!response || !response.data.competencesDetails) {
        console.log("erreur de donne");
      } else {
        setCompetences(response.data.competencesDetails);
      }
    } catch (error) {
      console.error("Erreur:", error.response?.data || error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchCompetence();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="header">
            <h2>Competences</h2>
            <div className="headerLine"></div>
          </div>

          <div className="list">
            <div className="itemsContainer">
              {competences.map((competence, index) => (
                <div key={index} className="item">
                  <div className="timelinePoint"></div>

                  <div className="content">
                    <div className="contentHeader">
                      <h3 className="title">{competence.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
