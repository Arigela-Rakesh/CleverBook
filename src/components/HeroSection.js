import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <h1 className="hero-title">Innovate Your Inventory with CleverBooks</h1>
        <p className="hero-subtitle">Effortlessly manage and optimize your inventory with cutting-edge solutions.</p>
        <a href="#cta" className="btn btn-primary">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
