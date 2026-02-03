import React from "react";


const Keyboards: React.FC = () => {
  return (
    <div className="keyboards">
      {/* HERO */}
      <section className="keyboards-hero">
        <h1>
          Our <span>Keyboards</span>
        </h1>
        <p>
          Discover precision-built keyboards designed for gamers, developers
          and creators who demand performance and style.
        </p>
      </section>

      {/* FEATURE */}
      <section className="keyboards-feature">
        <div className="feature-text">
          <h2>Built for Performance</h2>
          <p>
            Every Levicey keyboard is engineered with high-quality switches,
            premium materials and ultra-fast response to elevate your workflow
            and gaming experience.
          </p>
        </div>
        <div className="feature-box" />
      </section>

      {/* PRODUCTS */}
      <section className="keyboards-list">
        <h2>Popular Models</h2>
        <div className="keyboard-grid">
          <div className="keyboard-card">
            <h3>Levicey Core</h3>
            <p>
              Minimalist mechanical keyboard with fast linear switches.
            </p>
          </div>
          <div className="keyboard-card">
            <h3>Levicey Pro</h3>
            <p>
              Premium aluminum build with customizable RGB lighting.
            </p>
          </div>
          <div className="keyboard-card">
            <h3>Levicey Ultra</h3>
            <p>
              Ultimate performance keyboard for competitive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="keyboards-cta">
        <h2>Choose Your Perfect Keyboard</h2>
        <p>
          Upgrade your setup with a keyboard built to last and perform.
        </p>
        <button>View All Models</button>
      </section>
    </div>
  );
};

export default Keyboards;
