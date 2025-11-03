import React, { useMemo, useState, useEffect } from "react";
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import {URL_Localhost} from "../../config.jsx"
function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
console.log('URL_Localhost',URL_Localhost)

   const [recentProjects, setRecentProjects] = useState([]);
  useEffect(() => {
  axios.get(URL_Localhost)
  .then (response=>{
      setRecentProjects(response.data)
    })
  },[]);
  

 
console.log("recentProjects", recentProjects)

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            SABRINE <span className="gradient-text">DUVAL</span>
          </h1>
          <p className="hero-subtitle">
            Découvrez mes projets les plus récents et innovants
          </p>
        </div>
      </div>

      <div className="enhanced-carousel-wrapper">
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          className="enhanced-carousel"
          interval={5000}
          pause="hover"
        >
          {recentProjects.map((project, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-container">
                <img
                  className="carousel-image"
                  src={project.imageUrl}
                  alt={project.name}
                />
                <div className="image-overlay"></div>
              </div>

              <Carousel.Caption className="custom-caption">
                <div className="caption-content">
                  <span className="project-badge">Projet #{index + 1}</span>
                  <h2 className="project-title">{project.name.toUpperCase()}</h2>
                  <span className="project-date">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {new Date(project.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                 

                
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Indicateur de progression personnalisé */}
        <div className="carousel-progress">
          {recentProjects.map((_, index) => (
            <div
              key={index}
              className={`progress-item ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="progress-bar"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Section statistiques */}
      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">{recentProjects.length}</span>
          <span className="stat-label">Projets Réalisés</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {new Set(recentProjects.flatMap((p) => p.technologies)).size}
          </span>
          <span className="stat-label">Technologies</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Satisfaction</span>
        </div>
      </div>
    </div>
  );
}

export default Home;