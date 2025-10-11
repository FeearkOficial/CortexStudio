import React from 'react';
import { testimonialsData } from 'data/testimonialsData';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">
          O que nossos <span className="gradient-text">clientes dizem</span>
        </h2>
        <p className="testimonials-subtitle">Confiança e qualidade comprovadas em cada atendimento</p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <Quote className="testimonial-quote-icon" />
                <p className="testimonial-text">"{testimonial.quote}"</p>
                <div className="testimonial-footer">
                  <span className="testimonial-author">{testimonial.author}</span>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="icon" fill="#ffc107" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;