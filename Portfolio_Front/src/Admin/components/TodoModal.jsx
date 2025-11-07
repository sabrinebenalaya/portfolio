import React from "react";
import "../styles/TodoModal.css"

const TodoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h2 className="modalTitle">Ma Todo List</h2>
          <button onClick={onClose} className="modalCloseButton">
            ×
          </button>
        </div>
        <div className="modalBody">
          <p>Contenu de la todo list ici...</p>
          {/* Ajoutez votre contenu de todo list ici */}
        </div>
      </div>
    </div>
  );
};

export default TodoModal;