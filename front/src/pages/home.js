"use client"

import { useEffect, useState, useRef } from "react"
import {
  Leaf,
  HomeIcon,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Camera,
  Users,
  Calendar,
  PenToolIcon as Tool,
  Paintbrush,
  Shovel,
  Ruler,
  Award,
  ChevronDown,
  MapPin,
  Send,
  ShoppingCart,
} from "lucide-react"
import "./home.css" // Import the CSS file

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("gardening")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation on load
  useEffect(() => {
    setIsVisible(true)

    // Animate sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Homeowner",
      image: "https://source.unsplash.com/random/100x100/?woman",
      text: "The garden transformation was beyond my expectations. The team was professional, punctual, and the results are stunning. My outdoor space is now my favorite part of the home!",
      rating: 5,
    },
    {
      name: "John Davis",
      role: "Business Owner",
      image: "https://source.unsplash.com/random/100x100/?man",
      text: "We hired them for our office remodeling project. The attention to detail and quality of work was exceptional. Our clients are impressed with the new look, and our team loves the improved workspace.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Property Manager",
      image: "https://source.unsplash.com/random/100x100/?person",
      text: "Managing multiple properties requires reliable contractors. This team has consistently delivered quality landscaping and remodeling services across all our properties. Highly recommended!",
      rating: 5,
    },
  ]

  const portfolioItems = [
    {
      title: "Modern Garden Oasis",
      category: "gardening",
      image: "https://source.unsplash.com/random/600x400/?garden",
      description: "Complete backyard transformation with sustainable plants and modern design elements.",
    },
    {
      title: "Luxury Kitchen Renovation",
      category: "remodeling",
      image: "https://source.unsplash.com/random/600x400/?kitchen",
      description: "High-end kitchen remodel with custom cabinetry and premium appliances.",
    },
    {
      title: "Japanese Zen Garden",
      category: "gardening",
      image: "https://source.unsplash.com/random/600x400/?zen,garden",
      description: "Peaceful meditation garden with authentic Japanese elements and water features.",
    },
    {
      title: "Contemporary Bathroom Redesign",
      category: "remodeling",
      image: "https://source.unsplash.com/random/600x400/?bathroom",
      description: "Spa-inspired bathroom with walk-in shower and custom tilework.",
    },
    {
      title: "Drought-Resistant Landscape",
      category: "gardening",
      image: "https://source.unsplash.com/random/600x400/?landscape",
      description: "Eco-friendly front yard design with native plants and efficient irrigation.",
    },
    {
      title: "Open Concept Living Space",
      category: "remodeling",
      image: "https://source.unsplash.com/random/600x400/?living,room",
      description: "Wall removal and structural renovation to create a flowing, modern living area.",
    },
  ]

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <Leaf className="logo-icon" />
            <span>Jimenez Landscaping</span>
          </div>

          <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#" onClick={() => scrollToSection(heroRef)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(aboutRef)}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(servicesRef)}>
                Services
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(galleryRef)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(testimonialsRef)}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection(contactRef)}>
                Contact
              </a>
            </li>
            <li className="nav-cta">
              <a href="#" className="cta-button">
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="logo">
            <Leaf className="logo-icon" />
            <span>GreenSpace</span>
          </div>
          <h1 className="hero-title">Service of the gardenering | Venta de Plantas</h1>
          <div className="hero-services">
            diseño <span>|</span> construcción <span>|</span> paisajismo <span>|</span> mantenimiento <span>|</span>{" "}
            riego <span>|</span> plantas
          </div>
          <div className="hero-buttons">
            <button className="primary-button">
              <ShoppingCart className="button-icon" />
              Ir a la tienda
            </button>
            <button className="secondary-button">
              <Calendar className="button-icon" />
              Agendar mantenimiento
            </button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection(aboutRef)}>
          <span>Descubre Más</span>
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Your Vision, Our Expertise</h2>
            <div className="section-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-image">
              <img src="https://source.unsplash.com/random/600x400/?landscaping,team" alt="Our team at work" />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>

            <div className="about-text">
              <h3>Creating Beautiful Spaces Since 2013</h3>
              <p>
                At GreenSpace, we believe that every home deserves to be beautiful, both inside and out. Our team of
                expert gardeners and remodeling professionals work together to transform your space into something
                extraordinary.
              </p>

              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">
                    <Award />
                  </div>
                  <div className="feature-text">
                    <h4>Quality Guaranteed</h4>
                    <p>We stand behind our work with comprehensive warranties and guarantees.</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <Users />
                  </div>
                  <div className="feature-text">
                    <h4>Expert Team</h4>
                    <p>Our certified professionals bring years of experience to every project.</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">
                    <Calendar />
                  </div>
                  <div className="feature-text">
                    <h4>On-Time Delivery</h4>
                    <p>We respect your time and always complete projects on schedule.</p>
                  </div>
                </div>
              </div>

              <button className="primary-button">
                Learn More About Us
                <ArrowRight className="button-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">What We Offer</h2>
            <div className="section-underline"></div>
          </div>

          <div className="services-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === "gardening" ? "active" : ""}`}
                onClick={() => setActiveTab("gardening")}
              >
                <Leaf className="tab-icon" />
                Gardening Services
              </button>
              <button
                className={`tab-button ${activeTab === "remodeling" ? "active" : ""}`}
                onClick={() => setActiveTab("remodeling")}
              >
                <HomeIcon className="tab-icon" />
                Remodeling Services
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "gardening" && (
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon">
                      <Leaf />
                    </div>
                    <h3>Landscape Design</h3>
                    <p>
                      Custom landscape designs tailored to your property and preferences, creating beautiful outdoor
                      spaces.
                    </p>
                    <ul className="service-features">
                      <li>
                        <CheckCircle className="check-icon" /> Custom garden layouts
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Plant selection & placement
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> 3D visualization
                      </li>
                    </ul>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">
                      <Shovel />
                    </div>
                    <h3>Garden Maintenance</h3>
                    <p>Regular maintenance services to keep your garden looking its best throughout the seasons.</p>
                    <ul className="service-features">
                      <li>
                        <CheckCircle className="check-icon" /> Seasonal pruning
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Lawn care & mowing
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Pest management
                      </li>
                    </ul>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">
                      <Camera />
                    </div>
                    <h3>Outdoor Living Spaces</h3>
                    <p>Create functional outdoor living areas that extend your home into nature.</p>
                    <ul className="service-features">
                      <li>
                        <CheckCircle className="check-icon" /> Patio & deck design
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Outdoor kitchens
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Fire pits & water features
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "remodeling" && (
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon remodeling-icon">
                      <Paintbrush />
                    </div>
                    <h3>Interior Renovation</h3>
                    <p>Complete interior transformations that modernize and enhance your living spaces.</p>
                    <ul className="service-features">
                      <li>
                        <CheckCircle className="check-icon" /> Full room remodels
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Custom built-ins
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Flooring installation
                      </li>
                    </ul>
                  </div>

                  <div className="service-card">
                    <div className="service-icon remodeling-icon">
                      <Tool />
                    </div>
                    <h3>Kitchen & Bath Remodeling</h3>
                    <p>Specialized renovations for the most important rooms in your home.</p>
                    <ul className="service-features">
                      <li>
                        <CheckCircle className="check-icon" /> Custom cabinetry
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Countertop installation
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Fixture upgrades
                      </li>
                    </ul>
                  </div>

                  <div className="service-card">
                    <div className="service-icon remodeling-icon">
                      <Ruler />
                    </div>
                    <h3>Structural Modifications</h3>
                    <p>Expert structural changes that improve flow and functionality in your home.</p>
                    <ul className="service-features">
                      <li>
                        <CheckCircle className="check-icon" /> Wall removal
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Room additions
                      </li>
                      <li>
                        <CheckCircle className="check-icon" /> Layout optimization
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="services-cta">
            <p>Looking for a custom solution for your home?</p>
            <button className="primary-button">
              Request a Free Quote
              <ArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery Section */}
      <section ref={galleryRef} className="portfolio-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Work</span>
            <h2 className="section-title">Recent Projects</h2>
            <div className="section-underline"></div>
          </div>

          <div className="portfolio-filter">
            <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>
              All Projects
            </button>
            <button className={activeTab === "gardening" ? "active" : ""} onClick={() => setActiveTab("gardening")}>
              Gardening
            </button>
            <button className={activeTab === "remodeling" ? "active" : ""} onClick={() => setActiveTab("remodeling")}>
              Remodeling
            </button>
          </div>

          <div className="portfolio-grid">
            {portfolioItems
              .filter((item) => activeTab === "all" || item.category === activeTab)
              .map((item, index) => (
                <div className="portfolio-item" key={index}>
                  <div className="portfolio-image">
                    <img src={item.image || "/placeholder.svg"} alt={item.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-category">{item.category}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button className="portfolio-button">View Project</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="portfolio-cta">
            <button className="secondary-button">
              View All Projects
              <ArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="testimonials-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-underline"></div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star className="star-icon" key={i} />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-underline"></div>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does a typical remodeling project take?</h3>
              <p>
                Project timelines vary based on scope and complexity. A bathroom remodel might take 2-3 weeks, while a
                full kitchen renovation could take 4-6 weeks. During your consultation, we'll provide a detailed
                timeline specific to your project.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer maintenance plans for landscaping?</h3>
              <p>
                Yes, we offer customized maintenance plans to keep your garden looking its best year-round. These can
                include weekly, bi-weekly, or monthly visits depending on your needs and the season.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are you licensed and insured?</h3>
              <p>
                Absolutely. We maintain all required licenses for both our gardening and remodeling services, and we
                carry comprehensive insurance coverage to protect your property and our team.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do you handle project estimates?</h3>
              <p>
                We provide detailed, transparent estimates after an initial consultation. Our estimates break down
                labor, materials, and timeline so you know exactly what to expect with no hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section animate-on-scroll">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header left-aligned">
                <span className="section-subtitle">Contact Us</span>
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-underline"></div>
              </div>

              <p className="contact-intro">
                Ready to transform your space? Contact us today for a free consultation and estimate. Our team is ready
                to bring your vision to life.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone />
                  </div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>info@greenspace.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin />
                  </div>
                  <div className="method-details">
                    <h3>Office</h3>
                    <p>
                      123 Garden Street, Suite 101
                      <br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Clock />
                  </div>
                  <div className="method-details">
                    <h3>Hours</h3>
                    <p>
                      Monday-Friday: 8am-6pm
                      <br />
                      Saturday: 9am-3pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <h3>Request a Free Consultation</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Your email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Your phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" required>
                    <option value="">Select a service</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="garden-maintenance">Garden Maintenance</option>
                    <option value="outdoor-living">Outdoor Living Spaces</option>
                    <option value="interior-renovation">Interior Renovation</option>
                    <option value="kitchen-bath">Kitchen & Bath Remodeling</option>
                    <option value="structural">Structural Modifications</option>
                    <option value="other">Other (Please specify)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" rows="4" placeholder="Tell us about your project" required></textarea>
                </div>

                <button type="submit" className="primary-button">
                  Send Message
                  <Send className="button-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <Leaf className="logo-icon" />
                <span>GreenSpace</span>
              </div>
              <p>Transforming homes and gardens with expert craftsmanship and innovative design since 2013.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="#">Landscape Design</a>
                </li>
                <li>
                  <a href="#">Garden Maintenance</a>
                </li>
                <li>
                  <a href="#">Outdoor Living Spaces</a>
                </li>
                <li>
                  <a href="#">Interior Renovation</a>
                </li>
                <li>
                  <a href="#">Kitchen & Bath Remodeling</a>
                </li>
                <li>
                  <a href="#">Structural Modifications</a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for tips, trends, and special offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="newsletter-button">
                  <Send className="newsletter-icon" />
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 GreenSpace. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

