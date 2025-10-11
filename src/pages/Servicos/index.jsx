import ServiceCard from 'components/services/ServiceCard';
import * as serviceData from 'data';
import 'components/services/ServiceCard.css';
import PageHero from 'components/common/ToAction/PageHero';
import FeaturesSection from 'components/features/FeaturesSection';
import CallToAction from 'components/common/ToAction/CallToAction';

const ServicosPage = () => {
  return (
    <main>
      <PageHero
        title="Nossos"
        gradientText="Serviços"
        subtitle="Soluções completas de manutenção e performance para seu computador. Cada serviço é executado com precisão técnica e garantia total."
      />
      <div className="container">
        <div className="service-grid">
          <h2 className="grid-section-title">Limpeza e Manutenção</h2>
          {serviceData.cleaningServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          <h2 className="grid-section-title">Sistema e Performance</h2>
          {serviceData.performanceServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          <h2 className="grid-section-title">Recuperação e Backup</h2>
          {serviceData.dataServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
          ))}
          <h2 className="grid-section-title">Empresarial (B2B)</h2>
          {serviceData.b2bServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
      <FeaturesSection />
      <CallToAction />
    </main>
  );
};

export default ServicosPage;