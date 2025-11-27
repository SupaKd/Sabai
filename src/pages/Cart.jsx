import { Link } from "react-router-dom";

function Cart({ cart, changeQty, removeItem, total }) {
  const format = (v) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(v);

  const updateQty = (id, qty, type) => {
    if (type === "inc" && qty < 99) changeQty(id, qty + 1);
    if (type === "dec" && qty > 1) changeQty(id, qty - 1);
  };

  return (
    <main className="cart container">

      {/* ------------------------ HEADER ------------------------ */}
      <header className="cart__header">
        <h2 className="cart__title">Mon panier</h2>

        {cart.length > 0 && (
          <Link to="/address" className="cart__address-btn">
            Renseigner l'adresse de livraison
          </Link>
        )}
      </header>

      {/* ---------------------- PANIER VIDE ---------------------- */}
      {cart.length === 0 && (
        <p className="cart__empty">Votre panier est vide.</p>
      )}

      {/* ---------------------- TOTAL TOP ------------------------ */}
      {cart.length > 0 && (
        <section className="cart__total">
          Total : <strong>{format(total)}</strong>
        </section>
      )}

      {/* ------------------- LISTE DES PRODUITS ------------------ */}
      <section className="cart__list">
        {cart.map((item) => (
          <article key={item.id} className="cart-item">

            <img
              src={item.image}
              alt={item.name}
              className="cart-item__image"
            />

            <div className="cart-item__content">

              <div className="cart-item__info">
                <p className="cart-item__name">{item.name}</p>
                <p className="cart-item__description">{item.description}</p>
                <p className="cart-item__price">
                  Prix : {format(item.price)}
                </p>
              </div>

              {/* ----- QUANTITÉ ----- */}
              <div className="cart-item__qty">
                <button
                  className="cart-item__qty-btn"
                  onClick={() => updateQty(item.id, item.qty, "dec")}
                >
                  -
                </button>

                <span className="cart-item__qty-value">{item.qty}</span>

                <button
                  className="cart-item__qty-btn"
                  onClick={() => updateQty(item.id, item.qty, "inc")}
                >
                  +
                </button>
              </div>

              <p className="cart-item__subtotal">
                Sous-total : {format(item.price * item.qty)}
              </p>

              <button
                className="cart-item__remove"
                onClick={() => removeItem(item.id)}
              >
                Supprimer
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* -------------------- ACTIONS GLOBALES ------------------ */}
      {cart.length > 0 && (
        <footer className="cart__actions">
          <button
            className="cart__clear-btn"
            onClick={() => removeItem("all")}
          >
            Vider le panier
          </button>
        </footer>
      )}

      {/* ------------------------- RETOUR ------------------------ */}
      <Link to="/" className="cart__back">
        Retour au menu
      </Link>
    </main>
  );
}

export default Cart;
