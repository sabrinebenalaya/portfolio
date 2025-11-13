import React, { useState } from "react";
import { X, Plus, Upload, Github, ExternalLink } from "lucide-react";
import "../styles/AddProject.css";
import api from "../../Middleware/api";
import { useParams } from "react-router-dom";
function AddProject() {
  const idAdmin = useParams();
 const [formData, setFormData] = useState({
    name: "",
    description: "",
    linkGit: "",
    linkDep: "", 
    imageUrl: null,
    technologies: []
  });
  const [currentTech, setCurrentTech] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        imageUrl: file
      });
      
      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTechnology = (e) => {
    e.preventDefault();
    if (currentTech.trim() !== "") {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, currentTech.trim()]
      });
      setCurrentTech("");
    }
  };

  const handleRemoveTechnology = (indexToRemove) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, index) => index !== indexToRemove)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    // Ici, ajoutez votre logique d'envoi au backend
     const formDataToSend = new FormData();
     formDataToSend.append('name', formData.name);
     formDataToSend.append('description', formData.description);
     formDataToSend.append('linkGit', formData.linkGit);
    formDataToSend.append('linkDep', formData.linkDep);
     formDataToSend.append('technologies', JSON.stringify(formData.technologies));
     formDataToSend.append('imageUrl', formData.imageUrl);
     formDataToSend.append('idAdmin', idAdmin.id);
    console.log("formDataToSend",formDataToSend.get('name'));
    console.log("idAdmin",idAdmin);

   const response =  await api.post('/admin/project',  formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
   console.log("rr",response);
  };


  return (
  <div className="addProjectContainer">
      <div className="formCard">
        <h1 className="formTitle">Ajouter un nouveau projet</h1>
        <p className="formSubtitle">Remplissez les informations de votre projet</p>

        <form onSubmit={handleSubmit} className="projectForm">
          {/* Project Name */}
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">
              Nom du Projet
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Mon Super Projet"
              value={formData.name}
              onChange={handleChange}
              className="formInput"
              required
            />
          </div>

          {/* Description */}
          <div className="formGroup">
            <label htmlFor="description" className="formLabel">
              Description
            </label>
            <textarea
              rows="5"
              name="description"
              id="description"
              placeholder="Décrivez votre projet en détail..."
              value={formData.description}
              onChange={handleChange}
              className="formTextarea"
              required
            />
          </div>

          {/* Links Row */}
          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="linkGit" className="formLabel">
                <Github size={18} />
                Lien GitHub
              </label>
              <input
                type="url"
                name="linkGit"
                id="linkGit"
                placeholder="https://github.com/..."
                value={formData.linkGit}
                onChange={handleChange}
                className="formInput"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="linkDep" className="formLabel">
                <ExternalLink size={18} />
                Lien Déploiement
              </label>
              <input
                type="url"
                name="linkDep"
                id="linkDep"
                placeholder="https://monprojet.com"
                value={formData.linkDep}
                onChange={handleChange}
                className="formInput"
                required
              />
            </div>
          </div>

          {/* Technologies */}
          <div className="formGroup">
            <label className="formLabel">Technologies Utilisées</label>
            <div className="techInputWrapper">
              <input
                type="text"
                name="technologie"
                placeholder="Ex: React, Node.js, MongoDB..."
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                className="formInput techInput"
              />
              <button
                type="button"
                onClick={handleAddTechnology}
                className="addTechButton"
              >
                <Plus size={20} />
                Ajouter
              </button>
            </div>

            {/* Liste des technologies */}
            {formData.technologies.length > 0 && (
              <div className="techList">
                {formData.technologies.map((tech, index) => (
                  <span key={index} className="techBadge">
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTechnology(index)}
                      className="removeTechButton"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image Upload */}
          <div className="formGroup">
            <label className="formLabel">
              <Upload size={18} />
              Image du Projet
            </label>
            <div className="imageUploadWrapper">
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={handleImageChange}
                className="fileInput"
                required
              />
              <label htmlFor="imageUrl" className="fileLabel">
                <Upload size={24} />
                <span>Cliquez pour uploader une image</span>
                <span className="fileHint">PNG, JPG ou WEBP (MAX. 5MB)</span>
              </label>
            </div>

            {/* Preview Image */}
            {previewImage && (
              <div className="imagePreview">
                <img src={previewImage} alt="Preview" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submitButton">
            <Plus size={20} />
            Créer le Projet
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
