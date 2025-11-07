import React from "react";
import { useParams } from "react-router-dom";

function AddCompetence() {


const {id} = useParams();
console.log("ID :", id);
  return (
    <div>
      <form action="">
        <label htmlFor="">Add competence</label>
        <input type="text" name="competence" />
        <button>add competence</button>
      </form>
    </div>
  );
}

export default AddCompetence;
