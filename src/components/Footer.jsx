import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaClock, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Section principale */}
        <div className="footer__main">
          
          {/* Informations contact */}
          <div className="footer__section">
            <div className="footer__logo">
              <img src="/images/logosabai.png" alt="Logo Sabai" className="footer__logo-image" />
              <span className="footer__logo-subtitle">Asian Cuisine</span>
            </div>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__icon" />
                <span>123 Rue du Restaurant, 01170 Gex</span>
              </div>
              <div className="footer__contact-item">
                <FaPhone className="footer__icon" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__icon" />
                <span>contact@sabai-restaurant.com</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="footer__section">
            <h4 className="footer__title">
              <FaClock className="footer__title-icon" />
              Nos Horaires
            </h4>
            <div className="footer__schedule">
              <div className="footer__schedule-item">
                <span className="footer__days">Lun - Ven</span>
                <span className="footer__hours">11h – 22h</span>
              </div>
              <div className="footer__schedule-item">
                <span className="footer__days">Sam - Dim</span>
                <span className="footer__hours">12h – 23h</span>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="footer__section">
            <h4 className="footer__title">Suivez-nous</h4>
            <p className="footer__social-text">Rejoignez notre communauté</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
             
              <a href="#" className="footer__social-link" aria-label="TikTok">
                <FaTiktok />
              </a>
             
            </div>
          </div>

        </div>

        {/* Section basse */}
        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__copyright">
            <p>
              © 2025 SABAI Restaurant. Fait avec <FaHeart className="footer__heart" /> à Thoiry.
            </p>
            <div className="footer__legal">
              <a href="#">Mentions légales</a>
              <span>•</span>
              <a href="#">Politique de confidentialité</a>
              <span>•</span>
              <a href="#">CGV</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;