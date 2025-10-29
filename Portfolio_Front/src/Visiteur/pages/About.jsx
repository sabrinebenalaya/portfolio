import React from "react";
import myPhoto from "../../assets/myPhoto.png";
import "../styles/About.css";
import Formation from "../components/Formation";
import Experience from "../components/Experience";
import Competences from "../components/Competences";
function About() {
  return (
    <div>
      <div className="header_part">
        <div className="photoPart">
          <img src={myPhoto} alt="myPhoto" id="my_photo" />
        </div>
        <div className="infoPart">
          <h1>Sabrine Duval </h1>
          <ul>
            <li>
              <em> Adresse : </em>Résidence des grands jardins, 95130
              Franconville
            </li>
            <li>
              <em>Telephone : </em> +330664628221
            </li>
            <li>
              <em>Email : </em>sabrineduval20@hotmail.com{" "}
            </li>

            <li>
              <em>About me: </em> Professionnelle avec 8 ans d'expérience dans
              le domaine des télécommunications, je dispose également de solides
              connaissances en informatique. Dotée d’un excellent sens de
              l’écoute, j’apprécie particulièrement le contact humain et j’ai à
              cœur d’apporter un accompagnement de qualité.{" "}
            </li>
          </ul>
        </div>
      </div>
      <Formation />
      <Experience />
      <Competences />
    </div>
  );
}

export default About;
