import { useState } from "react";
import { products } from "../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Menu({ addToCart }) {
  const [added, setAdded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [previewImage, setPreviewImage] = useState(null);

  const categories = ["Toutes", ...new Set(products.map((p) => p.category))];

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 900);
  };

  const filteredProducts =
    selectedCategory === "Toutes"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const groupedProducts = categories
    .filter((c) => c !== "Toutes")
    .map((cat) => ({
      category: cat,
      items: filteredProducts.filter((p) => p.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main className="menu">
      <h2 className="menu__title">Notre Carte</h2>

      {/* Catégories */}
      <div className="menu__categories-wrapper">
        <div className="menu__categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__category-btn ${
                selectedCategory === cat ? "is-active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Groupes de produits */}
      <section className="menu__groups" id="description">
        {groupedProducts.map((group) => (
          <section key={group.category} className="menu__group">
            <h2 className="menu__group-title">{group.category}</h2>

            <div className="menu__items">
              {group.items.map((prod) => (
                <article key={prod.id} className="menu__card">
                  <div className="menu__card-body">
                    <h3 className="menu__card-name">{prod.name}</h3>
                    <p className="menu__card-description">{prod.description}</p>

                    <div className="menu__card-footer">
                      <span className="menu__price">
                        {prod.price.toLocaleString("fr-FR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        €
                      </span>

                      <button
                        className={`menu__add-btn ${
                          added === prod.id ? "is-added" : ""
                        }`}
                        onClick={() => handleAdd(prod)}
                      >
                        {added === prod.id ? (
                          "✓"
                        ) : (
                          <FontAwesomeIcon icon={faPlus} />
                        )}
                      </button>
                    </div>
                  </div>

                  <figure
                    className="menu__card-image"
                    onClick={() => setPreviewImage(prod.image)}
                  >
                    <img src={prod.image} alt={prod.name} />
                  </figure>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
      {previewImage && (
        <div className="menu__overlay" onClick={() => setPreviewImage(null)}>
          <div className="menu__image-preview">
            <img src={previewImage} alt="zoom" />
          </div>
        </div>
      )}
    </main>
  );
}

export default Menu;
