import React from "react";
import RecipeReviewCard from "../../components/card";


const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>
          About <span>Levicey</span>
        </h1>
        <p>
          Levicey is a modern keyboard brand built for gamers, developers and
          creators who demand precision, durability and style.
        </p>
      </section>

      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Levicey was founded with a simple mission: to create keyboards that
            feel as good as they look. We combine cutting-edge technology with
            premium materials to deliver a typing experience that inspires
            performance.
          </p>
        </div>
        <div className="story-box" />
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We constantly experiment with new switch technologies and designs.
            </p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              Every Levicey keyboard is tested for durability and performance.
            </p>
          </div>
          <div className="value-card">
            <h3>Design</h3>
            <p>
              We craft minimalist and futuristic designs that stand out.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Experience the Future of Typing</h2>
        <p>
          Join thousands of users who trust Levicey keyboards worldwide.
        </p>
        <button>Explore Our Keyboards</button>
      </section>
      <RecipeReviewCard/>
    </div>
  );
};

export default About;
