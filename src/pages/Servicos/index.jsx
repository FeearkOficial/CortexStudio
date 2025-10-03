import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ServiceCard from 'components/services/ServiceCard';
import * as serviceData from 'data';
import 'components/services/ServiceCard.css';
import './style.css'


const Home = () => {
  return (
    <>
      <main className="page-container">
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
            
            <h2 className="grid-section-title">Nossas Garantias</h2>
            {serviceData.warrantyServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}

          </div>
        </div>
      </main>
      
    </>
  );
};

export default Home;