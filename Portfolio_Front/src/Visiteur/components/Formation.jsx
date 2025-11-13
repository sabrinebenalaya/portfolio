import React from "react";
import "../styles/StyleComponent.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_Localhost } from "../../config";

export default function FormationSection() {
  const [formations, setFormations] = useState([]);
  const fetchFormations = async (id) => {
    try {
      const response = await axios.get(`${URL_Localhost}admin/get-profile`);
      if (!response || !response.data.formationsDetails) {
        console.log("erreur de donne");
      } else {
        setFormations(response.data.formationsDetails);
      }
    } catch (error) {
      console.error("Erreur:", error.response?.data || error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchFormations();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          {/* Header avec dégradé */}
          <div className="header">
            <h2>Formation</h2>
            <div className="headerLine"></div>
          </div>

          {/* Liste des formations */}
          <div className="list">
            <div className="itemsContainer">
              {formations.map((formation, index) => (
                <div key={index} className="item">
                  {/* Point sur la timeline */}
                  <div className="timelinePoint"></div>

                  {/* Contenu */}
                  <div className="content">
                    <div className="contentHeader">
                      <span className="yearBadge">{formation.year}</span>
                      <h3 className="title">{formation.title}</h3>
                    </div>
                    <p className="description">{formation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer décoratif */}
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}
