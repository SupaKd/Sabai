import { Link } from "react-router-dom";

function Cart({ cart, changeQty, removeItem, total }) {

  const format = (v) => new Intl.NumberFormat("fr-FR", { style:"currency", currency:"EUR" }).format(v);

  const updateQty = (id, qty, type) => {
    if (type === "inc" && qty < 99) changeQty(id, qty + 1);
    if (type === "dec" && qty > 1) changeQty(id, qty - 1);
  };

  return (
    <main className="cart">

      {/* HEADER */}
      <header className="cart-header">
        <h2>Mon panier</h2>

        {cart.length > 0 && (
          <Link to="/address" className="cart-btn-address">
            Renseigner l'adresse de livraison
          </Link>
        )}
      </header>

      {/* PANIER VIDE */}
      {cart.length === 0 && (
        <p className="cart-empty">Votre panier est vide.</p>
      )}

      {/* TOTAL TOP */}
      {cart.length > 0 && (
        <div className="cart-total">
          Total : <strong>{format(total)}</strong>
        </div>
      )}

      {/* LISTE PRODUITS */}
      <div className="cart-list">
        {cart.map((item) => (
          <article key={item.id} className="cart-item">

            <img src={item.image} alt={item.name} className="cart-image" />

            <div className="cart-info">

              <div className="cart-text">
                <p className="cart-name">{item.name}</p>
                <p className="cart-description">{item.description}</p>
                <p className="cart-price">Prix : {format(item.price)}</p>
              </div>

              {/* QTY CONTROLLER */}
              <div className="cart-qty">
                <button onClick={() => updateQty(item.id, item.qty, "dec")}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty, "inc")}>+</button>
              </div>

              <p className="cart-subtotal">Sous-total : {format(item.price * item.qty)}</p>

              <button className="cart-remove" onClick={() => removeItem(item.id)}>
                Supprimer
              </button>

            </div>

          </article>
        ))}
      </div>

      {/* ACTIONS GLOBALS */}
      {cart.length > 0 && (
        <div className="cart-actions">
          <button className="cart-clear" onClick={() => removeItem("all")}>
            Vider le panier
          </button>
        </div>
      )}

      {/* RETOUR */}
      <Link to="/" className="cart-back">
        Retour au menu
      </Link>

    </main>
  );
}

export default Cart;
