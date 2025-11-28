import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBasketShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 

function Header({ cartCount }) {
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="header-logo-link">
          <img src="/images/logosabai.png" alt="logo" className="header-logo" />
        </Link>

        {/* NAV DESKTOP — toujours visible dès 769px */}
        <nav className="nav-desktop">
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header-icons">

          

          <Link to="/cart" className="header-icon-link cart-link">
            <FontAwesomeIcon icon={faBasketShopping} size="lg" />
            {cartCount > 0 && (
              <span className={`cart-badge ${animate ? "animate" : ""}`}>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Burger uniquement mobile */}
          <button 
            className="burger-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg"/>
          </button>
        </div>
      </div>

      {/* NAV MOBILE — visible uniquement si ouvert */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-icon-link"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
      </nav>

      <hr />
    </header>
  );
}

export default Header;
