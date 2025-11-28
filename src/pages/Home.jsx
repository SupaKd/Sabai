// src/pages/Home.jsx
import Hero from "../components/Hero";
import Menu from "./Menu";

function Home({ addToCart }) {
  return (
    <main>

      <section className="hero-wrapper">
        <Hero />
        <div className="menu__images">
          <img src="/images/sushi.png" alt="" />
          <img src="/images/bowl.png" alt="" />
          <img src="/images/sand.png" alt="" />
        </div>

        <img
          src="/images/coriande.png"
          alt="Décoration"
          className="menu__overlay-image"
        />
      </section>

      <Menu addToCart={addToCart} />
    </main>
  );
}

export default Home;
