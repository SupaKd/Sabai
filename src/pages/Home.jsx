// src/pages/Home.jsx
import Hero from "../components/Hero";
import Menu from "./Menu";

function Home({ addToCart }) {
  return (
    <main>
      <Hero />

      <img
        src="/images/coriande.png"
        alt="Décoration"
        className="menu__overlay-image"
      />

      <Menu addToCart={addToCart} />
    </main>
  );
}

export default Home;
