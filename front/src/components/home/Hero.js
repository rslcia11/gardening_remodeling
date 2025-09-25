import { Link } from "react-router-dom";
import { Leaf, Hammer, ArrowRight } from "lucide-react";

const Hero = ({ openImageModal }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg")`,
      }}
      onClick={() =>
        openImageModal(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg"
        )
      }
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="hero-content z-10" onClick={(e) => e.stopPropagation()}>
        <h3 className="service-option-title">Select the service you need</h3>
        <div className="service-options">
          <Link to="/landscaping" className="service-option" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-option-icon-container">
              <Leaf className="service-option-icon" />
            </div>
            <h3 className="service-option-title">Landscaping</h3>
            <div className="service-option-button">
              Explore Services
              <ArrowRight className="service-option-arrow" size={16} />
            </div>
          </Link>
          <Link to="/remodeling" className="service-option" onClick={() => window.scrollTo(0, 0)}>
            <div className="service-option-icon-container">
              <Hammer className="service-option-icon" />
            </div>
            <h3 className="service-option-title">Remodeling and Construction</h3>
            <div className="service-option-button">
              Explore Services
              <ArrowRight className="service-option-arrow" size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;