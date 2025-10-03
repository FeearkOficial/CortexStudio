
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

const ServiceList = ({ services }) => {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <ServiceCard 
          key={service.title} 
          {...service}
          icon={service.icon}
          price={service.price}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceList;