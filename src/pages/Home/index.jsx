
import ServiceCard from 'components/services/ServiceCard';
import TestimonialsSection from 'components/testimonials/TestimonialsSection';
import { b2bServices } from 'data/b2bServices'; 
import './style.css';



const HomePage = () => {
  const suporteDedicadoService = b2bServices.find(
    (service) => service.title === 'Suporte Técnico Dedicado'
  );

  return (
    <main>
      <TestimonialsSection />
      <section className="secao-de-destaque">
        <div className="container">
          {suporteDedicadoService && (
            <div className="wrapper-do-card-unico">
              <ServiceCard {...suporteDedicadoService} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;