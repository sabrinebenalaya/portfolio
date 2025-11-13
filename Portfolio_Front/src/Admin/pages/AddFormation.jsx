import { useState } from "react";
import "../styles/AddFormation.css";
import api from "../../Middleware/api";

import { useParams } from "react-router-dom";

const AddFormation = () => {
  const adminId = useParams();
  const { id } = adminId;
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    description: "",
    id: id,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

    // Validation en temps réel si le champ a déjà une erreur
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
    // Valider tous les champs
    const yearValid = validateField("year", formData.year);
    const titleValid = validateField("title", formData.title);
    const descriptionValid = validateField("description", formData.description);

    if (!yearValid || !titleValid || !descriptionValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post(`/admin/formation/add/${id}`, formData);

      // Afficher le message de succès
      setShowSuccess(true);

      // Réinitialiser le formulaire
      setFormData({ year: "", title: "", description: "" });
      setErrors({});

      // Cacher le message après 3 secondes
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>🎓 Ajouter une Formation</h2>
        <p>Remplissez les informations ci-dessous</p>
      </div>

      {showSuccess && (
        <div className="success-message">✓ Formation ajoutée avec succès !</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.year ? "error" : ""}`}>
          <label htmlFor="year">📅 Année</label>
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
          <span className="error-message">L'année est requise</span>
        </div>

        <div className={`form-group ${errors.title ? "error" : ""}`}>
          <label htmlFor="title">📚 Titre de la Formation</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ex: Master en Informatique"
            disabled={isSubmitting}
          />
          <span className="error-message">Le titre est requis</span>
        </div>

        <div className={`form-group ${errors.description ? "error" : ""}`}>
          <label htmlFor="description">📝 Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Décrivez la formation, les compétences acquises..."
            maxLength="500"
            disabled={isSubmitting}
          />
          <span className="char-count">{formData.description.length}/500</span>
          <span className="error-message">La description est requise</span>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Ajouter la Formation"}
        </button>
      </form>
    </div>
  );
};

export default AddFormation;
