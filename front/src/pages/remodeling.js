"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  CheckCircle,
  Paintbrush,
  Hammer,
  PenToolIcon as Tool,
  Phone,
  Mail,
  MapPin,
  Award,
  Crown,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  Shield,
  Star,
  ArrowRight,
  ThumbsUp,
  Sparkles,
  Home,
  Ruler,
  Lightbulb,
  Leaf,
  Shovel,
} from "lucide-react"
import "./remodeling.css"

export default function Remodeling() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeGalleryItem, setActiveGalleryItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Añadir este useEffect justo después de las declaraciones de estado, antes de los otros useEffect
  useEffect(() => {
    // Función para desplazar al inicio de la página
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    // Ejecutar inmediatamente cuando el componente se monta
    scrollToTop()

    // Manejar el evento de historial para cuando se navega con el botón atrás/adelante
    const handlePopState = () => {
      scrollToTop()
    }

    // Manejar el evento beforeunload para cuando se refresca la página
    const handleBeforeUnload = () => {
      // Guardar una marca en sessionStorage para indicar que la página debe desplazarse al inicio
      sessionStorage.setItem("scrollToTop", "true")
    }

    // Verificar si debemos desplazarnos al inicio (después de un refresco)
    if (sessionStorage.getItem("scrollToTop") === "true") {
      scrollToTop()
      sessionStorage.removeItem("scrollToTop")
    }

    // Agregar event listeners
    window.addEventListener("popstate", handlePopState)
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Limpiar event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

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

  // Nuevo useEffect para corregir los modales
  useEffect(() => {
    // Función para corregir los modales cuando se abren
    function fixModals() {
      // Seleccionar todos los modales
      const modals = document.querySelectorAll(".modal, .image-modal-overlay")

      modals.forEach((modal) => {
        // Eliminar cualquier contenedor blanco
        const containers = modal.querySelectorAll("div, section, article, main, aside, figure")
        containers.forEach((container) => {
          container.style.backgroundColor = "transparent"
          container.style.background = "transparent"
          container.style.border = "none"
          container.style.boxShadow = "none"
          container.style.padding = "0"
          container.style.margin = "0"
          container.style.maxWidth = "100%"
          container.style.maxHeight = "100%"
          container.style.display = "flex"
          container.style.justifyContent = "center"
          container.style.alignItems = "center"
        })

        // Hacer que las imágenes sean más grandes
        const images = modal.querySelectorAll("img")
        images.forEach((img) => {
          img.style.maxWidth = "90vw"
          img.style.maxHeight = "85vh"
          img.style.width = "auto"
          img.style.height = "auto"
          img.style.objectFit = "contain"
          img.style.border = "none"
          img.style.boxShadow = "none"
          img.style.background = "transparent"
          img.style.margin = "0"
          img.style.padding = "0"
        })

        // Asegurar que el botón de cierre sea visible
        const closeButton = modal.querySelector(".modal-close-button")
        if (closeButton) {
          closeButton.style.position = "fixed"
          closeButton.style.top = "20px"
          closeButton.style.right = "20px"
          closeButton.style.zIndex = "10000"
        }
      })
    }

    // Ejecutar la función cuando se abre un modal
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-modal-trigger]")) {
        // Esperar a que el modal se abra
        setTimeout(fixModals, 100)
      }
    })

    // También ejecutar al cargar la página por si hay modales abiertos
    fixModals()

    // Y ejecutar periódicamente para asegurar que los modales se corrijan
    const interval = setInterval(fixModals, 1000)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval)
  }, [])

  // Añadir este useEffect para corregir el modal cuando está abierto
  useEffect(() => {
    if (isImageModalOpen) {
      // Función para aplicar estilos al modal
      const fixModal = () => {
        const overlay = document.querySelector(".image-modal-overlay")
        if (overlay) {
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)"

          // Eliminar cualquier fondo blanco de los contenedores
          const containers = overlay.querySelectorAll("div")
          containers.forEach((container) => {
            container.style.backgroundColor = "transparent"
            container.style.background = "transparent"
            container.style.border = "none"
            container.style.boxShadow = "none"
          })

          // Hacer que las imágenes sean más grandes
          const images = overlay.querySelectorAll("img")
          images.forEach((img) => {
            img.style.maxWidth = "90vw"
            img.style.maxHeight = "85vh"
            img.style.width = "auto"
            img.style.height = "auto"
            img.style.objectFit = "contain"
            img.style.border = "none"
            img.style.boxShadow = "none"
            img.style.background = "transparent"
          })
        }
      }

      // Ejecutar inmediatamente y luego cada 100ms para asegurar que se apliquen los estilos
      fixModal()
      const interval = setInterval(fixModal, 100)

      // Limpiar el intervalo cuando el modal se cierre
      return () => clearInterval(interval)
    }
  }, [isImageModalOpen])

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  // Función mejorada para abrir el modal con cualquier tipo de imagen
  const openImageModal = (image) => {
    // Si la imagen es un string (URL directa), convertirla al formato adecuado
    if (typeof image === "string") {
      setSelectedImage({
        single: image,
        title: "Imagen de Jimenez Services",
      })
    }
    // Si la imagen tiene beforeImage, configurar before/after correctamente
    else if (image.beforeImage) {
      setSelectedImage({
        title: image.title,
        before: image.beforeImage,
        after: image.image,
      })
    }
    // Si es un objeto con single, usarlo directamente
    else {
      setSelectedImage(image)
    }

    setIsImageModalOpen(true)
    // Añadir un pequeño retraso para permitir que el modal se abra antes de aplicar la clase fullscreen
    setTimeout(() => {
      document.body.classList.add("modal-open")
      // Seleccionar el overlay y añadir la clase open para la animación
      const overlay = document.querySelector(".image-modal-overlay")
      if (overlay) {
        overlay.classList.add("open")
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)"

        // Eliminar cualquier fondo blanco de los contenedores
        const containers = overlay.querySelectorAll("div")
        containers.forEach((container) => {
          container.style.backgroundColor = "transparent"
          container.style.background = "transparent"
          container.style.border = "none"
          container.style.boxShadow = "none"
        })

        // Hacer que las imágenes sean más grandes
        const images = overlay.querySelectorAll("img")
        images.forEach((img) => {
          img.style.maxWidth = "90vw"
          img.style.maxHeight = "85vh"
          img.style.width = "auto"
          img.style.height = "auto"
          img.style.objectFit = "contain"
          img.style.border = "none"
          img.style.boxShadow = "none"
          img.style.background = "transparent"
        })
      }
    }, 10)
  }

  // Función para cerrar el modal
  const closeImageModal = () => {
    // Seleccionar el overlay y remover la clase open para la animación
    const overlay = document.querySelector(".image-modal-overlay")
    if (overlay) overlay.classList.remove("open")

    // Añadir un pequeño retraso para permitir que la animación termine antes de cerrar el modal
    setTimeout(() => {
      document.body.classList.remove("modal-open")
      setIsImageModalOpen(false)
      setSelectedImage(null)
    }, 400) // Aumentar el tiempo para que coincida con la duración de la transición
  }

  const services = [
    {
      icon: <Paintbrush className="service-icon-svg" />,
      title: "Remodelación de Interiores",
      description:
        "Transformamos completamente sus espacios interiores con diseños modernos y funcionales que reflejan su estilo personal y mejoran su calidad de vida diaria.",
      features: [
        "Renovación de cocinas y baños",
        "Instalación de pisos y acabados",
        "Diseño personalizado de espacios",
        "Remodelación de sótanos",
        "Actualización de iluminación",
      ],
    },
    {
      icon: <Hammer className="service-icon-svg" />,
      title: "Construcción y Ampliaciones",
      description:
        "Realizamos proyectos de construcción y ampliación que aumentan el valor de su propiedad, desde nuevas habitaciones hasta estructuras completas con los más altos estándares de calidad.",
      features: [
        "Ampliaciones de viviendas",
        "Construcción de estructuras",
        "Renovación de fachadas",
        "Adición de habitaciones",
        "Conversión de espacios",
      ],
    },
    {
      icon: <Tool className="service-icon-svg" />,
      title: "Acabados y Detalles",
      description:
        "Nos especializamos en acabados de alta calidad y detalles que marcan la diferencia, desde trabajos de pintura profesional hasta instalaciones eléctricas y de plomería.",
      features: [
        "Pintura interior y exterior",
        "Instalaciones eléctricas",
        "Carpintería y detalles personalizados",
        "Texturizado de paredes",
        "Instalación de molduras",
      ],
    },
    {
      icon: <Shovel className="service-icon-svg" />,
      title: "Remodelación de Exteriores",
      description:
        "Transformamos sus espacios exteriores con terrazas, patios, pérgolas y otras estructuras que extienden su área habitable y crean ambientes perfectos para disfrutar al aire libre.",
      features: [
        "Diseño e instalación de terrazas",
        "Construcción de patios y pérgolas",
        "Instalación de cocinas exteriores",
        "Creación de espacios de entretenimiento",
        "Estructuras personalizadas",
      ],
    },
    {
      icon: <Home className="service-icon-svg" />,
      title: "Renovación Completa",
      description:
        "Ofrecemos servicios integrales de renovación para transformar completamente su hogar, combinando diseño innovador, materiales de calidad y artesanía excepcional.",
      features: [
        "Renovación de viviendas completas",
        "Actualización de sistemas",
        "Redistribución de espacios",
        "Mejoras de eficiencia energética",
        "Modernización integral",
      ],
    },
    {
      icon: <Ruler className="service-icon-svg" />,
      title: "Diseño Arquitectónico",
      description:
        "Nuestro equipo de diseño crea planos detallados y visualizaciones 3D que le permiten ver su proyecto antes de comenzar la construcción, asegurando que cada detalle cumpla con sus expectativas.",
      features: [
        "Planos arquitectónicos",
        "Visualizaciones 3D",
        "Diseño de espacios funcionales",
        "Optimización de distribución",
        "Consultoría de diseño",
      ],
    },
    {
      icon: <Lightbulb className="service-icon-svg" />,
      title: "Instalaciones Eléctricas",
      description:
        "Realizamos instalaciones eléctricas seguras y eficientes, desde la actualización de sistemas antiguos hasta la implementación de soluciones de iluminación inteligente y automatización del hogar.",
      features: [
        "Actualización de sistemas eléctricos",
        "Instalación de iluminación LED",
        "Sistemas de automatización",
        "Soluciones de ahorro energético",
        "Diagnóstico y reparación",
      ],
    },
    {
      icon: <Leaf className="service-icon-svg" />,
      title: "Remodelación Sostenible",
      description:
        "Implementamos prácticas y materiales sostenibles en nuestros proyectos de remodelación, reduciendo el impacto ambiental mientras creamos espacios saludables y eficientes energéticamente.",
      features: [
        "Materiales ecológicos y sostenibles",
        "Sistemas de ahorro de agua",
        "Aislamiento térmico eficiente",
        "Iluminación de bajo consumo",
        "Certificaciones verdes",
      ],
    },
  ]

  const galleryItems = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.25-CpCQmn9D9nAUd3qFaCTU2I9Iw9dKfo.jpeg",
      title: "Transformación Completa de Baño",
      description:
        "Renovación total con diseño moderno que incluye azulejos en patrón de espiga, ducha con regadera tipo lluvia y mueble con acabado de madera.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg",
      title: "Renovación de Ático",
      description:
        "Transformación de ático sin usar a un espacio habitable con pisos de madera, iluminación empotrada y acabados de alta calidad.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg",
      title: "Renovación de Cocina Moderna",
      description:
        "Transformación completa con encimeras de cuarzo blanco, gabinetes de dos tonos, azulejos hexagonales de mármol y electrodomésticos de acero inoxidable.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.30-reCfkY0qNcuPQoRYvWvbGyLWthgSqj.jpeg",
      title: "Remodelación de Sótano",
      description:
        "Conversión de sótano en espacio habitable con sala de entretenimiento, iluminación empotrada y acabados modernos que maximizan el espacio.",
    },
  ]

  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Propietario en Hackensack",
      text: "Jimenez Services transformó nuestra cocina anticuada en un espacio moderno y funcional que ahora es el centro de nuestra casa. Su atención al detalle y profesionalismo son excepcionales. Terminaron el proyecto a tiempo y dentro del presupuesto, superando todas nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Elena Rodríguez",
      role: "Propietaria de Negocio",
      text: "La remodelación de nuestra oficina fue impecable. El equipo de Jimenez entendió exactamente lo que necesitábamos y entregaron resultados excepcionales en tiempo récord. El espacio es ahora más funcional y estéticamente atractivo, y nuestros clientes no paran de elogiar el nuevo diseño.",
      rating: 5,
    },
  ]

  const benefits = [
    {
      icon: <ThumbsUp />,
      title: "Aumento del Valor de su Propiedad",
      description:
        "Nuestras remodelaciones pueden aumentar significativamente el valor de su propiedad, ofreciendo un excelente retorno de inversión a largo plazo.",
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
        "Respaldamos nuestro trabajo con garantías sólidas y un compromiso inquebrantable con la excelencia en cada detalle del proyecto.",
    },
    {
      icon: <Award />,
      title: "Materiales Premium",
      description:
        "Utilizamos exclusivamente materiales de primera calidad que garantizan durabilidad excepcional y belleza duradera en cada proyecto.",
    },
  ]

  return (
    <div className="page-container">
      {/* Navegación */}
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
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  INICIO
                </Link>
              </li>
              <li className="dropdown">
                <a href="#servicios">
                  SERVICIOS <ChevronDown size={14} className="dropdown-indicator" />
                </a>
                <div className="dropdown-content">
                  <Link to="/jardineria" onClick={() => window.scrollTo(0, 0)}>
                    <Leaf size={16} className="dropdown-icon" /> Jardinería
                  </Link>
                  <Link to="/interiores" className="active" onClick={() => window.scrollTo(0, 0)}>
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
            <h1 className="hero-title">Remodelación Profesional</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Transformamos espacios ordinarios en extraordinarios con diseños personalizados que reflejan su estilo y
            mejoran su calidad de vida
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
            <p className="section-subtitle">TRANSFORMAMOS SU ESPACIO</p>
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
                En Jimenez Services, no solo remodelamos espacios – <strong>creamos ambientes excepcionales</strong> que
                transforman su propiedad y mejoran su calidad de vida. Nuestro equipo de profesionales combina
                conocimiento técnico con visión artística para diseñar, construir y renovar espacios que superan sus
                expectativas.
              </p>
              <p>
                Desde pequeñas renovaciones hasta proyectos completos de remodelación, nos comprometemos a ofrecer un
                servicio personalizado y resultados impecables que <strong>aumentan el valor de su propiedad</strong> y
                crean espacios que disfrutará por años.
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
            <p>Descubra cómo podemos transformar su espacio en un ambiente funcional, moderno y personalizado</p>
            <a href="#contact" className="cta-button">
              Solicitar Consulta Gratuita <ArrowRight className="cta-icon" />
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
                Nos reunimos para entender sus necesidades, evaluar el espacio, discutir ideas y establecer un
                presupuesto preliminar.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Diseño y Planificación</h3>
              <p>
                Creamos planos detallados, seleccionamos materiales y finalizamos presupuestos para su aprobación antes
                de comenzar.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ejecución Experta</h3>
              <p>
                Nuestro equipo de profesionales realiza la transformación con precisión, eficiencia y materiales
                premium.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Entrega y Garantía</h3>
              <p>
                Realizamos una inspección final juntos para asegurar su satisfacción total y respaldamos nuestro trabajo
                con garantías sólidas.
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
            <p>Únase a nuestros clientes satisfechos y transforme su espacio</p>
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
                    <option value="construction">Construcción y Ampliaciones</option>
                    <option value="exterior-remodeling">Remodelación de Exteriores</option>
                    <option value="complete-renovation">Renovación Completa</option>
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
                Transformando espacios ordinarios en extraordinarios desde 2018. Nuestro compromiso: excelencia,
                innovación y satisfacción garantizada en cada proyecto.
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
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <a href="#servicios">Servicios</a>
                </li>
                <li>
                  <a href="#testimonios">Testimonios</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
                <li>
                  <Link to="/jardineria" onClick={() => window.scrollTo(0, 0)}>
                    Jardinería
                  </Link>
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

      {/* Buscar el botón flotante de cotización y reemplazarlo con este nuevo código */}
      <div className="new-floating-estimate-btn" onClick={() => scrollToContact()}>
        <Mail className="estimate-btn-icon" />
        <span className="estimate-btn-text">Free Estimate</span>
      </div>

      {/* Modal de imagen - MODIFICADO para eliminar bordes blancos y hacer imágenes más grandes */}
      {isImageModalOpen && (
        <div
          className="image-modal-overlay"
          onClick={closeImageModal}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)", backdropFilter: "blur(5px)" }}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              maxWidth: "95vw",
              maxHeight: "95vh",
            }}
          >
            <button
              className="modal-close-button"
              onClick={closeImageModal}
              style={{ position: "fixed", top: "20px", right: "20px", zIndex: 10000 }}
            >
              <X size={18} />
            </button>
            {selectedImage?.before ? (
              <div
                className="modal-before-after"
                style={{ display: "flex", gap: "20px", background: "transparent", border: "none" }}
              >
                <div className="modal-before" style={{ flex: 1, background: "transparent", border: "none" }}>
                  <img
                    src={selectedImage.before || "/placeholder.svg"}
                    alt="Imagen antes"
                    style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
                  />
                </div>
                <div className="modal-after" style={{ flex: 1, background: "transparent", border: "none" }}>
                  <img
                    src={selectedImage.after || "/placeholder.svg"}
                    alt="Imagen después"
                    style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
                  />
                </div>
              </div>
            ) : selectedImage?.single ? (
              <div className="modal-single-image" style={{ background: "transparent", border: "none" }}>
                <img
                  src={selectedImage.single || "/placeholder.svg"}
                  alt="Imagen"
                  style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

