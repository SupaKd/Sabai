import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout({ total, address, setCart }) {
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
  });

  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const valid =
      payment.cardName &&
      payment.cardNumber.replace(/\s/g, "").length === 16 &&
      /^[0-1][0-9]\/[0-9]{2}$/.test(payment.expiration) &&
      payment.cvc.length >= 3;

    setIsValid(valid);
  }, [payment]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      let digits = value.replace(/\D/g, "").slice(0, 16);
      const formatted = digits.replace(/(.{4})/g, "$1 ").trim();
      setPayment({ ...payment, cardNumber: formatted });
    } else if (name === "expiration") {
      let digits = value.replace(/\D/g, "").slice(0, 4);
      if (digits.length >= 3) digits = digits.slice(0, 2) + "/" + digits.slice(2);
      setPayment({ ...payment, expiration: digits });
    } else if (name === "cvc") {
      const digits = value.replace(/\D/g, "").slice(0, 4);
      setPayment({ ...payment, cvc: digits });
    } else {
      setPayment({ ...payment, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!isValid) {
      setError("Veuillez remplir correctement tous les champs de paiement.");
      return;
    }

    setError("");

    // 🔥 Réinitialisation du panier
    localStorage.removeItem("cart");
    setCart([]);

    // Redirection
    navigate("/confirmation");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Paiement</h2>
      <h3 className="checkout-total">Total : {total} €</h3>

      <h4 className="checkout-address-title">Adresse de livraison</h4>
      <p className="checkout-address">
        {address.name}
        <br />
        {address.street}
        <br />
        {address.city} ({address.postalCode})
        <br />
        Tel : {address.phone}
      </p>

      {error && <p className="checkout-error">{error}</p>}

      <div className="checkout-form">
        <div className="checkout-field">
          <label className="checkout-label">Nom sur la carte :</label>
          <br />
          <input
            className="checkout-input"
            type="text"
            name="cardName"
            placeholder="Nom Prénom"
            value={payment.cardName}
            onChange={handleChange}
          />
        </div>

        <div className="checkout-field">
          <label className="checkout-label">Numéro de carte :</label>
          <br />
          <input
            className="checkout-input"
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={payment.cardNumber}
            onChange={handleChange}
          />
        </div>

        <div className="checkout-field">
          <label className="checkout-label">Date d'expiration :</label>
          <br />
          <input
            className="checkout-input"
            type="text"
            name="expiration"
            placeholder="MM/AA"
            value={payment.expiration}
            onChange={handleChange}
          />
        </div>

        <div className="checkout-field">
          <label className="checkout-label">CVC :</label>
          <br />
          <input
            className="checkout-input"
            type="password"
            name="cvc"
            placeholder="123"
            value={payment.cvc}
            onChange={handleChange}
          />
        </div>

        <br />
        <button
          className={`checkout-button ${isValid ? "active" : "disabled"}`}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Payer
        </button>
      </div>

      <br />
      <Link className="checkout-back-link" to="/address">
        Modifier l'adresse
      </Link>
    </div>
  );
}

export default Checkout;
