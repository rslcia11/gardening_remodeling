
import { useState } from "react";
import { services } from "../../data/services";
import { Leaf, HomeIcon, Snowflake, CheckCircle } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("gardening");

  return (
    <section id="servicios" className="section services-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services in Little Ferry, NJ</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">PROFESSIONAL SOLUTIONS</p>
        </div>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "gardening" ? "active" : ""}`}
            onClick={() => setActiveTab("gardening")}
          >
            <Leaf className="tab-icon" />
            Landscaping Services
          </button>
          <button
            className={`tab-button ${activeTab === "remodeling" ? "active" : ""}`}
            onClick={() => setActiveTab("remodeling")}
          >
            <HomeIcon className="tab-icon" />
            Remodeling and Construction Services
          </button>
          <button
            className={`tab-button ${activeTab === "winter" ? "active" : ""}`}
            onClick={() => setActiveTab("winter")}
          >
            <Snowflake className="tab-icon" />
            Winter Services
          </button>
        </div>
        <div className="services-grid">
          {services[activeTab].map((service, index) => (
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
      </div>
    </section>
  );
};

export default Services;
