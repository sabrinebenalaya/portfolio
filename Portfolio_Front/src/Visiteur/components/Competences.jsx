import React from "react";

function Competences() {
  const competences = [
    "Analyse des besoins techniques des clients",
    ` Accompagnement des clients dans l’utilisation de produits ou
          d’équipements`,
    "Collaboration avec des équipes pour résoudre des problèmes techniques",
    " À l’aise avec les outils informatiques",
    "Excellente communication écrite et orale",
  ];
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
                        <h3 className="title">{competence}</h3>
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
