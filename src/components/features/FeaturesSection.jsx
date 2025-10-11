
import React from 'react';
import { featuresData } from 'data'; 
import './FeaturesSection.css';

const FeaturesSection = () => {
  const filteredFeatures = featuresData.filter(feature => feature.showOnServices);

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-title">
          Nossas <span className="gradient-text">Garantias</span>
        </h2>
        <div className="features-grid">
          {filteredFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" />
              </div>
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;