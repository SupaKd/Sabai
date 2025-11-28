import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"; 
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 

function Header({ cartCount }) {
  const [animate, setAnimate] = useState(false);

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

        <div className="header-icons">
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-icon-link"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <Link to="/cart" className="header-icon-link cart-link">
            <FontAwesomeIcon icon={faBasketShopping} size="lg" />
            {cartCount > 0 && (
              <span className={`cart-badge ${animate ? "animate" : ""}`}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      <hr />
    </header>
  );
}

export default Header;
