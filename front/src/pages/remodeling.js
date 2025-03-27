"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  CheckCircle,
  Crown,
  Hammer,
  Paintbrush,
  Sofa,
  Phone,
  Mail,
  MapPin,
  Award,
  PenToolIcon as Tool,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  Shield,
  Leaf,
  Star,
  ArrowRight,
  ThumbsUp,
  Sparkles,
  Wrench,
  Ruler,
  Lightbulb,
  Droplet,
} from "lucide-react"
import "./remodeling.css"

export default function Remodeling() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeGalleryItem, setActiveGalleryItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  // Función para abrir el modal con la imagen seleccionada
  const openImageModal = (image) => {
    if (typeof image === "string") {
      setSelectedImage({
        single: image,
        title: "Imagen de Jimenez Services",
      })
    } else if (image.beforeImage) {
      setSelectedImage({
        title: image.title,
        before: image.beforeImage,
        after: image.image,
      })
    } else {
      setSelectedImage(image)
    }

    setIsImageModalOpen(true)
    setTimeout(() => {
      document.body.classList.add("modal-open")
      const overlay = document.querySelector(".image-modal-overlay")
      if (overlay) overlay.classList.add("open")
    }, 10)
  }

  // Función para cerrar el modal
  const closeImageModal = () => {
    const overlay = document.querySelector(".image-modal-overlay")
    if (overlay) overlay.classList.remove("open")

    setTimeout(() => {
      document.body.classList.remove("modal-open")
      setIsImageModalOpen(false)
      setSelectedImage(null)
    }, 300)
  }

  const services = [
    {
      icon: <Paintbrush className="service-icon-svg" />,
      title: "Remodelación de Interiores",
      description:
        "Transformamos completamente sus espacios interiores con diseños modernos y funcionales que reflejan su estilo personal y aumentan el valor de su propiedad, creando ambientes que impresionan y perduran.",
      features: [
        "Renovación completa de espacios",
        "Diseños personalizados exclusivos",
        "Acabados de alta calidad",
        "Optimización de espacios",
        "Soluciones a medida",
      ],
    },
    {
      icon: <Hammer className="service-icon-svg" />,
      title: "Cocinas y Baños",
      description:
        "Renovamos las áreas más importantes de su hogar con diseños elegantes y funcionales que combinan belleza y practicidad, utilizando materiales premium y las últimas tendencias en diseño de interiores.",
      features: [
        "Gabinetes personalizados",
        "Encimeras de lujo",
        "Instalaciones modernas",
        "Iluminación estratégica",
        "Distribución optimizada",
      ],
    },
    {
      icon: <Tool className="service-icon-svg" />,
      title: "Acabados y Detalles",
      description:
        "Nos especializamos en acabados de alta calidad y detalles que marcan la diferencia, desde trabajos de pintura profesional hasta instalaciones eléctricas y de plomería que elevan el nivel de su hogar.",
      features: [
        "Pintura interior y exterior",
        "Instalaciones eléctricas",
        "Carpintería personalizada",
        "Molduras decorativas",
        "Texturas y efectos especiales",
      ],
    },
    {
      icon: <Sofa className="service-icon-svg" />,
      title: "Diseño de Interiores",
      description:
        "Creamos espacios armoniosos y estéticos que combinan funcionalidad y belleza para mejorar su calidad de vida y reflejar su personalidad en cada rincón de su hogar, con un estilo único y atemporal.",
      features: [
        "Selección de materiales y colores",
        "Distribución óptima de espacios",
        "Iluminación estratégica",
        "Mobiliario a medida",
        "Accesorios decorativos",
      ],
    },
    {
      icon: <Wrench className="service-icon-svg" />,
      title: "Ampliaciones y Construcción",
      description:
        "Expandimos su espacio habitable con ampliaciones y construcciones que se integran perfectamente con su hogar existente, aumentando su área útil y el valor de su propiedad con diseños arquitectónicos de calidad.",
      features: [
        "Adición de habitaciones",
        "Extensiones de cocina",
        "Conversión de áticos y sótanos",
        "Porches y terrazas",
        "Garajes y estructuras adicionales",
      ],
    },
    {
      icon: <Ruler className="service-icon-svg" />,
      title: "Pisos y Revestimientos",
      description:
        "Instalamos pisos y revestimientos de alta calidad que transforman completamente la apariencia de sus espacios, utilizando materiales duraderos y estéticos que resisten el paso del tiempo y el uso diario.",
      features: [
        "Pisos de madera y laminados",
        "Porcelanatos y cerámicas",
        "Piedra natural y artificial",
        "Vinílicos y materiales innovadores",
        "Alfombras y textiles",
      ],
    },
    {
      icon: <Lightbulb className="service-icon-svg" />,
      title: "Iluminación y Electricidad",
      description:
        "Diseñamos e instalamos sistemas de iluminación que realzan la belleza de sus espacios y mejoran su funcionalidad, junto con actualizaciones eléctricas que garantizan seguridad y eficiencia energética.",
      features: [
        "Diseño de iluminación personalizado",
        "Instalación de luminarias",
        "Actualización de paneles eléctricos",
        "Sistemas de iluminación inteligente",
        "Soluciones de ahorro energético",
      ],
    },
    {
      icon: <Droplet className="service-icon-svg" />,
      title: "Plomería y Sistemas de Agua",
      description:
        "Renovamos su sistema de plomería con instalaciones modernas y eficientes que previenen problemas futuros, mejoran el flujo de agua y contribuyen al ahorro en su consumo, con acabados estéticos y funcionales.",
      features: [
        "Renovación completa de tuberías",
        "Instalación de grifería moderna",
        "Sistemas de filtración de agua",
        "Calentadores eficientes",
        "Solución de problemas complejos",
      ],
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

  const beforeAfterItems = [
    {
      title: "Renovación Completa de Baño",
      before: "/images/bathroom-before.jpeg",
      after: "/images/bathroom-after.jpeg",
      description:
        "Esta transformación total convirtió un baño anticuado en un espacio moderno y elegante con acabados de mármol, gabinetes personalizados y una ducha de vidrio templado que maximiza el espacio disponible.",
      features: [
        "Reemplazo completo de azulejos y accesorios",
        "Instalación de gabinetes a medida",
        "Ducha moderna con puertas de vidrio templado",
        "Iluminación LED empotrada",
      ],
    },
    {
      title: "Renovación Completa de Ático",
      before:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27%20%281%29-2cc09hsVgCuxBXpuiRoxHEiAr4GH2v.jpeg",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg",
      description:
        "Esta transformación convirtió un ático sin utilizar en un espacio habitable luminoso y funcional con pisos de madera de alta calidad, iluminación empotrada y acabados modernos que maximizan el espacio disponible bajo el techo inclinado.",
      features: [
        "Instalación de pisos de madera de alta calidad",
        "Sistema de iluminación empotrada",
        "Aislamiento térmico y acústico premium",
        "Acabados de paredes y techos perfectos",
      ],
    },
    {
      title: "Renovación de Cocina Moderna",
      before:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%281%29-3xLNhK99Bak6DL5NFisMyLQl1FUBbL.jpeg",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg",
      description:
        "Esta transformación completa convirtió una cocina anticuada en un espacio elegante y funcional con encimeras de cuarzo blanco, gabinetes de dos tonos, azulejos hexagonales de mármol y electrodomésticos de acero inoxidable.",
      features: [
        "Instalación de encimeras de cuarzo de alta calidad",
        "Gabinetes de dos tonos con herrajes modernos",
        "Backsplash de azulejos hexagonales de mármol",
        "Electrodomésticos de acero inoxidable de alta gama",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Propietario",
      text: "La remodelación de nuestra cocina superó todas nuestras expectativas. El equipo fue profesional, puntual y los resultados son impresionantes. Cada detalle fue cuidadosamente ejecutado y ahora tenemos el espacio de nuestros sueños.",
      rating: 5,
    },
    {
      name: "Ana Gutiérrez",
      role: "Diseñadora",
      text: "Contratamos a Jimenez Services para remodelar nuestra oficina. La atención al detalle y la calidad del trabajo fueron excepcionales. Transformaron completamente el espacio, creando un ambiente profesional y acogedor que impresiona a todos nuestros clientes.",
      rating: 5,
    },
  ]

  const benefits = [
    {
      icon: <ThumbsUp />,
      title: "Aumento del Valor de su Propiedad",
      description:
        "Una remodelación profesional puede aumentar el valor de su propiedad hasta un 70%, ofreciendo un excelente retorno de inversión.",
    },
    {
      icon: <Sparkles />,
      title: "Espacios Personalizados",
      description:
        "Creamos espacios que reflejan su estilo personal y satisfacen sus necesidades específicas, mejorando su calidad de vida diaria.",
    },
    {
      icon: <Shield />,
      title: "Garantía de Calidad",
      description:
        "Todos nuestros trabajos están respaldados por garantías que aseguran la durabilidad y perfección de cada detalle.",
    },
    {
      icon: <Award />,
      title: "Materiales Premium",
      description:
        "Utilizamos exclusivamente materiales de primera calidad que garantizan durabilidad excepcional y belleza duradera.",
    },
  ]

  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="main-nav-content">
            <div className="logo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
                alt="Jimenez Services LLC Logo"
                className="logo-image"
                onClick={() =>
                  openImageModal(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg",
                  )
                }
              />
              <span className="logo-text">
                Jimenez <span className="services-text">Services</span> LLC
              </span>
            </div>

            <ul className="nav-links">
              <li>
                <Link to="/">INICIO</Link>
              </li>
              <li className="dropdown">
                <a href="#servicios">
                  SERVICIOS <ChevronDown size={14} className="dropdown-indicator" />
                </a>
                <div className="dropdown-content">
                  <Link to="/jardineria">
                    <Leaf size={16} className="dropdown-icon" /> Jardinería
                  </Link>
                  <Link to="/interiores" className="active">
                    <Hammer size={16} className="dropdown-icon" /> Remodelación
                  </Link>
                </div>
              </li>
              <li>
                <a href="#testimonios">TESTIMONIOS</a>
              </li>
              <li>
                <a href="#contact">CONTACTO</a>
              </li>
            </ul>

            <div className="phone-button">
              <Phone size={18} className="phone-icon" />
              <span className="phone-number">551.587.9625</span>
            </div>

            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section remodeling-hero">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-title-container">
            <Crown className="hero-icon" />
            <h1 className="hero-title">Remodelación y Construcción</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Transformamos espacios con diseños modernos y funcionales que reflejan tu estilo personal, aumentan el valor
            de tu propiedad y mejoran tu calidad de vida
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="hero-button">
              <Hammer className="hero-button-icon" /> Explorar Servicios
            </a>
            <a href="#contact" className="hero-button">
              <Phone className="hero-button-icon" /> Solicitar Cotización Gratis
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Remodelación de Élite</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">TRANSFORMAMOS SU ESPACIO INTERIOR</p>
          </div>
          <div className="about-content">
            <div className="about-image-grid">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="about-image-item"
                  onClick={() => openImageModal({ single: item.image, title: item.title })}
                >
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="about-image-overlay">
                    <div className="about-image-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-text">
              <h3>Excelencia en Cada Detalle Constructivo</h3>
              <p>
                En Jimenez Services, no solo remodelamos espacios –{" "}
                <strong>creamos ambientes que transforman su experiencia diaria</strong>. Nuestro equipo de
                profesionales combina visión creativa con precisión técnica para diseñar y construir espacios que
                superan sus expectativas.
              </p>
              <p>
                Desde renovaciones de cocinas y baños hasta proyectos completos de construcción, nos comprometemos a
                entregar resultados excepcionales con materiales de primera calidad y acabados impecables que{" "}
                <strong>aumentan el valor de su propiedad</strong> y crean espacios que disfrutará por años.
              </p>
              <div className="about-features">
                {benefits.map((benefit, index) => (
                  <div className="feature" key={index}>
                    <div className="feature-icon">{benefit.icon}</div>
                    <div className="feature-text">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cta-container">
                <a href="#contact" className="cta-button">
                  Solicitar Presupuesto Gratuito <ArrowRight className="cta-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section services-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">SOLUCIONES PROFESIONALES DE REMODELACIÓN</p>
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

          <div className="services-cta">
            <p>Descubra cómo podemos transformar su espacio interior en un ambiente elegante y funcional</p>
            <a href="#contact" className="cta-button">
              Solicitar Consulta Gratuita <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="transformaciones" className="section before-after-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Antes y Después</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">TRANSFORMACIONES REALES</p>
          </div>

          <div className="before-after-showcase">
            {beforeAfterItems.map((item, index) => (
              <div className="before-after-item" key={index}>
                <div
                  className="before-after-images"
                  onClick={() => openImageModal({ before: item.before, after: item.after, title: item.title })}
                >
                  <div className="before-image">
                    <img src={item.before || "/placeholder.svg"} alt={`${item.title} - Antes`} />
                    <div className="image-label">Antes</div>
                  </div>
                  <div className="after-image">
                    <img src={item.after || "/placeholder.svg"} alt={`${item.title} - Después`} />
                    <div className="image-label">Después</div>
                  </div>
                  <div className="click-to-expand">Ver en detalle</div>
                </div>
                <div className="transformation-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="transformation-features">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle className="check-icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="before-after-cta">
            <p>¿Listo para transformar su espacio interior? Podemos hacer lo mismo por usted.</p>
            <a href="#contact" className="cta-button">
              Solicitar Su Transformación <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Proceso</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">CÓMO TRABAJAMOS</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consulta Inicial</h3>
              <p>
                Nos reunimos en su propiedad para entender sus necesidades, evaluar el espacio y discutir ideas y
                presupuesto.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Diseño Personalizado</h3>
              <p>Creamos planos detallados con selección de materiales, colores y elementos que reflejan su visión.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecución Experta</h3>
              <p>
                Nuestro equipo de profesionales realiza la remodelación con precisión, eficiencia y materiales premium.
              </p>
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

          <div className="process-cta">
            <p>Comience su proyecto hoy mismo con una consulta gratuita</p>
            <a href="#contact" className="cta-button">
              Programar Consulta <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="section testimonials-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Testimonios</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">LO QUE DICEN NUESTROS CLIENTES</p>
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
                  <div className="testimonial-author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-cta">
            <p>Únase a nuestros clientes satisfechos y transforme su espacio interior</p>
            <a href="#contact" className="cta-button">
              Solicitar Presupuesto <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contáctenos</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">ESTAMOS LISTOS PARA AYUDARLE</p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <p>
                Estamos a solo un mensaje de distancia para convertir sus ideas en realidad. Contáctenos hoy mismo para
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
                    <h4>Teléfono</h4>
                    <p>551-587-9625</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>mjimenezlandscaping80@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock />
                  </div>
                  <div className="contact-text">
                    <h4>Horario</h4>
                    <p>Lunes - Viernes: 8am - 6pm</p>
                    <p>Sábado: 9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h3>Solicite Presupuesto Gratuito</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" placeholder="Su nombre completo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" placeholder="Su correo electrónico" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input type="tel" id="phone" placeholder="Su número de teléfono" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select id="service">
                    <option value="">Seleccione un servicio</option>
                    <option value="interior-remodeling">Remodelación de Interiores</option>
                    <option value="kitchen-bath">Cocinas y Baños</option>
                    <option value="finishing">Acabados y Detalles</option>
                    <option value="interior-design">Diseño de Interiores</option>
                    <option value="other">Otro Servicio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" rows="5" placeholder="Cuéntenos sobre su proyecto" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  SOLICITAR PRESUPUESTO
                </button>
                <p className="form-note">Respuesta garantizada en menos de 24 horas</p>
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
                  onClick={() =>
                    openImageModal(
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg",
                    )
                  }
                />
                <span>Jimenez Services LLC</span>
              </div>
              <p>
                Transformando espacios interiores en obras maestras de diseño desde 2018. Nuestro compromiso:
                excelencia, innovación y satisfacción garantizada en cada proyecto.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-icon">
                  <Facebook size={18} />
                </a>
                <a href="#" className="footer-social-icon">
                  <Instagram size={18} />
                </a>
                <a href="#" className="footer-social-icon">
                  <Twitter size={18} />
                </a>
                <a href="#" className="footer-social-icon">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <a href="#servicios">Servicios</a>
                </li>
                <li>
                  <a href="#transformaciones">Antes/Después</a>
                </li>
                <li>
                  <a href="#testimonios">Testimonios</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
                <li>
                  <Link to="/jardineria">Jardinería</Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contáctenos</h3>
              <p>Little Ferry, NJ 07643</p>
              <p>
                Teléfono: <a href="tel:5515879625">551-587-9625</a>
              </p>
              <p>
                Email: <a href="mailto:mjimenezlandscaping80@gmail.com">mjimenezlandscaping80@gmail.com</a>
              </p>
              <p>Lunes - Viernes: 8am - 6pm</p>
              <p>Sábado: 9am - 2pm</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Jimenez Services LLC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botón flotante de cotización */}
      <div className="floating-quote-button" onClick={() => scrollToContact()}>
        <Phone className="quote-button-icon" />
      </div>

      {/* Modal de imagen */}
      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeImageModal}>
              <X size={18} />
            </button>
            {selectedImage?.title && <h3 className="modal-title">{selectedImage.title}</h3>}
            {selectedImage?.before ? (
              <div className="modal-before-after">
                <div className="modal-before">
                  <img src={selectedImage.before || "/placeholder.svg"} alt={`Antes: ${selectedImage.title}`} />
                  <div className="modal-image-label">Antes</div>
                </div>
                <div className="modal-after">
                  <img src={selectedImage.after || "/placeholder.svg"} alt={`Después: ${selectedImage.title}`} />
                  <div className="modal-image-label">Después</div>
                </div>
              </div>
            ) : selectedImage?.single ? (
              <div className="modal-single-image">
                <img src={selectedImage.single || "/placeholder.svg"} alt={selectedImage.title} />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

