"use client"

import { useEffect, useState, useRef } from "react"
import {
  Leaf,
  HomeIcon,
  CheckCircle,
  Camera,
  Users,
  Calendar,
  PenToolIcon as Tool,
  Paintbrush,
  Shovel,
  Ruler,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  ChevronDown,
  TreePine,
  Hammer,
} from "lucide-react"
import "./home.css" // Importamos el archivo CSS existente
import { Link } from "react-router-dom" // Cambiado a react-router-dom

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("gardening")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

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

  // Modificar el array portfolioItems para incluir el nuevo proyecto de baño
  const portfolioItems = [
    // Proyectos de remodelación con imágenes reales
    {
      title: "Transformación Completa de Baño",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.25-CpCQmn9D9nAUd3qFaCTU2I9Iw9dKfo.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26-xCpRvT859Z09XQxaNHHY5tb13vMa6K.jpeg",
      description:
        "Renovación total de baño con diseño moderno que incluye azulejos en patrón de espiga, ducha con regadera tipo lluvia, mueble con acabado de madera y encimera de mármol blanco.",
    },
    {
      title: "Renovación de Ático",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27%20%281%29-2cc09hsVgCuxBXpuiRoxHEiAr4GH2v.jpeg",
      description:
        "Transformación completa de ático sin usar a un espacio habitable con pisos de madera, iluminación empotrada y acabados de alta calidad que maximizan el espacio disponible.",
    },
    {
      title: "Renovación de Cocina Moderna",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%281%29-3xLNhK99Bak6DL5NFisMyLQl1FUBbL.jpeg",
      description:
        "Transformación completa de cocina con encimeras de cuarzo blanco, gabinetes de dos tonos, azulejos hexagonales de mármol y electrodomésticos de acero inoxidable.",
    },

    // Proyectos de jardinería con imágenes reales
    {
      title: "Transformación Completa de Jardín",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-bqk7asm0NPvOV85HOVI9G9YgvRAdAV.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20-HcZW7tGy7aYQ20LD1BdPOHEtF0GiQh.jpeg",
      description:
        "Renovación integral de jardín residencial que incluye instalación de mantillo negro, definición de bordes, plantación de flores ornamentales y mejora del césped, creando un espacio exterior atractivo y de bajo mantenimiento.",
    },
    {
      title: "Diseño de Camino Lateral con Privacidad",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-OsEJe2YeWg3P6g3iXIq3wVL7xTih3B.jpeg",
      description:
        "Transformación de un espacio lateral estrecho con árboles de hoja perenne para privacidad, cerca decorativa, iluminación solar y mantillo de calidad que crea un pasaje funcional y estéticamente agradable.",
    },
    {
      title: "Mantenimiento de Jardín Residencial",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-78p413j3LMqwgT63kJy72TCkUe4WGZ.jpeg",
      description:
        "Servicio profesional de mantenimiento de jardín que incluye corte de césped, poda de arbustos y cuidado de plantas ornamentales, mejorando significativamente la apariencia y valor de la propiedad residencial.",
    },
    {
      title: "Instalación de Mantillo Profesional",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-SO1uzOSv574OMbCkD6aeSIWTJqec7R.jpeg",
      description:
        "Instalación profesional de mantillo y paisajismo que transforma completamente el aspecto exterior de la propiedad, mejorando su valor estético y funcional.",
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
        image: "https://source.unsplash.com/random/600x400/?landscape,design",
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
        image: "https://source.unsplash.com/random/600x400/?garden,maintenance",
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
        image: "https://source.unsplash.com/random/600x400/?outdoor,living",
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
        image: "https://source.unsplash.com/random/600x400/?interior,renovation",
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
        image: "https://source.unsplash.com/random/600x400/?kitchen,bathroom",
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
        image: "https://source.unsplash.com/random/600x400/?home,structure",
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
      if (overlay) overlay.classList.add("open")
    }, 10)
  }

  // Añadir esta función para cerrar el modal
  const closeImageModal = () => {
    // Seleccionar el overlay y remover la clase open para la animación
    const overlay = document.querySelector(".image-modal-overlay")
    if (overlay) overlay.classList.remove("open")

    // Añadir un pequeño retraso para permitir que la animación termine antes de cerrar el modal
    setTimeout(() => {
      document.body.classList.remove("modal-open")
      setIsImageModalOpen(false)
      setSelectedImage(null)
    }, 300)
  }

  const filteredPortfolio =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="home-container">
      {/* Navegación estilo Westlake */}

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
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(heroRef)
                  }}
                >
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(aboutRef)
                  }}
                >
                  NOSOTROS
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(servicesRef)
                  }}
                >
                  SERVICIOS <ChevronDown size={14} className="dropdown-indicator" />
                </a>
                <div className="dropdown-content">
                  <Link to="/jardineria">
                    <TreePine size={16} className="dropdown-icon" /> Jardinería
                  </Link>
                  <Link to="/interiores">
                    <Hammer size={16} className="dropdown-icon" /> Remodelación
                  </Link>
                </div>
              </li>
              <li>
                <a
                  href="#portafolio"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(galleryRef)
                  }}
                >
                  PORTAFOLIO
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(testimonialsRef)
                  }}
                >
                  TESTIMONIOS
                </a>
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

      {/* Hero Section - estilo Westlake */}
      <section
        ref={heroRef}
        className="hero-section"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg")`,
        }}
        onClick={() =>
          openImageModal(
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg",
          )
        }
      >
        {/* Eliminar el div con clase hero-overlay */}
        <div className="hero-content" onClick={(e) => e.stopPropagation()}>
          <h1 className="hero-title">¿Qué servicio buscas?</h1>
          <div className="hero-buttons">
            <Link to="/jardineria" className="hero-button">
              <TreePine className="hero-button-icon" /> Jardinería
            </Link>
            <Link to="/interiores" className="hero-button">
              <Hammer className="hero-button-icon" /> Remodelación
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - estilo Westlake */}
      <section ref={aboutRef} className="section about-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sobre Nosotros</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">NUESTRA HISTORIA DE ÉXITO</p>
          </div>
          <div className="about-content">
            <div className="about-image-grid">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2020.25.15-IeRxiFOPgLISDQGOlZewhpSH0uPm7k.jpeg",
                  alt: "Camión y trailer de Jimenez Services LLC",
                  title: "Equipo Profesional",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-SO1uzOSv574OMbCkD6aeSIWTJqec7R.jpeg",
                  alt: "Equipo de Jimenez Services instalando mantillo en un jardín",
                  title: "Instalación de Mantillo",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.30-reCfkY0qNcuPQoRYvWvbGyLWthgSqj.jpeg",
                  alt: "Trabajador realizando remodelación de ático",
                  title: "Remodelación en Proceso",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27-EqiOMY03IlblCJkSzaIHSZu2GPcI9r.jpeg",
                  alt: "Cocina moderna con gabinetes de dos tonos",
                  title: "Cocina Moderna",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="about-image-item"
                  onClick={() =>
                    openImageModal({
                      single: image.src,
                      title: image.title,
                    })
                  }
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                  <div className="about-image-overlay">
                    <div className="about-image-title">{image.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-text">
              <h3>Pasión por la Perfección en Cada Detalle</h3>
              <p>
                En Jimenez Services LLC, no solo transformamos espacios – creamos experiencias que perduran. Nuestro
                equipo de profesionales altamente capacitados combina visión artística con precisión técnica para
                convertir sus sueños en realidades tangibles.
              </p>
              <p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - estilo Westlake */}
      <section ref={servicesRef} className="section services-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">SOLUCIONES PROFESIONALES A MEDIDA</p>
          </div>
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "gardening" ? "active" : ""}`}
              onClick={() => setActiveTab("gardening")}
            >
              <Leaf className="tab-icon" />
              Jardinería
            </button>
            <button
              className={`tab-button ${activeTab === "remodeling" ? "active" : ""}`}
              onClick={() => setActiveTab("remodeling")}
            >
              <HomeIcon className="tab-icon" />
              Remodelación
            </button>
          </div>
          <div className="services-grid">
            {services[activeTab].map((service, index) => (
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
                {service.image && (
                  <div
                    className="service-image"
                    onClick={() =>
                      openImageModal({
                        single: service.image,
                        title: service.title,
                      })
                    }
                  >
                    <img src={service.image || "/placeholder.svg"} alt={service.title} />
                    <div className="service-image-overlay">
                      <div className="service-image-title">{service.title}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - estilo Westlake */}
      <section ref={galleryRef} className="section portfolio-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Portafolio</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">PROYECTOS DESTACADOS</p>
          </div>
          <div className="portfolio-filter">
            <button
              className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              TODOS
            </button>
            <button
              className={`filter-button ${activeFilter === "gardening" ? "active" : ""}`}
              onClick={() => setActiveFilter("gardening")}
            >
              JARDINERÍA
            </button>
            <button
              className={`filter-button ${activeFilter === "remodeling" ? "active" : ""}`}
              onClick={() => setActiveFilter("remodeling")}
            >
              REMODELACIÓN
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map((item, index) => (
              <div
                key={index}
                className="portfolio-item"
                onClick={() =>
                  item.beforeImage ? openImageModal(item) : openImageModal({ single: item.image, title: item.title })
                }
              >
                <div className="portfolio-image">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="main-portfolio-image" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h3>{item.title}</h3>
                      <div className="portfolio-button">
                        {item.category === "gardening" ? "Jardinería" : "Remodelación"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - estilo Westlake */}
      <section ref={testimonialsRef} className="section testimonials-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Testimonios</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">LO QUE DICEN NUESTROS CLIENTES</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
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

      {/* Contact Section - estilo Westlake */}
      <section ref={contactRef} className="section contact-section animate-on-scroll">
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
              <h3>Envíenos un Mensaje</h3>
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
                    <option value="landscaping">Diseño de Paisajes</option>
                    <option value="garden-maintenance">Mantenimiento de Jardines</option>
                    <option value="interior-remodeling">Remodelación de Interiores</option>
                    <option value="kitchen-bath">Cocinas y Baños</option>
                    <option value="other">Otro Servicio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" rows="5" placeholder="Cuéntenos sobre su proyecto" required></textarea>
                </div>
                <button type="submit">ENVIAR MENSAJE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - estilo Westlake */}
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
                  <a
                    href="#inicio"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(heroRef)
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
                    }}
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <Link to="/jardineria">Jardinería</Link>
                </li>
                <li>
                  <Link to="/interiores">Remodelación</Link>
                </li>
                <li>
                  <a
                    href="#portafolio"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(galleryRef)
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
                    }}
                  >
                    Contacto
                  </a>
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
      <div className="floating-quote-button" onClick={() => scrollToSection(contactRef)}>
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

