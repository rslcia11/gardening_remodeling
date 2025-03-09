"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle,
  Crown,
  Leaf,
  Shovel,
  TreePine,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react"
import "./gardening.css"

export default function Gardening() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeGalleryItem, setActiveGalleryItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

    // Gallery auto-scroll
    const interval = setInterval(() => {
      setActiveGalleryItem((prev) => (prev + 1) % galleryItems.length)
    }, 5000)

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((section) => {
        observer.unobserve(section)
      })
      clearInterval(interval)
    }
  }, [])

  const services = [
    {
      icon: <Leaf />,
      title: "Diseño de Paisajes",
      description: "Creamos jardines personalizados que reflejan tu estilo y complementan la arquitectura de tu hogar.",
      features: ["Diseño personalizado", "Selección de plantas", "Visualización 3D"],
    },
    {
      icon: <Shovel />,
      title: "Mantenimiento de Jardines",
      description: "Servicios regulares para mantener tu jardín en óptimas condiciones durante todas las estaciones.",
      features: ["Poda estacional", "Cuidado del césped", "Control de plagas"],
    },
    {
      icon: <TreePine />,
      title: "Paisajismo",
      description:
        "Transformamos espacios exteriores con elementos naturales y arquitectónicos para crear ambientes armoniosos.",
      features: ["Terrazas y patios", "Muros de contención", "Caminos y senderos"],
    },
    {
      icon: <Droplets />,
      title: "Sistemas de Riego",
      description: "Instalamos sistemas eficientes que mantienen tu jardín hidratado mientras ahorran agua.",
      features: ["Riego por goteo", "Sistemas automatizados", "Soluciones eco-amigables"],
    },
  ]

  const galleryItems = [
    {
      image: "https://source.unsplash.com/random/1200x800/?garden,landscape",
      title: "Jardín Moderno",
      description: "Diseño contemporáneo con plantas de bajo mantenimiento y elementos arquitectónicos.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?zen,garden",
      title: "Jardín Zen",
      description: "Espacio de meditación con elementos japoneses tradicionales y características acuáticas.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?backyard,patio",
      title: "Patio Exterior",
      description: "Área de entretenimiento al aire libre con cocina, fogata y zonas de estar.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?vegetable,garden",
      title: "Huerto Orgánico",
      description: "Jardín comestible con verduras, hierbas y frutas cultivadas orgánicamente.",
    },
  ]

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Propietaria",
      text: "La transformación de nuestro jardín superó todas nuestras expectativas. El equipo fue profesional, puntual y los resultados son impresionantes.",
    },
    {
      name: "Roberto Sánchez",
      role: "Administrador de Propiedades",
      text: "Hemos contratado a Jimenez Services para el mantenimiento de jardines en múltiples propiedades. Su servicio es consistente y de alta calidad.",
    },
  ]

  return (
    <div className="gardening-page">
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/interiores">Remodelación</Link>
            </li>
            <li>
              <Link to="/jardineria" className="active">
                Jardinería
              </Link>
            </li>
            <li className="nav-cta">
              <a href="#contact" className="cta-button">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gardening-hero">
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-title-container">
            <Crown className="hero-icon" />
            <h1 className="hero-title">Servicios de Jardinería</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Creamos y mantenemos espacios verdes hermosos que armonizan con la naturaleza y tu estilo de vida
          </p>
          <Link to="#services" className="primary-button">
            Explorar Servicios
            <ArrowRight className="button-icon" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="gardening-services animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nuestros Servicios</span>
            <h2 className="section-title">Soluciones de Jardinería</h2>
            <div className="section-underline"></div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
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

      {/* Gallery Section */}
      <section className="gardening-gallery animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nuestro Trabajo</span>
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="section-underline"></div>
          </div>

          <div className="gallery-showcase">
            <div className="gallery-main">
              <img
                src={galleryItems[activeGalleryItem].image || "/placeholder.svg"}
                alt={galleryItems[activeGalleryItem].title}
                className="gallery-main-image"
              />
              <div className="gallery-info">
                <h3>{galleryItems[activeGalleryItem].title}</h3>
                <p>{galleryItems[activeGalleryItem].description}</p>
              </div>
            </div>

            <div className="gallery-thumbnails">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-thumbnail ${index === activeGalleryItem ? "active" : ""}`}
                  onClick={() => setActiveGalleryItem(index)}
                >
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="gardening-process animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nuestro Proceso</span>
            <h2 className="section-title">Cómo Trabajamos</h2>
            <div className="section-underline"></div>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consulta Inicial</h3>
              <p>Nos reunimos para entender tus necesidades, preferencias y el espacio disponible para tu jardín.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Diseño y Planificación</h3>
              <p>
                Creamos diseños detallados que incluyen selección de plantas, elementos paisajísticos y sistemas de
                riego.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementación</h3>
              <p>
                Nuestro equipo de jardineros expertos realiza la instalación con atención al detalle y materiales de
                calidad.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Mantenimiento</h3>
              <p>Ofrecemos servicios continuos para asegurar que tu jardín se mantenga hermoso durante todo el año.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gardening-testimonials animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonios</span>
            <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
            <div className="section-underline"></div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="gardening-contact animate-on-scroll">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header left-aligned">
                <span className="section-subtitle">Contacto</span>
                <h2 className="section-title">¿Listo para Transformar tu Jardín?</h2>
                <div className="section-underline"></div>
              </div>

              <p className="contact-intro">
                Contáctanos hoy para una consulta gratuita y presupuesto. Nuestro equipo está listo para hacer realidad
                tu jardín ideal.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone />
                  </div>
                  <div className="method-details">
                    <h3>Teléfono</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>info@jimenezservices.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin />
                  </div>
                  <div className="method-details">
                    <h3>Oficina</h3>
                    <p>
                      Little Ferry 07643
                      <br />
                      New Jersey, Estados Unidos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <h3>Solicita una Consulta Gratuita</h3>

                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" placeholder="Tu nombre" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" placeholder="Tu email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Número de Teléfono</label>
                  <input type="tel" id="phone" placeholder="Tu teléfono" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select id="service" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="diseno">Diseño de Paisajes</option>
                    <option value="mantenimiento">Mantenimiento de Jardines</option>
                    <option value="paisajismo">Paisajismo</option>
                    <option value="riego">Sistemas de Riego</option>
                    <option value="otro">Otro (Por favor especifica)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Detalles del Proyecto</label>
                  <textarea id="message" rows="4" placeholder="Cuéntanos sobre tu proyecto" required></textarea>
                </div>

                <button type="submit" className="primary-button">
                  Enviar Mensaje
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
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
                  alt="Jimenez Services LLC Logo"
                  className="footer-logo-image"
                />
                <span>Jimenez Services</span>
              </div>
              <p>Transformando espacios verdes con artesanía experta y diseño innovador desde 2013.</p>
            </div>

            <div className="footer-links">
              <h3>Enlaces Rápidos</h3>
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
              </ul>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2023 Jimenez Services LLC. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

