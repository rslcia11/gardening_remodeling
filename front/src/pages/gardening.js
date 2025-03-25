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
  Award,
  Crown,
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

    // Gallery auto-scroll - Asegurarse de que galleryItems tenga elementos antes de configurar el intervalo
    const interval =
      galleryItems.length > 0
        ? setInterval(() => {
            setActiveGalleryItem((prev) => (prev + 1) % galleryItems.length)
          }, 5000)
        : null

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((section) => {
        observer.unobserve(section)
      })
      if (interval) clearInterval(interval)
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
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg",
      title: "Diseño de Camino Lateral con Privacidad",
      description:
        "Transformación de un espacio lateral estrecho con árboles de hoja perenne para privacidad, cerca decorativa, iluminación solar y mantillo de calidad.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-78p413j3LMqwgT63kJy72TCkUe4WGZ.jpeg",
      title: "Mantenimiento de Jardín Residencial",
      description:
        "Servicio profesional de mantenimiento de jardín que incluye corte de césped, poda de arbustos y cuidado de plantas ornamentales.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-bqk7asm0NPvOV85HOVI9G9YgvRAdAV.jpeg",
      title: "Transformación Completa de Jardín",
      description:
        "Renovación integral de jardín residencial que incluye instalación de mantillo negro, definición de bordes y plantación de flores ornamentales.",
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
      {/* Navegación */}
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
            <h1 className="hero-title">Jardinería Profesional</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Transformamos espacios exteriores en oasis de belleza y funcionalidad que reflejan tu estilo personal y
            mejoran tu calidad de vida
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
            {galleryItems.length > 0 && (
              <>
                <div className="gallery-main">
                  <img
                    src={galleryItems[activeGalleryItem]?.image || "/placeholder.svg"}
                    alt={galleryItems[activeGalleryItem]?.title || "Proyecto de jardinería"}
                    className="gallery-main-image"
                  />
                  <div className="gallery-info">
                    <h3>{galleryItems[activeGalleryItem]?.title || "Proyecto de jardinería"}</h3>
                    <p>{galleryItems[activeGalleryItem]?.description || "Transformación de espacios exteriores."}</p>
                  </div>
                </div>

                <div className="gallery-thumbnails">
                  {galleryItems.map((item, index) => (
                    <div
                      key={index}
                      className={`gallery-thumbnail ${index === activeGalleryItem ? "active" : ""}`}
                      onClick={() => setActiveGalleryItem(index)}
                    >
                      <img src={item?.image || "/placeholder.svg"} alt={item?.title || "Miniatura de proyecto"} />
                    </div>
                  ))}
                </div>
              </>
            )}
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
              <p>
                Nos reunimos para entender tus necesidades, preferencias y presupuesto para tu proyecto de jardinería.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Diseño y Planificación</h3>
              <p>Creamos diseños detallados y planes que reflejan tu visión y cumplen con tus objetivos.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecución del Proyecto</h3>
              <p>
                Nuestro equipo de expertos realiza la transformación con atención al detalle y materiales de calidad.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Mantenimiento Continuo</h3>
              <p>
                Ofrecemos programas de mantenimiento personalizados para asegurar que tu jardín luzca impecable todo el
                año.
              </p>
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
      <section id="contact" className="contact-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Estamos Listos</span>
            <h2 className="section-title">Comienza Tu Transformación Hoy</h2>
            <div className="section-underline"></div>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>¿Listo para Transformar tu Espacio?</h3>
              <p>
                Estamos a solo un mensaje de distancia para convertir tus ideas en realidad. Contáctanos hoy mismo para
                una consulta personalizada sin compromiso.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin />
                  </div>
                  <div className="contact-text">
                    <h4>Ubicación</h4>
                    <p>Little Ferry, NJ 07643</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <div className="contact-text">
                    <h4>Llámanos</h4>
                    <p>551-587-9625</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail />
                  </div>
                  <div className="contact-text">
                    <h4>Escríbenos</h4>
                    <p>mjimenezlandscaping80@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Solicita una Consulta Gratuita</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" placeholder="Tu nombre completo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" placeholder="Tu correo electrónico" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input type="tel" id="phone" placeholder="Para contactarte rápidamente" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">¿Qué Servicio Te Interesa?</label>
                  <select id="service">
                    <option value="">Selecciona un servicio</option>
                    <option value="landscaping">Diseño de Paisajes</option>
                    <option value="garden-maintenance">Mantenimiento de Jardines</option>
                    <option value="interior-remodeling">Remodelación de Interiores</option>
                    <option value="kitchen-bath">Cocinas y Baños</option>
                    <option value="other">Otro Servicio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tu Visión</label>
                  <textarea id="message" placeholder="Cuéntanos sobre tu proyecto ideal" rows="5" required></textarea>
                </div>
                <button type="submit" className="primary-button">
                  ¡Cotiza Gratis!
                  <ArrowRight className="button-icon" />
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
              <p>Transformando jardines con artesanía experta y diseño innovador desde 2018.</p>
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
      <div
        className="floating-quote-button"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
      >
        <div className="quote-button-content">
          <span className="quote-icon">
            <Award className="quote-button-icon" />
          </span>
          <span className="quote-text">¡Solicita Cotización Gratis!</span>
        </div>
      </div>
    </div>
  )
}

