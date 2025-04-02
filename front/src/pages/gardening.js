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

  // Eliminar el estado activeFilter y la función filteredPortfolio
  //const [activeFilter, setActiveFilter] = useState("all")
  // Eliminar esta línea ya que no necesitamos el estado de filtro

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
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-31%20at%2021.37.02-KmMrxPV7c8gDfI4m5TTwnBnmbKQGFH.jpeg",
      title: "Mantenimiento Profesional de Césped",
      description:
        "Servicio de mantenimiento con equipos profesionales que garantizan un césped saludable y bien cuidado durante todo el año.",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-reGHppaVaFo7D6fo18RaHa6dmO06M4.jpeg",
      title: "Instalación Profesional de Mantillo",
      description:
        "Aplicación experta de mantillo negro de alta calidad que mejora la estética del jardín, conserva la humedad y previene el crecimiento de malezas.",
    },
  ]

  // Nuevo array para la sección de portafolio
  const portfolioItems = [
    {
      title: "Instalación de Mantillo Negro",
      category: "mantillo",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-aXrRT1QdEN1wVMOdVpu8ihyIT5pfmr.jpeg",
      description:
        "Instalación profesional de mantillo negro para mejorar la estética del jardín y prevenir el crecimiento de malezas.",
    },
    {
      title: "Transformación Completa de Jardín",
      category: "transformacion",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-kIfWpCRNGVoMhpr07W7HlhkezKtyHP.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20-deqAT3ODJ4IZHK9pMdHTlcBxrNCygH.jpeg",
      description:
        "Renovación integral de jardín residencial que incluye instalación de mantillo negro, definición de bordes, plantación de flores ornamentales y mejora del césped.",
    },
    {
      title: "Mantenimiento de Césped Residencial",
      category: "cesped",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-T5QkvZIyu5OhSJjMpMY6mZCRCBemPa.jpeg",
      description:
        "Servicio de mantenimiento profesional de césped que incluye corte, fertilización y tratamientos para mantener un jardín impecable.",
    },
    {
      title: "Instalación de Césped en Tepes",
      category: "cesped",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/310931284_6576030909090437_4970806413429797238_n.jpg-drhL3Ph1tylgPXs6xqsOuICRzOY5Y5.jpeg",
      description:
        "Instalación de césped en tepes (sod) para crear rápidamente un jardín verde y uniforme, ideal para áreas nuevas o renovaciones completas.",
    },
    {
      title: "Transformación de Jardín Frontal",
      category: "transformacion",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.18%20%281%29-XJB6Ijc3J28UxFvhNk0qZwwGBbbGzq.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.18-JTkz62q0IMayxIJSPkejh16kWOAqTS.jpeg",
      description:
        "Renovación completa de jardín frontal residencial con mejora del césped, poda profesional de arbustos y aplicación de mantillo negro para definir bordes y realzar la estética del paisaje.",
    },
    {
      title: "Aplicación de Mantillo en Jardín Residencial",
      category: "mantillo",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-25%20at%2013.06.31-z5Fv8oFDhcMKu0CligdJjuItQ482V8.jpeg",
      description:
        "Instalación profesional de mantillo negro alrededor de árboles y arbustos para mejorar la estética, conservar la humedad del suelo y prevenir el crecimiento de malezas en este jardín residencial.",
    },
    {
      title: "Mantenimiento de Césped en Patio Trasero",
      category: "cesped",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-01%20at%2020.41.45-dMxOc7vS4qvMnbq9qICmQZJp6eSKsA.jpeg",
      description:
        "Servicio completo de mantenimiento de césped en patio trasero que incluye corte, fertilización y tratamientos para lograr un césped verde, denso y saludable, perfecto para actividades familiares al aire libre.",
    },
    {
      title: "Preparación de Jardín para Halloween",
      category: "estacional",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.16-m4mdZynXol3pGXYAfu0NcaBvBeR3be.jpeg",
      description:
        "Servicio de mantenimiento y preparación de jardín frontal para decoraciones estacionales, asegurando que el paisaje complemente perfectamente las decoraciones festivas mientras se mantiene la salud de plantas y arbustos.",
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

  // Filtrar los elementos del portafolio según la categoría seleccionada
  //const filteredPortfolio =
  //  activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

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
                  <Link to="/jardineria" className="active" onClick={() => window.scrollTo(0, 0)}>
                    <Leaf size={16} className="dropdown-icon" /> Jardinería
                  </Link>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
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

      {/* Portfolio Section - Nueva sección añadida */}
      <section id="portafolio" className="section portfolio-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Portafolio</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">PROYECTOS DESTACADOS</p>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    Remodelación
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

      {/* Botón flotante de cotización */}
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

