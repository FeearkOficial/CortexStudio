import React from 'react';
import { WHATSAPP_LINK_AGENDAR } from 'data/constants';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2 className="cta-title">Precisa de um serviço específico?</h2>
        <p className="cta-subtitle">Entre em contato conosco pelo WhatsApp e solicitamos um orçamento personalizado para suas necessidades.</p>
        <a 
          href={WHATSAPP_LINK_AGENDAR} 
          className="btn btn-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
};

export default CallToAction;