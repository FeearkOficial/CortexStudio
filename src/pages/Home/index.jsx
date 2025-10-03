
import ServiceCard from 'components/services/ServiceCard';
import { b2bServices } from 'data/b2bServices'; // Importa a lista de serviços B2B
import './style.css';



const HomePage = () => {
  const suporteDedicadoService = b2bServices.find(
    (service) => service.title === 'Suporte Técnico Dedicado'
  );

  return (
    <main>
      <section className="secao-de-destaque">
        <div className="container">
          <h2 className="titulo-secao">Nosso Atendimento Premium</h2>
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