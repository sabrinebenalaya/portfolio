import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Middleware/api";

function AddCompetence() {



   
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const adminId = useParams();
  console.log("adminId", adminId);
  const [formData, setFormData] = useState({
    name: "",
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
     const nameValid = validateField("name", formData.name);

     if (
      !nameValid 
    ) {
      return;
    }
setIsSubmitting(true);
  try {

    const id = adminId.id;
    const response = await api.post(`/admin/competence/add/${id}`, formData);
          setShowSuccess(true);
    setFormData({
        name: ""
       
      });
      setErrors({});

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
  } catch (error) {
    console.log(error)
  }finally {
      setIsSubmitting(false);
    }
    
  };

  return (
 
  


       <div className="form-container">
      <div className="form-header">
        <h2>🎓 Add a competence </h2>
        <p>Remplissez les informations ci-dessous</p>
      </div>

      {showSuccess && (
        <div className="success-message">
          ✓ Competence ajoutée avec succès !
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? "error" : ""}`}>
          <label htmlFor="name">Competence </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Outil bureautique"
            disabled={isSubmitting}
          />
          <span className="error-message">Competence is required</span>
        </div>



        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Ajouter la Competence"}
        </button>
      </form>
    </div>
  );
}

export default AddCompetence;
