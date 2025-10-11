import React from 'react';
import './FeatureItem.css'; // Importa seu próprio estilo

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon-wrapper">
        <Icon className="feature-icon" />
      </div>
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-item-description">{description}</p>
    </div>
  );
};

export default FeatureItem;