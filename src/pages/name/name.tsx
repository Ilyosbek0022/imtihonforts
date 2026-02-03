import React from "react";


const Levioca: React.FC = () => {
  return (
    <div className="levioca">
      {/* HERO */}
      <section className="levioca-hero">
        <h1>
          What is <span>Levioca</span>?
        </h1>
        <p>
          Levioca is more than a name. It represents innovation, identity and
          the evolution of modern technology-driven design.
        </p>
      </section>

      {/* ORIGIN */}
      <section className="levioca-origin">
        <div className="origin-text">
          <h2>The Meaning</h2>
          <p>
            The name <strong>Levioca</strong> is a fusion of two ideas: <br />
            <strong>“Levi”</strong> — symbolizing strength, leadership and
            elevation, and <strong>“Oca”</strong> — derived from ancient words
            meaning origin, core and foundation.
          </p>
        </div>
        <div className="origin-box" />
      </section>

      {/* STORY */}
      <section className="levioca-story">
        <h2>Where It Comes From</h2>
        <p>
          Levioca was created to represent a brand that stands at the intersection
          of technology and creativity. The name reflects a balance between power
          and elegance — short, memorable and future-oriented.
        </p>
      </section>

      {/* VALUES */}
      <section className="levioca-values">
        <h2>What Levioca Stands For</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Identity</h3>
            <p>
              A unique name built to stand out and remain recognizable.
            </p>
          </div>
          <div className="value-card">
            <h3>Vision</h3>
            <p>
              Designed with the future in mind, not the present.
            </p>
          </div>
          <div className="value-card">
            <h3>Foundation</h3>
            <p>
              A strong core philosophy behind every product and design.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="levioca-cta">
        <h2>Levioca is the Core</h2>
        <p>
          A name that defines purpose, origin and direction.
        </p>
      </section>
    </div>
  );
};

export default Levioca;
