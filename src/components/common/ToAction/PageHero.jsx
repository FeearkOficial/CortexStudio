import React from 'react';
import './PageHero.css';

const PageHero = ({ title, gradientText, subtitle }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="page-hero-title">
          {title} <span className="gradient-text">{gradientText}</span>
        </h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;