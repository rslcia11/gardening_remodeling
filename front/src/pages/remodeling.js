"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle,
  Crown,
  Hammer,
  Paintbrush,
  Ruler,
  Sofa,
  Phone,
  Mail,
  MapPin,
  Award,
} from "lucide-react"
import "./remodeling.css"

export default function Remodeling() {
  // Modificar la sección hero para usar la nueva imagen de fondo
  const [isVisible, setIsVisible] = useState(false)
  const [activeGalleryItem, setActiveGalleryItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Añadir un nuevo estado para controlar el modal de imagen ampliada
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

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
      icon: <Paintbrush />,
      title: "Renovación Completa",
      description:
        "Transformamos completamente tus espacios con diseños modernos y funcionales que reflejan tu estilo personal.",
      features: ["Diseño personalizado", "Demolición y reconstrucción", "Acabados de alta calidad"],
    },
    {
      icon: <Sofa />,
      title: "Diseño de Interiores",
      description:
        "Creamos espacios armoniosos y estéticos que combinan funcionalidad y belleza para mejorar tu calidad de vida.",
      features: ["Selección de mobiliario", "Esquemas de color", "Iluminación y accesorios"],
    },
    {
      icon: <Hammer />,
      title: "Cocinas y Baños",
      description:
        "Especializados en la renovación de las áreas más importantes de tu hogar con materiales premium y diseños innovadores.",
      features: ["Gabinetes personalizados", "Encimeras de lujo", "Plomería e iluminación"],
    },
    {
      icon: <Ruler />,
      title: "Modificaciones Estructurales",
      description: "Realizamos cambios estructurales expertos que mejoran el flujo y la funcionalidad de tu hogar.",
      features: ["Eliminación de muros", "Ampliaciones", "Optimización de espacios"],
    },
  ]

  const galleryItems = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27-EqiOMY03IlblCJkSzaIHSZu2GPcI9r.jpeg",
      title: "Cocina Moderna de Dos Tonos",
      description:
        "Renovación completa con gabinetes de dos tonos, encimeras de cuarzo y electrodomésticos de acero inoxidable.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.30-reCfkY0qNcuPQoRYvWvbGyLWthgSqj.jpeg",
      title: "Remodelación de Ático en Proceso",
      description:
        "Transformación de espacios no utilizados en áreas funcionales con acabados de alta calidad y atención al detalle.",
    },
    {
      image: "/images/bathroom-after.jpeg",
      title: "Transformación Total de Baño",
      description: "Renovación completa con acabados de mármol, gabinetes modernos y ducha de vidrio templado.",
    },
    {
      image: "/images/bathroom-before.jpeg",
      title: "Antes y Después: Baño Renovado",
      description: "Vea la dramática transformación de este baño antiguo a un espacio moderno y elegante.",
    },
  ]

  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Propietario",
      text: "La remodelación de nuestra cocina superó todas nuestras expectativas. El equipo fue profesional, puntual y los resultados son impresionantes.",
    },
    {
      name: "Ana Gutiérrez",
      role: "Diseñadora",
      text: "Contratamos a Jimenez Services para remodelar nuestra oficina. La atención al detalle y la calidad del trabajo fueron excepcionales.",
    },
  ]

  // Añadir esta función para abrir el modal con la imagen seleccionada
  const openImageModal = (image) => {
    setSelectedImage(image)
    setIsImageModalOpen(true)
  }

  // Añadir esta función para cerrar el modal
  const closeImageModal = () => {
    setIsImageModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="remodeling-page">
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
              <Link to="/interiores" className="active">
                Remodelación
              </Link>
            </li>
            <li>
              <Link to="/jardineria">Jardinería</Link>
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
      <section className="remodeling-hero">
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-title-container">
            <Crown className="hero-icon" />
            <h1 className="hero-title">Remodelación de Interiores</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Transformamos espacios con diseños modernos y funcionales que reflejan tu estilo personal y mejoran tu
            calidad de vida
          </p>
          <Link to="#services" className="primary-button">
            Explorar Servicios
            <ArrowRight className="button-icon" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="remodeling-services animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nuestros Servicios</span>
            <h2 className="section-title">Soluciones de Remodelación</h2>
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
      <section className="remodeling-gallery animate-on-scroll">
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

      {/* Before & After Section */}
      <section className="remodeling-before-after animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Transformaciones Reales</span>
            <h2 className="section-title">Antes y Después</h2>
            <div className="section-underline"></div>
          </div>

          <div className="before-after-showcase">
            <div className="before-after-showcase">
              <div className="before-after-item">
                <div
                  className="before-after-images"
                  onClick={() =>
                    openImageModal({
                      before: "/images/bathroom-before.jpeg",
                      after: "/images/bathroom-after.jpeg",
                      title: "Renovación Completa de Baño",
                    })
                  }
                >
                  <div className="before-image">
                    <img src="/images/bathroom-before.jpeg" alt="Baño antes de la remodelación" />
                    <div className="image-label">Antes</div>
                  </div>
                  <div className="after-image">
                    <img src="/images/bathroom-after.jpeg" alt="Baño después de la remodelación" />
                    <div className="image-label">Después</div>
                  </div>
                  <div className="click-to-expand">Ver en detalle</div>
                </div>
                <div className="transformation-details">
                  <h3>Renovación Completa de Baño</h3>
                  <p>
                    Esta transformación total convirtió un baño anticuado en un espacio moderno y elegante con acabados
                    de mármol, gabinetes personalizados y una ducha de vidrio templado que maximiza el espacio
                    disponible.
                  </p>
                  <ul className="transformation-features">
                    <li>
                      <CheckCircle className="check-icon" /> Reemplazo completo de azulejos y accesorios
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Instalación de gabinetes a medida
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Ducha moderna con puertas de vidrio templado
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Iluminación LED empotrada
                    </li>
                  </ul>
                </div>
              </div>

              <div className="before-after-item">
                <div
                  className="before-after-images"
                  onClick={() =>
                    openImageModal({
                      before:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27%20%281%29-2cc09hsVgCuxBXpuiRoxHEiAr4GH2v.jpeg",
                      after:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg",
                      title: "Renovación Completa de Ático",
                    })
                  }
                >
                  <div className="before-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27%20%281%29-2cc09hsVgCuxBXpuiRoxHEiAr4GH2v.jpeg"
                      alt="Ático antes de la remodelación"
                    />
                    <div className="image-label">Antes</div>
                  </div>
                  <div className="after-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg"
                      alt="Ático después de la remodelación"
                    />
                    <div className="image-label">Después</div>
                  </div>
                  <div className="click-to-expand">Ver en detalle</div>
                </div>
                <div className="transformation-details">
                  <h3>Renovación Completa de Ático</h3>
                  <p>
                    Esta transformación convirtió un ático sin utilizar en un espacio habitable luminoso y funcional con
                    pisos de madera de alta calidad, iluminación empotrada y acabados modernos que maximizan el espacio
                    disponible bajo el techo inclinado.
                  </p>
                  <ul className="transformation-features">
                    <li>
                      <CheckCircle className="check-icon" /> Instalación de pisos de madera de alta calidad
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Sistema de iluminación empotrada
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Aislamiento térmico y acústico premium
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Acabados de paredes y techos perfectos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="before-after-item">
                <div
                  className="before-after-images"
                  onClick={() =>
                    openImageModal({
                      before:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%281%29-3xLNhK99Bak6DL5NFisMyLQl1FUBbL.jpeg",
                      after:
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg",
                      title: "Renovación de Cocina Moderna",
                    })
                  }
                >
                  <div className="before-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%281%29-3xLNhK99Bak6DL5NFisMyLQl1FUBbL.jpeg"
                      alt="Cocina antes de la remodelación"
                    />
                    <div className="image-label">Antes</div>
                  </div>
                  <div className="after-image">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg"
                      alt="Cocina después de la remodelación"
                    />
                    <div className="image-label">Después</div>
                  </div>
                  <div className="click-to-expand">Ver en detalle</div>
                </div>
                <div className="transformation-details">
                  <h3>Renovación de Cocina Moderna</h3>
                  <p>
                    Esta transformación completa convirtió una cocina anticuada en un espacio elegante y funcional con
                    encimeras de cuarzo blanco, gabinetes de dos tonos, azulejos hexagonales de mármol y
                    electrodomésticos de acero inoxidable.
                  </p>
                  <ul className="transformation-features">
                    <li>
                      <CheckCircle className="check-icon" /> Instalación de encimeras de cuarzo de alta calidad
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Gabinetes de dos tonos con herrajes modernos
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Backsplash de azulejos hexagonales de mármol
                    </li>
                    <li>
                      <CheckCircle className="check-icon" /> Electrodomésticos de acero inoxidable de alta gama
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="remodeling-process animate-on-scroll">
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
                Nos reunimos para entender tus necesidades, preferencias y presupuesto para tu proyecto de remodelación.
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
              <p>Nuestro equipo de expertos realiza la remodelación con atención al detalle y materiales de calidad.</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Entrega Final</h3>
              <p>
                Realizamos una revisión completa para asegurar que cada detalle cumple con nuestros estándares de
                calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="remodeling-testimonials animate-on-scroll">
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
              <p>Transformando hogares con artesanía experta y diseño innovador desde 2013.</p>
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
      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeImageModal}>
              ×
            </button>
            <h3 className="modal-title">{selectedImage?.title}</h3>

            <div className="modal-before-after horizontal">
              <div className="modal-before">
                <img src={selectedImage?.before || "/placeholder.svg"} alt={`Antes: ${selectedImage?.title}`} />
                <div className="modal-image-label">Antes</div>
              </div>
              <div className="modal-after">
                <img src={selectedImage?.after || "/placeholder.svg"} alt={`Después: ${selectedImage?.title}`} />
                <div className="modal-image-label">Después</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

