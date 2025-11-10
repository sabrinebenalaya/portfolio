import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Middleware/api";

function AddCompetence() {
  const { id } = useParams();

  const [competence, setCompetence] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("competence", competence);
    console.log("ID :", id);
    const response = await api.post("/admin/competence/add", {
      competence,
      id,
    });
    console.log("response :", response);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add competence</label>
        <input
          type="text"
          name="competence"
          value={competence}
          onChange={(e) => setCompetence(e.target.value)}
        />
        <button type="sumbit">add competence</button>
      </form>
    </div>
  );
}

export default AddCompetence;
