"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
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
  Scissors,
  Cloud,
  Flower,
  Truck,
} from "lucide-react"
import "./gardening.css"

export default function Gardening() {
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

  // Función para abrir el modal de imagen
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
      icon: <Leaf className="service-icon-svg" />,
      title: "Mantenimiento de Césped",
      description:
        "Transformamos su jardín con un servicio integral de mantenimiento que incluye corte profesional, fertilización programada y tratamientos personalizados para mantener su césped verde, saludable y libre de plagas durante todo el año.",
      features: [
        "Corte profesional de precisión",
        "Fertilización estacional",
        "Control de malezas y plagas",
        "Aireación y escarificación",
        "Resiembra de áreas dañadas",
      ],
    },
    {
      icon: <Droplets className="service-icon-svg" />,
      title: "Sistemas de Riego",
      description:
        "Diseñamos e instalamos sistemas de riego automatizados de alta eficiencia que conservan agua, reducen sus facturas y mantienen su jardín perfectamente hidratado en todas las estaciones, incluso durante su ausencia.",
      features: [
        "Instalación de sistemas inteligentes",
        "Reparación y mantenimiento",
        "Soluciones de ahorro de agua",
        "Sistemas de goteo para plantas",
        "Controladores con sensores de lluvia",
      ],
    },
    {
      icon: <Shovel className="service-icon-svg" />,
      title: "Plantación y Paisajismo",
      description:
        "Creamos paisajes espectaculares que aumentan el valor de su propiedad con selección experta de plantas, árboles y arbustos adaptados a su entorno, combinando belleza, funcionalidad y sostenibilidad en cada proyecto.",
      features: [
        "Diseño personalizado de jardines",
        "Selección de plantas nativas",
        "Instalación profesional de césped",
        "Creación de jardines temáticos",
        "Jardines de bajo mantenimiento",
      ],
    },
    {
      icon: <TreePine className="service-icon-svg" />,
      title: "Espacios Exteriores",
      description:
        "Transformamos su patio en un oasis al aire libre con terrazas elegantes, caminos encantadores y elementos decorativos que crean ambientes perfectos para relajarse, entretenerse y disfrutar de la naturaleza durante todo el año.",
      features: [
        "Terrazas y patios con materiales premium",
        "Caminos y senderos decorativos",
        "Iluminación paisajística LED",
        "Pérgolas y estructuras de sombra",
        "Áreas de fuego y cocinas exteriores",
      ],
    },
    {
      icon: <Scissors className="service-icon-svg" />,
      title: "Poda y Cuidado de Árboles",
      description:
        "Mantenemos sus árboles y arbustos saludables y estéticamente atractivos con servicios profesionales de poda, formación y tratamientos preventivos que prolongan su vida y realzan la belleza de su propiedad.",
      features: [
        "Poda de formación y mantenimiento",
        "Eliminación de ramas peligrosas",
        "Tratamientos contra plagas y enfermedades",
        "Fertilización especializada",
        "Asesoramiento experto",
      ],
    },
    {
      icon: <Cloud className="service-icon-svg" />,
      title: "Control de Plagas y Enfermedades",
      description:
        "Protegemos su jardín con tratamientos ecológicos y efectivos contra plagas, enfermedades y malezas, manteniendo un equilibrio natural que favorece el crecimiento saludable de sus plantas sin dañar el medio ambiente.",
      features: [
        "Diagnóstico preciso de problemas",
        "Tratamientos orgánicos disponibles",
        "Prevención de infestaciones",
        "Control integrado de plagas",
        "Soluciones personalizadas",
      ],
    },
    {
      icon: <Flower className="service-icon-svg" />,
      title: "Jardines Estacionales",
      description:
        "Mantenemos su jardín colorido y vibrante durante todo el año con plantaciones estacionales de flores, bulbos y plantas ornamentales que se adaptan perfectamente a cada temporada, creando interés visual constante.",
      features: [
        "Diseño de jardines por temporada",
        "Rotación de plantas de temporada",
        "Selección de flores de alto impacto",
        "Combinaciones armoniosas de colores",
        "Mantenimiento especializado",
      ],
    },
    {
      icon: <Truck className="service-icon-svg" />,
      title: "Instalación de Mantillo y Sustratos",
      description:
        "Mejoramos la salud y apariencia de sus jardines con instalación profesional de mantillo y sustratos de alta calidad que conservan la humedad, previenen malezas y enriquecen el suelo para un crecimiento óptimo de sus plantas.",
      features: [
        "Mantillo decorativo de calidad premium",
        "Sustratos específicos para cada tipo de planta",
        "Instalación precisa y uniforme",
        "Mejora de la retención de agua",
        "Control natural de malezas",
      ],
    },
  ]

  const galleryItems = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-SO1uzOSv574OMbCkD6aeSIWTJqec7R.jpeg",
      title: "Instalación de Mantillo y Paisajismo",
      description:
        "Transformación completa con mantillo premium que mejora la retención de humedad, previene malezas y realza la estética del jardín.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg",
      title: "Diseño de Camino Lateral con Privacidad",
      description:
        "Creación de un pasaje funcional y estético con árboles perennes para privacidad, cerca decorativa e iluminación solar.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-78p413j3LMqwgT63kJy72TCkUe4WGZ.jpeg",
      title: "Mantenimiento de Jardín Residencial",
      description:
        "Servicio integral que incluye corte preciso, poda de arbustos y cuidado de plantas ornamentales para un jardín impecable.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-bqk7asm0NPvOV85HOVI9G9YgvRAdAV.jpeg",
      title: "Transformación Completa de Jardín",
      description:
        "Renovación integral con mantillo negro, bordes definidos y plantación estratégica de flores ornamentales para máximo impacto visual.",
    },
  ]

  const beforeAfterItems = [
    {
      title: "Renovación de Jardín Frontal",
      before:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20-HcZW7tGy7aYQ20LD1BdPOHEtF0GiQh.jpeg",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-bqk7asm0NPvOV85HOVI9G9YgvRAdAV.jpeg",
      description:
        "Esta transformación completa convirtió un jardín descuidado en un espacio elegante y de bajo mantenimiento con mantillo negro de alta calidad, bordes definidos y plantación estratégica de flores ornamentales.",
      features: [
        "Instalación de mantillo premium para control de malezas",
        "Definición de bordes para un aspecto profesional",
        "Selección de plantas adaptadas al clima local",
        "Sistema de riego eficiente para conservación de agua",
      ],
    },
    {
      title: "Diseño de Camino Lateral",
      before: "https://source.unsplash.com/random/800x600/?garden,before",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg",
      description:
        "Transformamos un espacio lateral estrecho y sin utilizar en un elegante pasaje funcional con árboles de hoja perenne para privacidad, cerca decorativa, iluminación solar y mantillo de calidad.",
      features: [
        "Árboles estratégicamente ubicados para privacidad",
        "Iluminación solar para seguridad y estética nocturna",
        "Mantillo premium para prevención de malezas",
        "Diseño que maximiza el espacio disponible",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Propietaria en Little Ferry",
      text: "Jimenez Services transformó nuestro jardín en un paraíso que supera todas nuestras expectativas. Su atención al detalle y profesionalismo son incomparables. Ahora pasamos más tiempo al aire libre que dentro de casa, ¡es como tener un resort privado!",
      rating: 5,
    },
    {
      name: "Roberto Sánchez",
      role: "Administrador de Propiedades",
      text: "Como responsable de múltiples propiedades de lujo, valoro la consistencia y excelencia. Jimenez Services ha mantenido impecables nuestros jardines durante años, aumentando el valor de nuestras propiedades y generando elogios constantes de residentes y visitantes.",
      rating: 5,
    },
  ]

  const benefits = [
    {
      icon: <ThumbsUp />,
      title: "Aumento del Valor de su Propiedad",
      description:
        "Un jardín bien diseñado y mantenido puede aumentar el valor de su propiedad hasta un 20%, ofreciendo un excelente retorno de inversión.",
    },
    {
      icon: <Sparkles />,
      title: "Espacios Exteriores Funcionales",
      description:
        "Transformamos su jardín en una extensión de su hogar, creando espacios perfectos para relajarse, entretenerse y disfrutar con familia y amigos.",
    },
    {
      icon: <Shield />,
      title: "Mantenimiento Sin Preocupaciones",
      description:
        "Nuestros planes de mantenimiento garantizan que su jardín luzca impecable durante todo el año sin que usted tenga que preocuparse por nada.",
    },
    {
      icon: <Award />,
      title: "Materiales y Plantas Premium",
      description:
        "Utilizamos exclusivamente materiales de primera calidad y plantas seleccionadas que garantizan durabilidad excepcional y belleza duradera.",
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
                <Link to="/">INICIO</Link>
              </li>
              <li className="dropdown">
                <a href="#servicios">
                  SERVICIOS <ChevronDown size={14} className="dropdown-indicator" />
                </a>
                <div className="dropdown-content">
                  <Link to="/jardineria" className="active">
                    <Leaf size={16} className="dropdown-icon" /> Jardinería
                  </Link>
                  <Link to="/interiores">
                    <Shovel size={16} className="dropdown-icon" /> Remodelación
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
      <section className="hero-section gardening-hero">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-title-container">
            <Crown className="hero-icon" />
            <h1 className="hero-title">Jardinería Profesional</h1>
            <Crown className="hero-icon" />
          </div>
          <p className="hero-subtitle">
            Transformamos espacios exteriores en oasis de belleza y funcionalidad que aumentan el valor de su propiedad
            y mejoran su calidad de vida
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="hero-button">
              <Leaf className="hero-button-icon" /> Explorar Servicios
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
            <h2 className="section-title">Jardinería de Élite</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">TRANSFORMAMOS SU ESPACIO EXTERIOR</p>
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
              <h3>Excelencia en Cada Detalle Verde</h3>
              <p>
                En Jimenez Services, no solo cuidamos jardines – <strong>creamos experiencias al aire libre</strong> que
                transforman su propiedad y mejoran su calidad de vida. Nuestro equipo de jardineros expertos combina
                conocimiento técnico con visión artística para diseñar, construir y mantener espacios exteriores
                excepcionales.
              </p>
              <p>
                Desde el mantenimiento regular hasta proyectos completos de paisajismo, nos comprometemos a superar sus
                expectativas con un servicio personalizado y resultados impecables que{" "}
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
            <p className="section-subtitle">SOLUCIONES PROFESIONALES DE JARDINERÍA</p>
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
            <p>Descubra cómo podemos transformar su espacio exterior en un oasis de belleza y funcionalidad</p>
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
            <p>¿Listo para transformar su espacio exterior? Podemos hacer lo mismo por usted.</p>
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
              <p>Creamos un plan detallado con selección de plantas, materiales y elementos que reflejan su visión.</p>
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
              <h3>Mantenimiento Continuo</h3>
              <p>
                Ofrecemos planes personalizados para mantener su jardín en condiciones óptimas durante todas las
                estaciones.
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
            <p>Únase a nuestros clientes satisfechos y transforme su espacio exterior</p>
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
                    <option value="landscaping">Diseño de Paisajes</option>
                    <option value="garden-maintenance">Mantenimiento de Jardines</option>
                    <option value="irrigation">Sistemas de Riego</option>
                    <option value="planting">Plantación y Paisajismo</option>
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
                Transformando espacios exteriores en obras maestras de paisajismo desde 2018. Nuestro compromiso:
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
                  <a href="#testimonios">Testimonios</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
                <li>
                  <Link to="/interiores">Remodelación</Link>
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

