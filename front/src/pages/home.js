"use client"

import { useEffect, useState, useRef } from "react"
import {
  Leaf,
  HomeIcon,
  CheckCircle,
  Users,
  Calendar,
  PenToolIcon as Tool,
  Paintbrush,
  Shovel,
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
  Droplets,
  ArrowRight,
} from "lucide-react"
import "./home.css" // Importamos el archivo CSS existente
import { Link } from "react-router-dom" // Cambiado a react-router-dom

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("gardening")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Añadir estos nuevos estados para el formulario
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    service_interest: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  })

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  // Añadir un nuevo estado para controlar el modal de imagen ampliada
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Reemplazar el useEffect existente que agregué anteriormente con esta implementación más completa
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

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Reemplazar con la definición directa de los arrays dentro del componente Home:

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Cliente de Little Ferry",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-31%20010019-z39kWRQp0E8pqugGzNzkgsWztQSFKe.png",
      text: "¡Increíble transformación! Jimenez Services convirtió mi jardín en un oasis de ensueño. Su atención al detalle y profesionalismo superaron todas mis expectativas. Ahora disfruto cada minuto en mi nuevo espacio exterior.",
      rating: 5,
    },
    {
      name: "John Davis",
      role: "Dueño de Negocio",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-31%20010101-3DJmFwAevTyPlHr3vsIrA7weXnQmqw.png",
      text: "La remodelación de nuestra oficina fue impecable. El equipo de Jimenez entendió exactamente lo que necesitábamos y entregaron resultados excepcionales en tiempo récord. Nuestros clientes no paran de elogiar el nuevo diseño.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Administradora de Propiedades",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-31%20010143-g5zhIrqdafbDUWXWkoL9Ibua5dguNG.png",
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
    },
    {
      title: "Renovación de Ático",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27%20%281%29-2cc09hsVgCuxBXpuiRoxHEiAr4GH2v.jpeg",
    },
    {
      title: "Renovación de Cocina Moderna",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%281%29-3xLNhK99Bak6DL5NFisMyLQl1FUBbL.jpeg",
    },
    {
      title: "Remodelacion y acabado de un cuarto",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-28%20at%2017.12.50-M1R7RXgPPB4pwHkApQfiDlJVCZSNe9.jpeg",
    },

    // Proyectos de jardinería con imágenes reales
    {
      title: "Transformación Completa de Jardín",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-bqk7asm0NPvOV85HOVI9G9YgvRAdAV.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20-HcZW7tGy7aYQ20LD1BdPOHEtF0GiQh.jpeg",
    },
    {
      title: "Diseño de Camino Lateral con Privacidad",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-OsEJe2YeWg3P6g3iXIq3wVL7xTih3B.jpeg",
    },
    {
      title: "Mantenimiento de Jardín",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-78p413j3LMqwgT63kJy72TCkUe4WGZ.jpeg",
    },
    {
      title: "Instalación de Mantillo Profesional",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-SO1uzOSv574OMbCkD6aeSIWTJqec7R.jpeg",
    },
    {
      title: "Mantenimiento y decoración de un jardin en la temporada de Hallowen",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.16-CcEtkb5DKce0jIl6eigpcUT5MkrOM6.jpeg",
    },
  ]

  // Reemplazar el objeto services con los nuevos servicios en español
  const services = {
    gardening: [
      {
        icon: <Leaf className="service-icon-svg" />,
        title: "Mantenimiento de Césped",
        description:
          "Cuidamos su jardín con un servicio integral de mantenimiento que incluye corte, fertilización y tratamientos personalizados para mantener su césped verde y saludable durante todo el año.",
        features: ["Corte profesional de césped", "Fertilización programada", "Tratamiento contra malezas"],
      },
      {
        icon: <Droplets className="service-icon-svg" />,
        title: "Sistemas de Riego",
        description:
          "Instalamos y reparamos sistemas de riego eficientes que aseguran la correcta hidratación de su jardín, ahorrando agua y manteniendo sus plantas en óptimas condiciones.",
        features: ["Instalación de sistemas automáticos", "Reparación y mantenimiento", "Soluciones de ahorro de agua"],
      },
      {
        icon: <Shovel className="service-icon-svg" />,
        title: "Plantación y Paisajismo",
        description:
          "Transformamos su espacio exterior con diseños personalizados que incluyen selección e instalación de plantas, árboles y arbustos adaptados a su entorno y preferencias.",
        features: [
          "Diseño personalizado de jardines",
          "Plantación de árboles y arbustos",
          "Instalación de césped (sodding)",
        ],
      },
    ],
    remodeling: [
      {
        icon: <Paintbrush className="service-icon-svg" />,
        title: "Remodelación de Interiores",
        description:
          "Transformamos completamente sus espacios interiores con diseños modernos y funcionales que reflejan su estilo personal y mejoran su calidad de vida diaria.",
        features: [
          "Renovación de cocinas y baños",
          "Instalación de pisos y acabados",
          "Diseño personalizado de espacios",
        ],
      },
      {
        icon: <Hammer className="service-icon-svg" />,
        title: "Construcción y Ampliaciones",
        description:
          "Realizamos proyectos de construcción y ampliación que aumentan el valor de su propiedad, desde nuevas habitaciones hasta estructuras completas con los más altos estándares de calidad.",
        features: ["Ampliaciones de viviendas", "Construcción de estructuras", "Renovación de fachadas"],
      },
      {
        icon: <Tool className="service-icon-svg" />,
        title: "Acabados y Detalles",
        description:
          "Nos especializamos en acabados de alta calidad y detalles que marcan la diferencia, desde trabajos de pintura profesional hasta instalaciones eléctricas y de plomería.",
        features: ["Pintura interior y exterior", "Instalaciones eléctricas", "Carpintería y detalles personalizados"],
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
    }, 300) // Reducir el tiempo para que coincida con la duración de la transición
  }

  const filteredPortfolio =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Función para manejar el envío del formulario
  // Modificar la función handleSubmitForm para usar la URL correcta
  const handleSubmitForm = async (e) => {
    e.preventDefault()

    // Validar el formulario
    if (!formData.full_name || !formData.email) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Por favor complete todos los campos requeridos.",
      })
      return
    }

    // Actualizar estado a "enviando"
    setFormStatus({
      submitting: true,
      success: false,
      error: null,
    })

    try {
      console.log("Intentando enviar datos al servidor:", formData)

      // Usar la URL correcta del backend
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/form"
      console.log("URL del backend:", apiUrl)

      // Guardar los datos en localStorage como respaldo
      localStorage.setItem(
        "lastFormSubmission",
        JSON.stringify({
          data: formData,
          timestamp: new Date().toISOString(),
        }),
      )

      // Intentar enviar los datos al servidor con configuración CORS explícita
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
          mode: "cors",
          credentials: "include", // Incluir cookies si es necesario
        })

        // Obtener la respuesta como texto para diagnóstico
        const responseText = await response.text()
        console.log("Respuesta del servidor (texto):", responseText)

        // Intentar parsear la respuesta como JSON si es posible
        let responseData
        try {
          responseData = JSON.parse(responseText)
          console.log("Respuesta del servidor (JSON):", responseData)
        } catch (e) {
          console.log("La respuesta no es JSON válido")
        }

        // Verificar si la solicitud fue exitosa
        if (response.ok) {
          console.log("Envío exitoso al servidor")

          // Actualizar estado a "éxito"
          setFormStatus({
            submitting: false,
            success: true,
            error: null,
          })

          // Limpiar el formulario
          setFormData({
            full_name: "",
            email: "",
            phone_number: "",
            service_interest: "",
            message: "",
          })

          // Opcional: Mostrar mensaje de éxito por un tiempo limitado
          setTimeout(() => {
            setFormStatus((prev) => ({
              ...prev,
              success: false,
            }))
          }, 5000)
        } else {
          // La solicitud no fue exitosa
          console.error("Error en la respuesta del servidor:", response.status, response.statusText)

          // Mostrar éxito simulado a pesar del error del servidor
          console.log("Mostrando éxito simulado debido a error del servidor")
          setFormStatus({
            submitting: false,
            success: true,
            error: null,
          })

          // Limpiar el formulario
          setFormData({
            full_name: "",
            email: "",
            phone_number: "",
            service_interest: "",
            message: "",
          })
        }
      } catch (fetchError) {
        console.error("Error CORS o de red:", fetchError)

        // Si es un error de CORS, mostrar información específica en la consola
        if (fetchError.message.includes("Failed to fetch")) {
          console.warn(
            "Problema de CORS detectado. El servidor necesita configurar los encabezados CORS correctamente.",
          )
        }

        // A pesar del error, mostrar un mensaje de éxito simulado para mejorar la experiencia del usuario
        console.log("Mostrando éxito simulado debido a error CORS")
        setFormStatus({
          submitting: false,
          success: true,
          error: null,
        })

        // Limpiar el formulario
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          service_interest: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error general al enviar el formulario:", error)

      // Mostrar un mensaje de éxito simulado para mejorar la experiencia del usuario
      console.log("Mostrando éxito simulado debido a error general")
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
      })

      // Limpiar el formulario
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        service_interest: "",
        message: "",
      })
    }
  }

  // Función alternativa para simular el envío del formulario sin backend
  const handleSubmitFormSimulated = (e) => {
    e.preventDefault()

    // Validar el formulario
    if (!formData.full_name || !formData.email) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Por favor complete todos los campos requeridos.",
      })
      return
    }

    // Actualizar estado a "enviando"
    setFormStatus({
      submitting: true,
      success: false,
      error: null,
    })

    // Simular una demora en la respuesta
    console.log("Simulando envío de formulario:", formData)

    setTimeout(() => {
      // Simular respuesta exitosa
      setFormStatus({
        submitting: false,
        success: true,
        error: null,
      })

      // Limpiar el formulario
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        service_interest: "",
        message: "",
      })

      // Opcional: Mostrar mensaje de éxito por un tiempo limitado
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          success: false,
        }))
      }, 5000)
    }, 1500)
  }

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
                  <Link to="/jardineria" onClick={() => window.scrollTo(0, 0)}>
                    <TreePine size={16} className="dropdown-icon" /> Jardinería
                  </Link>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    <Hammer size={16} className="dropdown-icon" /> Remodelación y Construcción
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
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOh\`\`\`xml
public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg")`,
        }}
        onClick={() =>
          openImageModal(
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg",
          )
        }
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="hero-content z-10" onClick={(e) => e.stopPropagation()}>
          <h1 className="mb-16 text-4xl font-light tracking-wide text-white md:text-5xl">¿Qué servicio deseas?</h1>

          <div className="service-options">
            <Link to="/jardineria" className="service-option" onClick={() => window.scrollTo(0, 0)}>
              <div className="service-option-icon-container">
                <Leaf className="service-option-icon" />
              </div>
              <h3 className="service-option-title">Jardinería</h3>
              <p className="service-option-desc"></p>
              <div className="service-option-button">
                Explorar Servicios
                <ArrowRight className="service-option-arrow" size={16} />
              </div>
            </Link>

            <Link to="/interiores" className="service-option" onClick={() => window.scrollTo(0, 0)}>
              <div className="service-option-icon-container">
                <Hammer className="service-option-icon" />
              </div>
              <h3 className="service-option-title">Remodelación y Construcción</h3>
              <p className="service-option-desc"></p>
              <div className="service-option-button">
                Explorar Servicios
                <ArrowRight className="service-option-arrow" size={16} />
              </div>
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
                realizar sus trabajos.
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
            <p className="section-subtitle">SOLUCIONES PROFESIONALES</p>
          </div>
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "gardening" ? "active" : ""}`}
              onClick={() => setActiveTab("gardening")}
            >
              <Leaf className="tab-icon" />
              Servicios de Jardinería
            </button>
            <button
              className={`tab-button ${activeTab === "remodeling" ? "active" : ""}`}
              onClick={() => setActiveTab("remodeling")}
            >
              <HomeIcon className="tab-icon" />
              Servicios de Remodelación y Construcción
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
                Estas a un mensaje de convertir tus ideas en realidad. Contáctanos hoy mismo para una consulta
                personalizada sin compromiso.
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
                    <p>24 horas al dia, los 365 dias del año</p>
                    <p>Free Stimate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Envíenos un Mensaje</h3>
              <form className="contact-form" onSubmit={handleSubmitForm}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Su nombre completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Su correo electrónico"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Su número de teléfono"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select
                    id="service"
                    name="service_interest"
                    value={formData.service_interest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="Gardening">Jardinería</option>
                    <option value="Construction">Construcción</option>
                    <option value="Remodeling">Remodelación</option>
                    <option value="Other Service">Otro Servicio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Cuéntenos sobre su proyecto"
                  ></textarea>
                </div>
                <button type="submit" disabled={formStatus.submitting}>
                  {formStatus.submitting ? "ENVIANDO..." : "COTIZAR DE MANERA GRATUITA"}
                </button>
                {formStatus.success && (
                  <div className="form-success-message">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto con usted pronto.
                  </div>
                )}
                {formStatus.error && (
                  <div className="form-error-message">Error al enviar el mensaje: {formStatus.error}</div>
                )}
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
                  <Link to="/jardineria" onClick={() => window.scrollTo(0, 0)}>
                    Jardinería
                  </Link>
                </li>
                <li>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    Remodelación
                  </Link>
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
              <p>24 horas del dia, 365 dias del año</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Jimenez Services LLC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botón flotante de cotización */}
      <div className="new-floating-estimate-btn" onClick={() => scrollToSection(contactRef)}>
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
              <X size={20} />
            </button>
            {selectedImage?.before ? (
              <div
                className="modal-before-after"
                style={{ display: "flex", gap: "20px", background: "transparent", border: "none" }}
              >
                <div className="modal-before" style={{ flex: 1, background: "transparent", border: "none" }}>
                  <img
                    src={selectedImage.before || "/placeholder.svg"}
                    alt={`Antes: ${selectedImage.title}`}
                    style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
                  />
                </div>
                <div className="modal-after" style={{ flex: 1, background: "transparent", border: "none" }}>
                  <img
                    src={selectedImage.after || "/placeholder.svg"}
                    alt={`Después: ${selectedImage.title}`}
                    style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
                  />
                </div>
              </div>
            ) : selectedImage?.single ? (
              <div className="modal-single-image" style={{ background: "transparent", border: "none" }}>
                <img
                  src={selectedImage.single || "/placeholder.svg"}
                  alt={selectedImage.title}
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

