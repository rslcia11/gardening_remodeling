
import { Hammer, Phone } from "lucide-react";

const Hero = ({ isVisible }) => {
  return (
    <section className="hero-section remodeling-hero">
      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <div className="hero-title-container">
          <h1 className="hero-title">Professional Remodeling in New Jersey</h1>
        </div>
        <div className="hero-buttons">
          <a href="#servicios" className="hero-button">
            <Hammer className="hero-button-icon" /> Explore Services
          </a>
          <a href="#contact" className="hero-button">
            <Phone className="hero-button-icon" /> Request Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
