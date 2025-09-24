
import { services } from "../../data/remodeling";
import { CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="servicios" className="section services-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Remodeling Services in NJ</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">PROFESSIONAL REMODELING SOLUTIONS</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Discover how we can transform your space into a customized environment to your liking.</p>
          <a href="#contact" className="cta-button">
            Request Free Consultation <ArrowRight className="cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
