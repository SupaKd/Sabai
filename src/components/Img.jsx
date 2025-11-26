import React from "react";
import { Link } from "react-router-dom";

export default function Img() {
  const services = [
    { id: 1, nom: "Sushi" },
    { id: 2, nom: "Sandwich" },
    { id: 3, nom: "Bowls" },
    { id: 4, nom: "Maki" },
  ];

  return (
    <section className="services">
      <div className="services-layout">
        <div className="left">
          {services[0] && (
            <div className="service-card large">
              <img src="/images/logo.jpg" alt={services[0].nom} />
              <h3>{services[0].nom}</h3>
            </div>
          )}
        </div>

        <div className="right">
          {services[1] && (
            <div className="service-card small">
              <img src="/images/logo.jpg" alt={services[1].nom} />
              <h3>{services[1].nom}</h3>
            </div>
          )}

          <div className="double">
            {services[2] && (
              <div className="service-card small">
                <img src="/images/logo.jpg" alt={services[2].nom} />
                <h3>{services[2].nom}</h3>
              </div>
            )}

            {services[3] && (
              <div className="service-card small">
                <img src="/images/logo.jpg" alt={services[3].nom} />
                <h3>{services[3].nom}</h3>
              </div>
            )}
          </div>

          <Link to="/reservations">
            <button className="rdv-btn">Commander</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
