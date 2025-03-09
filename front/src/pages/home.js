"use client"

import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Leaf,
  HomeIcon,
  CheckCircle,
  ArrowRight,
  Camera,
  Users,
  Calendar,
  PenToolIcon as Tool,
  Paintbrush,
  Shovel,
  Ruler,
  Award,
  ChevronDown,
  Send,
  Palette,
  Hammer,
  Sofa,
  FlowerIcon,
  TreePine,
  Droplets,
  Scissors,
  Crown,
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
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
              alt="Jimenez Services LLC Logo"
              className="logo-image"
            />
            <span>Jimenez Services LLC.</span>
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
                Portafolio
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
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section con título perfectamente centrado */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-overlay"></div>
        {/* Título centrado sobre los contenedores */}
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-title-container">
            <Crown className="hero-icon" />
            <h1 className="hero-title">¿Qué servicio buscas?</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Selecciona el servicio que necesitas y descubre cómo podemos transformar tu espacio
          </p>
        </div>

        <div className="services-split-container horizontal">
          {/* Sección de Remodelación de Interiores con imagen real */}
          <div className="service-split-item remodeling-bg">
            <div className="service-split-overlay"></div>
            <div className="service-split-content">

              <h2>Remodelación de Interiores</h2>
              <p>Transformamos espacios con diseños modernos y funcionales que reflejan tu estilo personal</p>
              <div className="service-features-preview">
                <div className="feature-preview">
                  <Sofa className="feature-icon" />
                  <span>Diseño de Interiores</span>
                </div>
                <div className="feature-preview">
                  <Hammer className="feature-icon" />
                  <span>Renovaciones</span>
                </div>
                <div className="feature-preview">
                  <Tool className="feature-icon" />
                  <span>Acabados Premium</span>
                </div>
              </div>
              <Link to="/interiores" className="primary-button">
                Ver servicios
                <ArrowRight className="button-icon" />
              </Link>
            </div>
          </div>

          {/* Sección de Jardinería con imagen real */}
          <div className="service-split-item gardening-bg">
            <div className="service-split-overlay"></div>
            <div className="service-split-content">

              <h2>Jardinería</h2>
              <p>Creamos y mantenemos espacios verdes hermosos que armonizan con la naturaleza y tu estilo de vida</p>
              <div className="service-features-preview">
                <div className="feature-preview">
                  <TreePine className="feature-icon" />
                  <span>Paisajismo</span>
                </div>
                <div className="feature-preview">
                  <Droplets className="feature-icon" />
                  <span>Sistemas de Riego</span>
                </div>
                <div className="feature-preview">
                  <Scissors className="feature-icon" />
                  <span>Mantenimiento</span>
                </div>
              </div>
              <Link to="/jardineria" className="primary-button">
                Ver servicios
                <ArrowRight className="button-icon" />
              </Link>
            </div>
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
            <div className="section-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-image">
              
              <div className="experience-badge">
              </div>
            </div>

            <div className="about-text">
              <h3>Excelencia en Diseño desde 2018</h3>
              <p>
                En Jimenez Services LLC, creemos que cada hogar merece ser hermoso, tanto en su interior como en su
                exterior. Nuestro equipo de profesionales altamente capacitados trabaja con dedicación y eficiencia para
                transformar su espacio en algo extraordinario. Ubicados en Little Ferry, New Jersey, servimos con
                orgullo a toda el área metropolitana con soluciones personalizadas de remodelación y jardinería.
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

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
                  alt="Jimenez Services LLC Logo"
                  className="footer-logo-image"
                />
                <span>Jimenez Services</span>
              </div>
              <p>Transforming homes and gardens with expert craftsmanship and innovative design since 2018.</p>
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/interiores">Remodelación</Link>
                </li>
                <li>
                  <Link to="/jardineria">Jardinería</Link>
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
            <p>&copy; 2023 Jimenez Services LLC. All rights reserved.</p>
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

