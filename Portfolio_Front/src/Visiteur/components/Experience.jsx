import React, { useState, useEffect } from "react";
import { URL_Localhost } from "../../config";
import axios from "axios";
function Experience() {
  const [experiences, setExperiences] = useState([]);

    const fetchExperiences = async (id) => {
      try {
        const response = await axios.get(`${URL_Localhost}admin/get-profile`);
        if (!response || !response.data.experiencesDetails) {
          console.log("erreur de donne");
        } else {
          setExperiences(response.data.experiencesDetails);

        }
      } catch (error) {
        console.error("Erreur:", error.response?.data || error.message);
        throw error;
      }
    };
  
    useEffect(() => {
      fetchExperiences();

    }, []);


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
