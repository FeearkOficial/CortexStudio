
import PageHero from 'components/common/ToAction/PageHero';
import PlansToAction from 'components/common/ToAction/PlansToAction';
import { pricingData } from 'data/pricingData';
import { Check } from 'lucide-react';
import './style.css';

const PlanosPage = () => {
  return (
    <main>
      <PageHero
        title="Planos e"
        gradientText="Pacotes"
        subtitle="Escolha o pacote ideal para as necessidades do seu computador. Todos os planos garantem a execução do serviço com precisão técnica."
      />
      <div className="container">
        <div className="pricing-grid">
          {pricingData.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
              {plan.isPopular && <div className="popular-badge">MAIS POPULAR</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">R$ {plan.price}</div>
              <p className="plan-tagline">{plan.tagline}</p>

              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Check className="icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={`btn btn-primary`}>
                Contratar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    <PlansToAction />
    </main>
  );
};

export default PlanosPage;