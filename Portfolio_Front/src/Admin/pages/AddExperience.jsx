import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/AddFormation.css";
import api from "../../Middleware/api";

function AddExperience() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const adminId = useParams();
  const {id}=adminId;
  const [formData, setFormData] = useState({
    year: "",
    post: "",
    societe: "",
    urlSociete: "",
    description: "",
    id: adminId.id,
  });

  const validateField = (name, value) => {
    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [name]: true }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, [name]: false }));
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const yearValid = validateField("year", formData.year);
    const postValid = validateField("post", formData.post);

    const societeValid = validateField("societe", formData.societe);
    const descriptionValid = validateField("description", formData.description);

    if (
      !yearValid ||
      !societeValid ||
      !postValid ||
      !descriptionValid
    ) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.post(`/admin/experience/add/${id}`, formData);
      setShowSuccess(true);

      // Réinitialiser le formulaire
      setFormData({
        year: "",
        post: "",
        societe: "",
        urlSociete: "",
        description: "",
      });
      setErrors({});

      // Cacher le message après 3 secondes
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>🎓 Ajouter une Experience</h2>
        <p>Remplissez les informations ci-dessous</p>
      </div>

      {showSuccess && (
        <div className="success-message">
          ✓ Experience ajoutée avec succès !
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.year ? "error" : ""}`}>
          <label htmlFor="year">📅 Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: 2023-2024"
            disabled={isSubmitting}
          />
          <span className="error-message">Year is required</span>
        </div>

        <div className={`form-group ${errors.post ? "error" : ""}`}>
          <label htmlFor="post">📚 Position held</label>
          <input
            type="text"
            id="post"
            name="post"
            value={formData.post}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: Technicien Informatique"
            disabled={isSubmitting}
          />
          <span className="error-message">The position held id required</span>
        </div>

        <div className={`form-group ${errors.societe ? "error" : ""}`}>
          <label htmlFor="post">📚 Name of companie</label>
          <input
            type="text"
            id="societe"
            name="societe"
            value={formData.societe}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: Teleperformance"
            disabled={isSubmitting}
          />
          <span className="error-message">The name of company is required</span>
        </div>

        <div className={`form-group ${errors.urlSociete ? "error" : ""}`}>
          <label htmlFor="post">📚 Url Company</label>
          <input
            type="text"
            id="urlSociete"
            name="urlSociete"
            value={formData.urlSociete}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: www.teleperformance.com"
            disabled={isSubmitting}
          />
        </div>

        <div className={`form-group ${errors.description ? "error" : ""}`}>
          <label htmlFor="description">📝 Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Describe the post occupied in this experience."
            maxLength="500"
            disabled={isSubmitting}
          />
          <span className="char-count">{formData.description.length}/500</span>
          <span className="error-message">La description est requise</span>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Ajouter l'experience"}
        </button>
      </form>
    </div>
  );
}

export default AddExperience;
