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
  Sofa,
  TreePine,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ThumbsUp,
  Heart,
  ZoomIn,
  X,
} from "lucide-react"
import "./home.css" // Importamos el archivo CSS existente

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("gardening")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  // Añadir un nuevo estado para controlar el modal de imagen ampliada
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Efecto parallax para la sección hero
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

  // Animación al cargar
  useEffect(() => {
    setIsVisible(true)

    // Animar secciones al hacer scroll
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
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Reemplazar con la definición directa de los arrays dentro del componente Home:

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Propietaria en Little Ferry",
      image: "https://source.unsplash.com/random/100x100/?woman",
      text: "¡Increíble transformación! Jimenez Services convirtió mi jardín en un oasis de ensueño. Su atención al detalle y profesionalismo superaron todas mis expectativas. Ahora disfruto cada minuto en mi nuevo espacio exterior.",
      rating: 5,
    },
    {
      name: "John Davis",
      role: "Dueño de Negocio",
      image: "https://source.unsplash.com/random/100x100/?man",
      text: "La remodelación de nuestra oficina fue impecable. El equipo de Jimenez entendió exactamente lo que necesitábamos y entregaron resultados excepcionales en tiempo récord. Nuestros clientes no paran de elogiar el nuevo diseño.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Administradora de Propiedades",
      image: "https://source.unsplash.com/random/100x100/?person",
      text: "Como administradora de múltiples propiedades, valoro la consistencia y confiabilidad. Jimenez Services siempre cumple con excelencia, transformando cada espacio con un toque único y manteniendo la más alta calidad en cada proyecto.",
      rating: 5,
    },
  ]

  const portfolioItems = [
    {
      title: "Transformación Total de Baño",
      category: "remodeling",
      image: "/images/bathroom-after.jpeg",
      beforeImage: "/images/bathroom-before.jpeg",
      description:
        "Renovación completa de baño con acabados de mármol, gabinetes modernos y ducha de vidrio que maximiza el espacio y aporta elegancia contemporánea.",
    },
    {
      title: "Oasis de Jardín Moderno",
      category: "gardening",
      image: "https://source.unsplash.com/random/600x400/?garden",
      description:
        "Transformación completa con diseño sostenible que redujo el consumo de agua en un 40% mientras creaba un espacio de ensueño para esta familia de Little Ferry.",
    },
    {
      title: "Cocina de Lujo Personalizada",
      category: "remodeling",
      image: "https://source.unsplash.com/random/600x400/?kitchen",
      description:
        "Renovación integral con materiales premium que aumentó el valor de la propiedad y creó el espacio perfecto para reuniones familiares y entretenimiento.",
    },
    {
      title: "Jardín Zen Japonés",
      category: "gardening",
      image: "https://source.unsplash.com/random/600x400/?zen,garden",
      description:
        "Espacio de meditación que combina elementos auténticos japoneses con técnicas modernas de paisajismo, creando un refugio de tranquilidad en medio de la ciudad.",
    },
    {
      title: "Baño Tipo Spa de Lujo",
      category: "remodeling",
      image: "/images/bathroom-before.jpeg",
      description:
        "Transformación completa con ducha walk-in, iluminación personalizada y acabados de mármol que convirtió un baño ordinario en un santuario de relajación.",
    },
    {
      title: "Jardín Ecológico Resistente",
      category: "gardening",
      image: "https://source.unsplash.com/random/600x400/?landscape",
      description:
        "Diseño innovador con plantas nativas que eliminó la necesidad de riego constante, reduciendo costos de mantenimiento mientras embellece el entorno.",
    },
    {
      title: "Concepto Abierto Multifuncional",
      category: "remodeling",
      image: "https://source.unsplash.com/random/600x400/?living,room",
      description:
        "Rediseño estructural que transformó espacios compartimentados en un área de vida fluida y luminosa, perfecta para familias modernas que valoran la conexión.",
    },
  ]

  const services = {
    gardening: [
      {
        icon: <Leaf className="service-icon-svg" />,
        title: "Diseño de Paisajes Exclusivos",
        description:
          "Creamos jardines únicos que reflejan su personalidad y estilo de vida, transformando espacios ordinarios en paraísos personalizados que aumentan el valor de su propiedad.",
        features: [
          "Diseños personalizados con visualización 3D",
          "Selección experta de plantas para cada clima",
          "Soluciones sostenibles que ahorran agua",
        ],
      },
      {
        icon: <Shovel className="service-icon-svg" />,
        title: "Mantenimiento Premium",
        description:
          "Cuidamos su inversión con un servicio integral que mantiene su jardín impecable durante todo el año, permitiéndole disfrutar sin preocupaciones de su espacio exterior.",
        features: [
          "Programas personalizados de cuidado estacional",
          "Técnicas profesionales de poda y nutrición",
          "Control preventivo de plagas y enfermedades",
        ],
      },
      {
        icon: <Camera className="service-icon-svg" />,
        title: "Espacios Exteriores Funcionales",
        description:
          "Extendemos su hogar hacia la naturaleza con áreas exteriores diseñadas para vivir, entretener y relajarse, creando recuerdos inolvidables con familiares y amigos.",
        features: [
          "Patios y terrazas con materiales premium",
          "Cocinas exteriores completamente equipadas",
          "Elementos acuáticos y de fuego personalizados",
        ],
      },
    ],
    remodeling: [
      {
        icon: <Paintbrush className="service-icon-svg" />,
        title: "Renovación Interior Integral",
        description:
          "Transformamos completamente sus espacios con diseños modernos y funcionales que reflejan su estilo personal y mejoran su calidad de vida diaria.",
        features: [
          "Remodelaciones completas con gestión de proyecto",
          "Soluciones personalizadas para cada espacio",
          "Acabados premium que marcan la diferencia",
        ],
      },
      {
        icon: <Tool className="service-icon-svg" />,
        title: "Cocinas y Baños de Ensueño",
        description:
          "Convertimos las áreas más importantes de su hogar en espacios excepcionales que combinan belleza, funcionalidad y la última tecnología.",
        features: [
          "Diseños ergonómicos que optimizan el espacio",
          "Materiales de alta calidad con garantía",
          "Instalaciones impecables por expertos certificados",
        ],
      },
      {
        icon: <Ruler className="service-icon-svg" />,
        title: "Transformaciones Estructurales",
        description:
          "Reinventamos la distribución de su hogar para crear espacios abiertos, luminosos y perfectamente adaptados a su estilo de vida moderno.",
        features: [
          "Análisis estructural profesional",
          "Maximización de espacio y luz natural",
          "Soluciones innovadoras para cada necesidad",
        ],
      },
    ],
  }

  const features = [
    {
      icon: <Award />,
      title: "Excelencia Garantizada",
      description:
        "Respaldamos cada proyecto con garantías completas y un compromiso inquebrantable con la calidad superior en cada detalle.",
    },
    {
      icon: <Users />,
      title: "Equipo de Élite",
      description:
        "Nuestros profesionales certificados combinan años de experiencia con las técnicas más innovadoras del sector.",
    },
    {
      icon: <Calendar />,
      title: "Puntualidad Perfecta",
      description:
        "Valoramos su tiempo tanto como usted. Completamos cada proyecto según lo programado, sin sorpresas ni retrasos.",
    },
    {
      icon: <Shield />,
      title: "Materiales Superiores",
      description:
        "Utilizamos exclusivamente materiales de primera calidad que garantizan durabilidad excepcional y belleza duradera.",
    },
  ]

  // Añadir esta función para abrir el modal con la imagen seleccionada
  const openImageModal = (image) => {
    setSelectedImage(image)
    setIsImageModalOpen(true)
    // Añadir un pequeño retraso para permitir que el modal se abra antes de aplicar la clase fullscreen
    setTimeout(() => {
      document.body.classList.add("modal-open")
    }, 10)
  }

  // Añadir esta función para cerrar el modal
  const closeImageModal = () => {
    document.body.classList.remove("modal-open")
    setIsImageModalOpen(false)
    setSelectedImage(null)
  }

  const filteredPortfolio =
    activeFilter === "all"
      ? portfolioItems
      : activeFilter === "before-after"
        ? [
            {
              title: "Transformación Completa de Baño",
              category: "remodeling",
              image: "/images/bathroom-after.jpeg",
              beforeImage: "/images/bathroom-before.jpeg",
              description:
                "Renovación total que convirtió un baño anticuado en un espacio moderno con acabados de mármol y diseño contemporáneo.",
            },
          ]
        : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="home-container">
      {/* Navegación */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
              alt="Jimenez Services LLC Logo"
              className="logo-image"
            />
            <span>Jimenez Services LLC</span>
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
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(heroRef)
                  setIsMenuOpen(false)
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(aboutRef)
                  setIsMenuOpen(false)
                }}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(servicesRef)
                  setIsMenuOpen(false)
                }}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#portafolio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(galleryRef)
                  setIsMenuOpen(false)
                }}
              >
                Portafolio
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(testimonialsRef)
                  setIsMenuOpen(false)
                }}
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(contactRef)
                  setIsMenuOpen(false)
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-overlay"></div>

        {/* Título centrado sobre los contenedores - Ahora con mayor z-index y forzado a ser visible */}
        <div className="hero-title-wrapper">
          <div className={`hero-content visible`}>
            <div className="hero-title-container">
              <h1 className="hero-title">¿Qué servicio buscas?</h1>
            </div>
            <p className="hero-subtitle">
              Transforma tu espacio con expertos que entienden tu visión y superan tus expectativas
            </p>
          </div>
        </div>

        <div className="services-main-container">
          <div className="services-buttons-container">
            <Link to="/interiores" className="service-button">
              <Sofa className="service-button-icon" />
              <div className="service-button-content">
                <span className="service-button-title">Remodelación de Interiores</span>
                <p className="service-button-description">Transformamos espacios con diseños modernos y funcionales</p>
              </div>
              <ArrowRight className="button-arrow" />
            </Link>
            <Link to="/jardineria" className="service-button">
              <TreePine className="service-button-icon" />
              <div className="service-button-content">
                <span className="service-button-title">Jardinería Profesional</span>
                <p className="service-button-description">Creamos y mantenemos jardines hermosos y sostenibles</p>
              </div>
              <ArrowRight className="button-arrow" />
            </Link>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection(aboutRef)}>
          <span>Descubre Más</span>
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* About Section - Modificada para ocupar todo el ancho */}
      <section ref={aboutRef} className="about-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nuestra Historia de Éxito</span>
            <h2 className="section-title">Transformando Espacios Desde 2018</h2>
            <div className="section-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-images-grid">
              <div className="about-image-item">
                <img
                  src="https://source.unsplash.com/random/600x400/?landscaping,team"
                  alt="Equipo trabajando en jardín"
                  className="about-img"
                />
                <div className="image-overlay">
                  <span>Diseño de Jardines</span>
                </div>
              </div>
              <div className="about-image-item">
                <img
                  src="https://source.unsplash.com/random/600x400/?renovation,team"
                  alt="Equipo de remodelación"
                  className="about-img"
                />
                <div className="image-overlay">
                  <span>Remodelación</span>
                </div>
              </div>
              <div className="about-image-item">
                <img
                  src="https://source.unsplash.com/random/600x400/?garden,maintenance"
                  alt="Mantenimiento de jardines"
                  className="about-img"
                />
                <div className="image-overlay">
                  <span>Mantenimiento</span>
                </div>
              </div>
              <div className="about-image-item">
                <img
                  src="https://source.unsplash.com/random/600x400/?interior,design"
                  alt="Diseño de interiores"
                  className="about-img"
                />
                <div className="image-overlay">
                  <span>Diseño Interior</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h3>Pasión por la Perfección en Cada Detalle</h3>
              <p>
                En Jimenez Services LLC, no solo transformamos espacios – creamos experiencias que perduran. Nuestro
                equipo de profesionales altamente capacitados combina visión artística con precisión técnica para
                convertir sus sueños en realidades tangibles.
                <br />
                <br />
                Desde nuestra sede en Little Ferry, New Jersey, hemos llevado nuestra excelencia a toda el área
                metropolitana, construyendo una reputación basada en la calidad excepcional, la integridad absoluta y
                resultados que superan expectativas.
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

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Proyectos Exitosos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Clientes Satisfechos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Expertos Certificados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Soluciones a Medida</span>
            <h2 className="section-title">Servicios de Clase Mundial</h2>
            <div className="section-underline"></div>
          </div>

          <div className="services-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === "gardening" ? "active" : ""}`}
                onClick={() => setActiveTab("gardening")}
              >
                <Leaf className="tab-icon" />
                Jardinería Profesional
              </button>
              <button
                className={`tab-button ${activeTab === "remodeling" ? "active" : ""}`}
                onClick={() => setActiveTab("remodeling")}
              >
                <HomeIcon className="tab-icon" />
                Remodelación Integral
              </button>
            </div>

            <div className="tab-content">
              <div className="services-grid">
                {services[activeTab].map((service, index) => (
                  <div className="service-card" key={index}>
                    <div className={`service-icon ${activeTab === "remodeling" ? "remodeling-icon" : ""}`}>
                      {service.icon}
                    </div>
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
          </div>

          <div className="services-cta">
            <div className="cta-content">
              <h3>¿Listo para transformar tu espacio?</h3>
              <p>
                Agenda una consulta gratuita y descubre cómo podemos hacer realidad tu visión con soluciones
                personalizadas que superarán tus expectativas.
              </p>
            </div>
            <Link to={activeTab === "gardening" ? "/jardineria" : "/interiores"} className="primary-button">
              Solicitar Consulta Gratuita
              <ArrowRight className="button-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={galleryRef} className="portfolio-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Resultados Excepcionales</span>
            <h2 className="section-title">Nuestras Transformaciones</h2>
            <div className="section-underline"></div>
          </div>

          <div className="portfolio-filter">
            <button
              className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              Todos los Proyectos
            </button>
            <button
              className={`filter-button ${activeFilter === "gardening" ? "active" : ""}`}
              onClick={() => setActiveFilter("gardening")}
            >
              Jardinería
            </button>
            <button
              className={`filter-button ${activeFilter === "remodeling" ? "active" : ""}`}
              onClick={() => setActiveFilter("remodeling")}
            >
              Remodelación
            </button>
            <button
              className={`filter-button ${activeFilter === "before-after" ? "active" : ""}`}
              onClick={() => setActiveFilter("before-after")}
            >
              Antes y Después
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map((item, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-image">
                  {item.beforeImage ? (
                    <div
                      className="before-after-container"
                      onClick={() => openImageModal({ before: item.beforeImage, after: item.image, title: item.title })}
                    >
                      <div className="before-after-comparison">
                        <div className="comparison-wrapper">
                          <div className="image-wrapper before-wrapper">
                            <img
                              src={item.beforeImage || "/placeholder.svg"}
                              alt={`Antes: ${item.title}`}
                              className="comparison-image"
                            />
                            <div className="image-overlay-label before-label">Antes</div>
                          </div>
                          <div className="image-wrapper after-wrapper">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={`Después: ${item.title}`}
                              className="comparison-image"
                            />
                            <div className="image-overlay-label after-label">Después</div>
                          </div>
                          <div className="comparison-divider">
                            <div className="divider-line"></div>
                            <div className="divider-handle">
                              <div className="handle-icon">
                                <span></span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      onClick={() => openImageModal({ single: item.image, title: item.title })}
                    />
                  )}
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <span className="portfolio-category">
                        {item.category === "gardening" ? "Jardinería Exclusiva" : "Remodelación Premium"}
                      </span>
                      {/* Eliminar el título que aparecía aquí */}
                      <Link
                        to={item.category === "gardening" ? "/jardineria" : "/interiores"}
                        className="portfolio-link"
                      >
                        Ver Proyecto Completo
                        <ArrowRight className="button-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="testimonials-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Clientes Satisfechos</span>
            <h2 className="section-title">Experiencias Reales</h2>
            <div className="section-underline"></div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < testimonial.rating ? "filled" : ""}`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-cta">
            <div className="cta-stats">
              <div className="cta-stat">
                <ThumbsUp className="cta-stat-icon" />
                <div>
                  <span className="cta-stat-number">98%</span>
                  <span className="cta-stat-label">Satisfacción Garantizada</span>
                </div>
              </div>
              <div className="cta-stat">
                <Heart className="cta-stat-icon" />
                <div>
                  <span className="cta-stat-number">85%</span>
                  <span className="cta-stat-label">Clientes Recurrentes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Estamos Listos</span>
            <h2 className="section-title">Comienza Tu Transformación Hoy</h2>
            <div className="section-underline"></div>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Conecta Con Nosotros</h3>
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
                    <p>Little Ferry, New Jersey</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <div className="contact-text">
                    <h4>Llámanos</h4>
                    <p>551 587 9625</p>
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

                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock />
                  </div>
                  <div className="contact-text">
                    <h4>Horario de Atención</h4>
                    <p>Lunes - Viernes: 8am - 6pm</p>
                    <p>Sábado: 9am - 2pm</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook />
                </a>
                <a href="#" className="social-link">
                  <Instagram />
                </a>
                <a href="#" className="social-link">
                  <Twitter />
                </a>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>¿Listo para Transformar tu Espacio?</h3>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" placeholder="Tu nombre completo" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Tu correo electrónico" required />
                  </div>
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
                  Iniciar Mi Transformación
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
              <p>
                Transformando espacios ordinarios en extraordinarios desde 2018. Nuestro compromiso: excelencia,
                innovación y satisfacción garantizada en cada proyecto.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook />
                </a>
                <a href="#" className="social-link">
                  <Instagram />
                </a>
                <a href="#" className="social-link">
                  <Twitter />
                </a>
                <a href="#" className="social-link">
                  <Pinterest />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Acceso Rápido</h3>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/interiores">Remodelación</Link>
                </li>
                <li>
                  <Link to="/jardineria">Jardinería</Link>
                </li>
                <li>
                  <a href="#" onClick={() => scrollToSection(contactRef)}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-services">
              <h3>Nuestras Soluciones</h3>
              <ul>
                <li>
                  <Link to="/jardineria">Diseño de Paisajes Exclusivos</Link>
                </li>
                <li>
                  <Link to="/jardineria">Mantenimiento Premium</Link>
                </li>
                <li>
                  <Link to="/interiores">Renovación Interior Integral</Link>
                </li>
                <li>
                  <Link to="/interiores">Cocinas y Baños de Ensueño</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 Jimenez Services LLC. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
              <a href="#">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de cotización */}
      <div className="floating-quote-button" onClick={() => scrollToSection(contactRef)}>
        <div className="quote-button-content">
          <span className="quote-icon">
            <Award className="quote-button-icon" />
          </span>
          <span className="quote-text">¡Cotiza Gratis!</span>
        </div>
      </div>

      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeImageModal}>
              <X className="modal-close-icon" />
            </button>

            {selectedImage?.title && <h3 className="modal-title">{selectedImage.title}</h3>}

            {selectedImage?.before ? (
              <div className="modal-before-after">
                <div className="modal-image-container">
                  <div className="modal-comparison-wrapper">
                    <div className="modal-image-side modal-before">
                      <div className="modal-image-badge">Antes</div>
                      <img
                        src={selectedImage.before || "/placeholder.svg"}
                        alt={`Antes: ${selectedImage.title}`}
                        className="modal-comparison-image"
                      />
                      <div className="modal-image-zoom">
                        <ZoomIn className="zoom-icon" />
                      </div>
                    </div>
                    <div className="modal-image-side modal-after">
                      <div className="modal-image-badge">Después</div>
                      <img
                        src={selectedImage.after || "/placeholder.svg"}
                        alt={`Después: ${selectedImage.title}`}
                        className="modal-comparison-image"
                      />
                      <div className="modal-image-zoom">
                        <ZoomIn className="zoom-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="modal-image-description">
                    <p>
                      Desliza el cursor sobre las imágenes para ampliar los detalles. Haz clic para ver en pantalla
                      completa.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="modal-single-image">
                <div className="modal-image-wrapper">
                  <img
                    src={selectedImage?.single || "/placeholder.svg"}
                    alt={selectedImage?.title}
                    className="modal-single-image-content"
                  />
                  <div className="modal-image-zoom">
                    <ZoomIn className="zoom-icon" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Componentes de iconos adicionales
const Hammer = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
    <path d="M17.64 15 22 10.64"></path>
    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
  </svg>
)

const Facebook = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const Instagram = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const Twitter = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 23 3z"></path>
  </svg>
)

const Pinterest = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 12h8"></path>
    <path d="M12 8v8"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
)



