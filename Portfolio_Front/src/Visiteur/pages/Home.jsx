import React, { useMemo, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: "YouTube Clone",
      description:
        "Application moderne de streaming vidéo permettant de découvrir, regarder et partager des contenus multimédias avec une interface utilisateur intuitive et réactive.",
      linkGit: "https://github.com/",
      linkDep: "https://www.youtube.com/",
      imageUrl: "/assets/youtube.png",
      technologies: ["React", "TypeScript", "Redux", "SASS", "Node.js"],
      date: "2024-10-15",
    },
    {
      name: "Facebook Social",
      description:
        "Plateforme sociale complète permettant de connecter des personnes à travers le monde avec des fonctionnalités de messagerie, partage et interaction en temps réel.",
      linkGit: "https://github.com/",
      linkDep: "https://www.facebook.com/",
      imageUrl: "/assets/facebook.png",
      technologies: ["React", "GraphQL", "MongoDB", "Socket.io", "JWT"],
      date: "2024-10-29",
    },
    {
      name: "YouTube Pro",
      description:
        "Version avancée avec recommandations IA, téléchargement offline et expérience de visionnage personnalisée selon les préférences utilisateur.",
      linkGit: "https://github.com/",
      linkDep: "https://www.youtube.com/",
      imageUrl: "/assets/youtube.png",
      technologies: ["Next.js", "Python", "Machine Learning", "Docker", "AWS"],
      date: "2024-12-15",
    },
    {
      name: "Facebook Enterprise",
      description:
        "Solution professionnelle avec outils de modération avancés, analytics en temps réel et intégration d'API tierces pour les entreprises.",
      linkGit: "https://github.com/",
      linkDep: "https://www.facebook.com/",
      imageUrl: "/assets/facebook.png",
      technologies: [
        "React",
        "Microservices",
        "Kubernetes",
        "Redis",
        "Elasticsearch",
      ],
      date: "2024-11-29",
    },
  ];

  const recentProjects = useMemo(
    () => [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

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
                  <h2 className="project-title">{project.name}</h2>
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
                  <p className="project-description">{project.description}</p>

                  <div className="technologies-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.linkGit}
                      className="action-btn btn-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code Source
                    </a>
                    <a
                      href={project.linkDep}
                      className="action-btn btn-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Voir la Démo
                    </a>
                  </div>
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