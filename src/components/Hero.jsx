function Hero() {
  return (
    <section className="hero" aria-label="Section d'accueil">
      <div className="hero__video">
        <video className="hero__video-file" autoPlay loop muted playsInline>
          <source src="/video/bamboo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__logo-wrapper">
            <img 
              src="/images/logosabai.png" 
              alt="Logo Sabai" 
              className="hero__logo" 
            />
          </div>
          
          <div className="hero__text-content">
            <p className="hero__subtitle">
              C'est des recettes colorées, des produits frais, et une équipe motivée !
            </p>

            <a href="#menu" className="hero__cta" aria-label="Accéder au menu">
              COMMANDER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;