"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle,
  Leaf,
  Shovel,
  TreePine,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Send,
  Award,
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

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      icon: <Leaf />,
      title: "Diseño de Paisajes Exclusivos",
      description:
        "Creamos jardines únicos que reflejan tu personalidad, aumentan el valor de tu propiedad y crean un oasis personal para disfrutar todo el año.",
      features: [
        "Diseños personalizados con visualización 3D",
        "Selección experta de plantas para cada clima",
        "Soluciones sostenibles que ahorran agua",
      ],
    },
    {
      icon: <Shovel />,
      title: "Mantenimiento Premium",
      description:
        "Cuidamos tu inversión con un servicio integral que mantiene tu jardín impecable durante todas las estaciones, permitiéndote disfrutar sin preocupaciones.",
      features: [
        "Programas personalizados de cuidado estacional",
        "Técnicas profesionales de poda y nutrición",
        "Control preventivo de plagas y enfermedades",
      ],
    },
    {
      icon: <TreePine />,
      title: "Paisajismo Transformador",
      description:
        "Convertimos espacios ordinarios en extraordinarios, combinando elementos naturales y arquitectónicos para crear ambientes que impresionan y perduran.",
      features: [
        "Terrazas y patios con materiales premium",
        "Muros de contención decorativos y funcionales",
        "Caminos y senderos que realzan tu propiedad",
      ],
    },
    {
      icon: <Droplets />,
      title: "Sistemas de Riego Inteligentes",
      description:
        "Optimizamos el uso del agua con tecnología de vanguardia que mantiene tu jardín exuberante mientras reduces hasta un 40% en tu factura de agua.",
      features: [
        "Riego por goteo de alta eficiencia",
        "Sistemas automatizados con sensores",
        "Soluciones eco-amigables personalizadas",
      ],
    },
  ]

  const galleryItems = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-SO1uzOSv574OMbCkD6aeSIWTJqec7R.jpeg",
      title: "Instalación de Mantillo y Paisajismo",
      description:
        "Nuestro equipo profesional realizando trabajos de paisajismo con materiales premium para crear jardines duraderos y de bajo mantenimiento.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?luxury,garden,landscape",
      title: "Jardín Contemporáneo de Lujo",
      description:
        "Diseño exclusivo con líneas limpias, plantas arquitectónicas y elementos de agua que crean un espacio sofisticado y relajante.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?zen,garden",
      title: "Santuario Zen Personalizado",
      description:
        "Espacio de meditación con elementos japoneses tradicionales que transforman tu jardín en un refugio de tranquilidad y belleza.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?backyard,patio",
      title: "Área de Entretenimiento Exterior",
      description:
        "Espacio multifuncional con cocina exterior, zona de fogata y áreas de estar que extienden tu hogar hacia la naturaleza.",
    },
    {
      image: "https://source.unsplash.com/random/1200x800/?vegetable,garden",
      title: "Huerto Orgánico de Diseñador",
      description:
        "Jardín comestible que combina belleza y funcionalidad, permitiéndote cultivar alimentos frescos y orgánicos en un entorno estético.",
    },
  ]

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Propietaria en Little Ferry",
      text: "Jimenez Services transformó nuestro jardín en un paraíso que supera todas nuestras expectativas. Su atención al detalle y profesionalismo son incomparables. Ahora pasamos más tiempo al aire libre que dentro de casa, ¡es como tener un resort privado!",
    },
    {
      name: "Roberto Sánchez",
      role: "Administrador de Propiedades",
      text: "Como responsable de múltiples propiedades de lujo, valoro la consistencia y excelencia. Jimenez Services ha mantenido impecables nuestros jardines durante años, aumentando el valor de nuestras propiedades y generando elogios constantes de residentes y visitantes.",
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
        <div className="hero-featured-image">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1470&auto=format&fit=crop"
            alt="Jardín de lujo diseñado por Jimenez Services"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-badge">
            <span>Expertos en Jardinería Profesional</span>
          </div>
          <h1 className="hero-title">Transformamos Tu Espacio Exterior en un Paraíso de Ensueño</h1>
          <div className="hero-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Diseños Exclusivos</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Materiales Premium</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <span>Garantía de Satisfacción</span>
            </div>
          </div>
          <p className="hero-subtitle">
            Más de <strong>250 clientes satisfechos</strong> en Little Ferry y alrededores confían en nosotros para
            crear espacios exteriores que aumentan el valor de su propiedad y mejoran su calidad de vida
          </p>
          <div className="hero-cta-container">
            <a href="#services" className="primary-button">
              Ver Nuestras Soluciones
              <ArrowRight className="button-icon" />
            </a>
            <a href="#contact" className="secondary-button">
              Consulta Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="gardening-services animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Experiencia y Excelencia</span>
            <h2 className="section-title">Nuestras Soluciones Premium</h2>
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
            <span className="section-subtitle">Transformaciones Reales</span>
            <h2 className="section-title">Nuestras Creaciones Exclusivas</h2>
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
            <span className="section-subtitle">Metodología Comprobada</span>
            <h2 className="section-title">Nuestro Proceso de Excelencia</h2>
            <div className="section-underline"></div>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consulta Personalizada</h3>
              <p>
                Iniciamos con una evaluación detallada de tu espacio, escuchando atentamente tus necesidades,
                preferencias y visión para crear un plan perfecto.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Diseño Exclusivo</h3>
              <p>
                Nuestros diseñadores crean un concepto a medida con visualizaciones 3D, selección de plantas ideales
                para tu clima y elementos paisajísticos únicos.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementación Experta</h3>
              <p>
                Nuestro equipo de especialistas ejecuta cada detalle con precisión, utilizando técnicas avanzadas y
                materiales premium para resultados excepcionales.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Mantenimiento Superior</h3>
              <p>
                Ofrecemos programas personalizados de cuidado continuo que mantienen tu inversión en condiciones óptimas
                durante todas las estaciones del año.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gardening-testimonials animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Clientes Satisfechos</span>
            <h2 className="section-title">Experiencias Reales</h2>
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
                <span className="section-subtitle">Comienza Tu Transformación</span>
                <h2 className="section-title">¿Listo para un Jardín Extraordinario?</h2>
                <div className="section-underline"></div>
              </div>

              <p className="contact-intro">
                Estamos a solo un mensaje de distancia para convertir tu espacio exterior en un paraíso personalizado.
                Contáctanos hoy para una consulta gratuita y descubre cómo podemos transformar tu visión en realidad.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone />
                  </div>
                  <div className="method-details">
                    <h3>Llámanos</h3>
                    <p>(201) 555-0123</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail />
                  </div>
                  <div className="method-details">
                    <h3>Escríbenos</h3>
                    <p>info@jimenezservices.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin />
                  </div>
                  <div className="method-details">
                    <h3>Visítanos</h3>
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
                <h3>Solicita tu Consulta Gratuita</h3>

                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" placeholder="Tu nombre completo" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" placeholder="Tu correo electrónico" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Número de Teléfono</label>
                  <input type="tel" id="phone" placeholder="Para contactarte rápidamente" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">¿Qué Servicio Te Interesa?</label>
                  <select id="service" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="diseno">Diseño de Paisajes Exclusivos</option>
                    <option value="mantenimiento">Mantenimiento Premium</option>
                    <option value="paisajismo">Paisajismo Transformador</option>
                    <option value="riego">Sistemas de Riego Inteligentes</option>
                    <option value="otro">Otro (Por favor especifica)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tu Visión</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Cuéntanos sobre el jardín de tus sueños"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="primary-button">
                  Iniciar Mi Transformación
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
              <p>
                Transformando espacios ordinarios en extraordinarios desde 2018. Nuestro compromiso: excelencia,
                innovación y satisfacción garantizada en cada proyecto.
              </p>
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

      {/* Botón flotante de cotización */}
      <div className="floating-quote-button" onClick={scrollToContact}>
        <div className="quote-button-content">
          <span className="quote-icon">
            <Award className="quote-button-icon" />
          </span>
          <span className="quote-text">¡Cotiza Gratis!</span>
        </div>
      </div>
    </div>
  )
}

