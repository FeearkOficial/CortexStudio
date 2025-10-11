
import Servicelist from './ServiceList';
import './ServiceSection.css';

const ServiceSection = ({ title, subtitle, services}) => {
    return (
        <section className='service-section'>
            <div className='section-container'>
                <h2 className='section-title'>{title}</h2>
                {subtitle && <p className='section-subtitle'>{subtitle}</p>}
                <Servicelist services={services} />
            </div>
        </section>
    )
}

export default ServiceSection;