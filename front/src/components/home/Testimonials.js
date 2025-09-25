
import { testimonials } from "../../data/testimonials";
import { Star } from "lucide-react";

const Testimonials = ({ openImageModal }) => {
  return (
    <section id="testimonials" className="section testimonials-section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">WHAT OUR CLIENTS SAY</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`rating-star ${i < testimonial.rating ? "filled" : ""}`} size={18} />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                {testimonial.image && (
                  <div className="testimonial-author-image" onClick={() => openImageModal(testimonial.image)}>
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  </div>
                )}
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
