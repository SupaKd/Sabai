import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <div className="confirmation-icon">
          <svg viewBox="0 0 52 52" className="confirmation-checkmark">
            <circle className="confirmation-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="confirmation-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        
        <h2 className="confirmation-title">Commande Confirmée !</h2>
        <p className="confirmation-message">
          Merci pour votre commande. Vous recevrez un email de confirmation.
        </p>
        
        <Link to="/" className="confirmation-link">Retour au menu</Link>
      </div>
    </div>
  );
}

export default Confirmation;