import "../styles/Contact.css";
import Button from "../Atom/Button";
function Contact() {
  return (
    
      <div className="contact-container">
        <h1>Contactez-moi</h1>
      

        <form className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="L'objet de votre message"
            />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Votre message..."
            />
          </div>
  <Button children="Envoyer" className="suggestion-btn" />
         
        </form>
      </div>
  );
}

export default Contact;
