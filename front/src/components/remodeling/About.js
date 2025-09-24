
import { galleryItems, benefits } from "../../data/remodeling";
import { ArrowRight } from "lucide-react";

const About = ({ openImageModal }) => {
  return (
    <section className="section about-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Elite Remodeling in New Jersey</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">WE TRANSFORM YOUR SPACE</p>
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
                  alt={`${item.title} - Professional Remodeling in New Jersey by Jimenez Services`}
                  loading="lazy"
                />
                <div className="about-image-overlay">
                  <div className="about-image-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-text">
            <h3>Excellence in Every Construction Detail Across New Jersey</h3>
            <p>
              At Jimenez Services, we don't just renovate spaces — we craft exceptional environments that elevate your
              home and your lifestyle. Our expert team blends technical precision with creative vision to design,
              build, and remodel spaces that truly reflect your needs and exceed your expectations.
            </p>
            <p>
              From minor upgrades to full-scale remodeling and construction projects, we are dedicated to delivering
              personalized service, flawless results, and lasting value — creating spaces you'll love to live in for
              years to come.
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
