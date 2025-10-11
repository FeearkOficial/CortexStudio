import React from 'react';
import { WHATSAPP_LINK_AGENDAR } from 'data/constants';
import './CallToAction.css';

const PlansToAction = () => {
    return (
        <section className="cta-section">
            <div className="container cta-container">
                <h2 className="cta-title">Pronto para renovar seu computador ?</h2>
                <p className="cta-subtitle">Escolha o plano ideia e tenha seu computador funcionando como novo.
                    Agendamento rápido pelo WhatsApp!
                </p>
                <a
                    href={WHATSAPP_LINK_AGENDAR}
                    className="btn btn-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contratar Agora
                </a>
            </div>
        </section>
    );
};

export default PlansToAction;