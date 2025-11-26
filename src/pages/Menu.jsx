import { useState } from "react";
import { products } from "../data/products";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Menu({ addToCart }) {
  const [added, setAdded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = ["Toutes", ...new Set(products.map((p) => p.category))];

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 900);
  };

  const filtered =
    selectedCategory === "Toutes"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const grouped = categories
    .filter((c) => c !== "Toutes")
    .map((cat) => ({
      category: cat,
      items: filtered.filter((p) => p.category === cat)
    }))
    .filter((g) => g.items.length > 0);

  return (
    <main className="menu">
      <Hero />
      <img
  src="/images/coriande.png"
  alt="Décoration"
  className="overlay-image"
/>
      

      <h2 className="menu__title">Notre Carte</h2>

      {/* Sélecteur Catégories */}
      <div className="menu__categories-wrapper">
        <div className="menu__categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__cat-btn ${selectedCategory === cat && "active"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Affichage regroupé */}
      <section className="menu__grouped">
        {grouped.map((block) => (
          <div key={block.category} className="menu__block">
            <h2 className="menu__block-title">{block.category}</h2>

            <div className="menu__items">
              {block.items.map((prod, i) => (
                <motion.article
                  key={prod.id}
                  className="menu__card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05, type: "spring", stiffness: 80 }}
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <figure className="menu__card-img">
                    <img src={prod.image} alt={prod.name} />
                  </figure>

                  <div className="menu__card-body">
                    <div className="menu__card-content">
                      <h3 className="menu__card-name">{prod.name}</h3>
                      <p className="menu__card-description">{prod.description}</p>
                    </div>

                    <div className="menu__price-row">
                      <span className="menu__price">{prod.price} €</span>
                      <button 
                        className={`menu__add ${added === prod.id ? "added" : ""}`}
                        onClick={() => handleAdd(prod)}
                      >
                        {added === prod.id ? "✔" : "Ajouter"}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Menu;