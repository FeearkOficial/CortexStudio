import { WHATSAPP_LINK_AGENDAR } from 'data/constants';
import 'components/services/ServiceCard.css';

const ServiceCard = ({ icon: Icon, price, priceLabel, pricePrefix, title, description, slug, hideButtons }) => {
  return (
    <div className="service-card">
      <div className="card-header">
        <div className="card-icon-wrapper">
          <Icon className="card-icon icon-neon" />
        </div>

        <div className="card-price-info">
          {priceLabel && <span className="card-price-label">{priceLabel}</span>}
          <span className="card-price">
            {pricePrefix && `${pricePrefix} `}
            {price}
          </span>
        </div>
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>


      {!hideButtons && (
        <div className="card-footer">

          {/* <a href={`/servicos/${slug}`} className="btn btn-secondary">
            Saiba Mais
          </a> */}
          <a
            href={WHATSAPP_LINK_AGENDAR}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </a>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;