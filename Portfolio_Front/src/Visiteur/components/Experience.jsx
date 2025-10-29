import React from "react";

function Experience() {
  const experiences = [
    {
      year: "DEPUIS 2017",
      post: "CONSEILLERE CLIENT",
      societe: "TELEPERFORMANCE, TUNISIE",
      urlSociete: "https://www.tp.com/fr-tn/emplacements/tunisia/",
      description: `J’ai acquis une expérience en assistance commerciale et technique en
            représentant plusieurs fournisseurs d’accès à Internet, ce qui m’a
            permis de développer des compétences en relation client, en
            résolution de problèmes et en accompagnement personnalisé.`,
    },
    {
      year: "DEPUIS 2017",
      post: "CONSEILLERE CLIENT",
      societe: "TELEPERFORMANCE, TUNISIE",
      urlSociete: "https://www.tp.com/fr-tn/emplacements/tunisia/",
      description: `J’ai acquis une expérience en assistance commerciale et technique en
            représentant plusieurs fournisseurs d’accès à Internet, ce qui m’a
            permis de développer des compétences en relation client, en
            résolution de problèmes et en accompagnement personnalisé.`,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="header">
            <h2>Experience</h2>
            <div className="headerLine"></div>
          </div>

          <div className="list">
            <div className="itemsContainer">
              {experiences.map((experience, index) => (
                <div key={index} className="item">
                  <div className="timelinePoint"></div>

                  <div className="content">
                    <div className="contentHeader">
                      <span className="yearBadge">{experience.year}</span>
                      <h3 className="title">{experience.post}</h3>
                    </div>
                    <a href={experience.urlSociete} target="_blank">
                      {experience.societe}
                    </a>
                    <p className="description">{experience.description}</p>
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

export default Experience;
