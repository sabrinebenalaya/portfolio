import React from "react";
import "../styles/Contact.css"
function Contact() {
  return (
    <div >
      <div >
        <h1>Contactez-moi</h1>
        <p >
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>

        <form >
          <div >
            <label htmlFor="name">Nom complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Votre nom"
            />
          </div>

          <div >
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div >
            <label htmlFor="subject">Sujet *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="L'objet de votre message"
            />
          </div>

          <div >
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Votre message..."
            />
          </div>

          <button type="submit" >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
