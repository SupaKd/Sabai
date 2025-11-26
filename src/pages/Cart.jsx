import { Link } from "react-router-dom";

function Cart({ cart, changeQty, removeItem, total }) {
  const formatPrice = (value) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);

  const handleDecrease = (id, qty) => {
    if (qty > 1) changeQty(id, qty - 1);
  };

  const handleIncrease = (id, qty) => {
    if (qty < 99) changeQty(id, qty + 1);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Panier</h2>

      {cart.length === 0 && <p className="cart-empty">Votre panier est vide.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-category">{item.category}</p>
            <p className="cart-item-price">
              Prix unitaire : {formatPrice(item.price)}
            </p>
            <div className="cart-qty-control">
              <button onClick={() => handleDecrease(item.id, item.qty)}>-</button>
              <span className="cart-qty">{item.qty}</span>
              <button onClick={() => handleIncrease(item.id, item.qty)}>+</button>
            </div>
            <p className="cart-item-subtotal">Sous-total : {formatPrice(item.price * item.qty)}</p>
            <button onClick={() => removeItem(item.id)} className="cart-remove-btn">
              Supprimer
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-actions">
          <button onClick={() => removeItem("all")} className="cart-clear-btn">
            Vider le panier
          </button>
        </div>
      )}

      <h3 className="cart-total">Total : {formatPrice(total)}</h3>

      <Link to="/" className="cart-back-link">Retour au menu</Link>
      <br />
      {cart.length > 0 && <Link to="/address" className="cart-address-link">Entrer l'adresse de livraison</Link>}
    </div>
  );
}

export default Cart;
