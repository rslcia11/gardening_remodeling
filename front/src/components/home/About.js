
import { features } from "../../data/features";

const About = ({ openImageModal }) => {
  const aboutImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2020.25.15-IeRxiFOPgLISDQGOlZewhpSH0uPm7k.jpeg",
      title: "Professional Equipment",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-01%20at%2020.42.36%20%281%29-icj0LHrAp3Na1gonwQXS3YZih71nq0.jpeg",
      title: "Winter equipment",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.30-reCfkY0qNcuPQoRYvWvbGyLWthgSqj.jpeg",
      title: "Remodeling in Process",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27-EqiOMY03IlblCJkSzaIHSZu2GPcI9r.jpeg",
      title: "Modern Kitchen",
    },
  ];

  return (
    <section className="section about-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Jimenez Services in New Jersey</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">OUR HISTORY</p>
        </div>
        <div className="about-content">
          <div className="about-image-grid">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className="about-image-item"
                onClick={() =>
                  openImageModal({
                    single: image.src,
                    title: image.title,
                  })
                }
              >
                <img src={image.src || "/placeholder.svg"} alt={image.title} />
                <div className="about-image-overlay">
                  <div className="about-image-title">{image.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-text">
            <h3>Passion for Excellence in Every Project</h3>
            <p>
              At Jimenez Services LLC, we don't just improve homes — we bring your vision to life. Our expert team
              blends creativity with craftsmanship to deliver stunning results in landscaping, remodeling,
              construction, and snow removal.
            </p>
            <p>
              Based in Little Ferry, New Jersey, we proudly serve the entire metropolitan area. With a strong
              reputation built on exceptional quality, trust, and attention to detail, we go beyond expectations —
              turning spaces into experiences that last.
            </p>
            <div className="about-features">
              {features.map((feature, index) => (
                <div className="feature" key={index}>
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
