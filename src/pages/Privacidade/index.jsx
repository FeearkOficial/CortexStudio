
import React from 'react';
import { Shield } from 'lucide-react';
import QAPair from 'components/privacy/QAPair';
import InfoBubble from 'components/privacy/InfoBubble';
import { qaData, rightsBubbles } from 'data/privacyPolicyData';
import './style.css';



const Privacidade = () => {
  return (
    <>
      <main className="container">
        <div className="privacy-layout-container">
          <header className="privacy-header">
            <div className="privacy-title-block">
              <h1>Política de Privacidade</h1>
            </div>
            <div className="privacy-security-message">
              <Shield className="icon" />
              <p>Sua privacidade e segurança são nossa prioridade.</p>
            </div>
          </header>
          <section className="privacy-qa-section">
            {qaData.map((item, index) => (
              <QAPair key={index} question={item.question} answer={item.answer} classNamePrefix="privacy-qa" />
            ))}
          </section>

          <h2 className='h2color'>Seus Direitos (LGPD)</h2>
          <section className="privacy-bubbles-section">
            {rightsBubbles.map((item, index) => (
              <InfoBubble
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                classNamePrefix="privacy-info"
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Privacidade;