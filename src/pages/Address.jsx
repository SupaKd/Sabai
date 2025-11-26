import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Address({ address, setAddress }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const cities = [
    { name: "Ferney-Voltaire", postalCode: "01210" },
    { name: "Gex", postalCode: "01170" },
    { name: "Saint-Genis-Pouilly", postalCode: "01630" },
    { name: "Divonne-les-Bains", postalCode: "01220" },
    { name: "Crozet", postalCode: "01170" },
    { name: "Cessy", postalCode: "01170" },
    { name: "Ornex", postalCode: "01210" },
  ];

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleCityChange = (e) => {
    const selected = cities.find(c => c.name === e.target.value);
    if (selected) {
      setAddress({ ...address, city: selected.name, postalCode: selected.postalCode });
    } else {
      setAddress({ ...address, city: "", postalCode: "" });
    }
  };

  const handleSubmit = () => {
    if (!isValid) {
      setError("Veuillez remplir tous les champs correctement.");
      return;
    }
    setError("");
    navigate("/checkout");
  };

  const isValid =
    address.name &&
    address.street &&
    address.city &&
    address.postalCode &&
    address.phone;

  return (
    <main className="address-container">
      <h2 className="address-title">Adresse de livraison</h2>
      {error && <p className="address-error">{error}</p>}

      <div className="form-group">
        <label>Nom :</label>
        <input className="form-input" type="text" name="name" value={address.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Téléphone :</label>
        <input className="form-input" type="text" name="phone" value={address.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Adresse :</label>
        <input className="form-input" type="text" name="street" value={address.street} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Ville :</label>
        <select className="form-input" name="city" value={address.city || ""} onChange={handleCityChange}>
          <option value="">-- Sélectionnez votre ville --</option>
          {cities.map(c => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Code postal :</label>
        <input className="form-input" type="text" name="postalCode" value={address.postalCode || ""} readOnly />
      </div>

      

      <button
        className={`btn ${isValid ? "btn-primary" : "btn-disabled"}`}
        onClick={handleSubmit}
        disabled={!isValid}
      >
        Continuer vers paiement
      </button>

      <Link className="link-back" to="/cart">Retour au panier</Link>
    </main>
  );
}

export default Address;
