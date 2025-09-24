
import { portfolioItems } from "../../data/gardening";

const Portfolio = ({ openImageModal }) => {
  return (
    <section id="portafolio" className="section portfolio-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">FEATURED PROJECTS</p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
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
                  alt={`${item.title} - Professional Landscaping in New Jersey by Jimenez Services`}
                  className="main-portfolio-image"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3>{item.title}</h3>
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
