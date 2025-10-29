import React from "react";
import "../styles/StyleComponent.css";

export default function FormationSection() {
  const formations = [
    {
      year: "2017",
      title: "DELF",
      description: "Diplôme d'Études en Langue Française (B2)",
    },
    {
      year: "2017",
      title: "TOEIC",
      description: "Test of English for International Communication",
    },
    {
      year: "2014",
      title: "LICENCE EN INFORMATIQUE",
      description: "Systèmes Informatiques et Logiciels (ISI)",
    },
    {
      year: "2010",
      title: "BACCALAURÉAT",
      description: "Sciences de l'Informatique",
    },
  ];

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
                    <p className="description">
                      {formation.description}
                    </p>
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
