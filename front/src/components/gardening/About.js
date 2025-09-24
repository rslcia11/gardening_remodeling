
import { galleryItems, benefits } from "../../data/gardening";
import { ArrowRight } from "lucide-react";

const About = ({ openImageModal }) => {
  return (
    <section className="section about-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Elite Landscaping in New Jersey</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">WE TRANSFORM YOUR OUTDOOR SPACE</p>
        </div>
        <div className="about-content">
          <div className="about-image-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="about-image-item"
                onClick={() => openImageModal({ single: item.image, title: item.title })}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} - Professional Landscaping in New Jersey by Jimenez Services`}
                  loading="lazy"
                />
                <div className="about-image-overlay">
                  <div className="about-image-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-text">
            <h3>Excellence in Every Green Detail Across New Jersey</h3>
            <p>
              At Jimenez Services, we don't just maintain gardens — we craft outdoor experiences that elevate your
              lifestyle and transform your property's appearance. Our skilled team blends expert knowledge with
              creative vision to design, build, and care for exceptional green spaces tailored to your needs.
            </p>
            <p>
              From routine maintenance to full-scale landscaping projects, we're committed to delivering personalized
              service and flawless results that boost your property's value and create welcoming outdoor areas you'll
              love for years to come.
            </p>
            <div className="about-features">
              {benefits.map((benefit, index) => (
                <div className="feature" key={index}>
                  <div className="feature-icon">{benefit.icon}</div>
                  <div className="feature-text">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cta-container">
              <a href="#contact" className="cta-button">
                Request Free Estimate <ArrowRight className="cta-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
