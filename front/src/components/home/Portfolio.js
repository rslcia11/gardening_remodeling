
import { useState } from "react";
import { portfolioItems } from "../../data/portfolio";

const Portfolio = ({ openImageModal }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPortfolio = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portafolio" className="section portfolio-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">FEATURED PROJECTS</p>
        </div>
        <div className="portfolio-filter">
          <button
            className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            ALL
          </button>
          <button
            className={`filter-button ${activeFilter === "gardening" ? "active" : ""}`}
            onClick={() => setActiveFilter("gardening")}
          >
            LANDSCAPING
          </button>
          <button
            className={`filter-button ${activeFilter === "remodeling" ? "active" : ""}`}
            onClick={() => setActiveFilter("remodeling")}
          >
            REMODELING
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredPortfolio.map((item, index) => (
            <div
              key={index}
              className="portfolio-item"
              onClick={() =>
                item.beforeImage ? openImageModal(item) : openImageModal({ single: item.image, title: item.title })
              }
            >
              <div className="portfolio-image">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="main-portfolio-image"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3>{item.title}</h3>
                    <div className="portfolio-button">
                      {item.category === "gardening" ? "Landscaping" : "Remodeling"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
