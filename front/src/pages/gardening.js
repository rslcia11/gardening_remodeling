"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
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
// Add the Modal component import at the top with the other imports
import Modal from "./Modal"

export default function Gardening() {
  // State declarations
  const [isVisible, setIsVisible] = useState(false)
  const [activeGalleryItem, setActiveGalleryItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
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
  // Add these state variables in the state declarations section, after the existing formStatus state
  const [sendingMessage, setSendingMessage] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalType, setModalType] = useState("")

  // SEO meta tags
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Professional Landscaping Services in New Jersey | Jimenez Services LLC"

    // Meta description
    const metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    metaDescription.content =
      "Expert landscaping services in New Jersey. Lawn maintenance, garden design, irrigation systems, and seasonal care by Jimenez Services LLC in Little Ferry, NJ."
    document.head.appendChild(metaDescription)

    // Keywords
    const metaKeywords = document.createElement("meta")
    metaKeywords.name = "keywords"
    metaKeywords.content =
      "landscaping New Jersey, lawn maintenance NJ, garden design Little Ferry, irrigation systems, professional gardening, lawn care, mulch installation"
    document.head.appendChild(metaKeywords)

    // Canonical URL
    const canonicalLink = document.createElement("link")
    canonicalLink.rel = "canonical"
    canonicalLink.href = window.location.href.split("?")[0]
    document.head.appendChild(canonicalLink)

    // Open Graph tags
    const ogTitle = document.createElement("meta")
    ogTitle.property = "og:title"
    ogTitle.content = "Professional Landscaping Services in New Jersey | Jimenez Services LLC"
    document.head.appendChild(ogTitle)

    const ogDescription = document.createElement("meta")
    ogDescription.property = "og:description"
    ogDescription.content =
      "Expert landscaping services in New Jersey. Lawn maintenance, garden design, irrigation systems, and seasonal care by Jimenez Services LLC."
    document.head.appendChild(ogDescription)

    const ogImage = document.createElement("meta")
    ogImage.property = "og:image"
    ogImage.content =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg"
    document.head.appendChild(ogImage)

    const ogUrl = document.createElement("meta")
    ogUrl.property = "og:url"
    ogUrl.content = window.location.href.split("?")[0]
    document.head.appendChild(ogUrl)

    const ogType = document.createElement("meta")
    ogType.property = "og:type"
    ogType.content = "website"
    document.head.appendChild(ogType)

    // Twitter Card tags
    const twitterCard = document.createElement("meta")
    twitterCard.name = "twitter:card"
    twitterCard.content = "summary_large_image"
    document.head.appendChild(twitterCard)

    const twitterTitle = document.createElement("meta")
    twitterTitle.name = "twitter:title"
    twitterTitle.content = "Professional Landscaping Services in New Jersey | Jimenez Services LLC"
    document.head.appendChild(twitterTitle)

    const twitterDescription = document.createElement("meta")
    twitterDescription.name = "twitter:description"
    twitterDescription.content = "Expert landscaping services in New Jersey by Jimenez Services LLC."
    document.head.appendChild(twitterDescription)

    const twitterImage = document.createElement("meta")
    twitterImage.name = "twitter:image"
    twitterImage.content =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg"
    document.head.appendChild(twitterImage)

    // Geo tags for local SEO
    const geoRegion = document.createElement("meta")
    geoRegion.name = "geo.region"
    geoRegion.content = "US-NJ"
    document.head.appendChild(geoRegion)

    const geoPlacename = document.createElement("meta")
    geoPlacename.name = "geo.placename"
    geoPlacename.content = "Little Ferry, New Jersey"
    document.head.appendChild(geoPlacename)

    // Clean up on component unmount
    return () => {
      document.head.removeChild(metaDescription)
      document.head.removeChild(metaKeywords)
      document.head.removeChild(canonicalLink)
      document.head.removeChild(ogTitle)
      document.head.removeChild(ogDescription)
      document.head.removeChild(ogImage)
      document.head.removeChild(ogUrl)
      document.head.removeChild(ogType)
      document.head.removeChild(twitterCard)
      document.head.removeChild(twitterTitle)
      document.head.removeChild(twitterDescription)
      document.head.removeChild(twitterImage)
      document.head.removeChild(geoRegion)
      document.head.removeChild(geoPlacename)
    }
  }, [])

  // Scroll to top effect
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

  // Animation and gallery effects
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

  // Modal fix effect
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

  // Image modal effect
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

  // Helper functions
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  // Image modal functions
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

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Replace the handleSubmitForm function with this updated version
  const handleSubmitForm = async (e) => {
    e.preventDefault()

    // Validación rápida de campos requeridos
    if (!formData.fullName || !formData.email || !formData.phone || !formData.serviceInterest) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Please complete all required fields (name, email, phone and service).",
      })
      setModalMessage("Please complete all required fields.")
      setModalType("error")
      return
    }

    // Validación básica de email - usando una expresión regular simple para mayor velocidad
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setFormStatus({ submitting: false, success: false, error: "Please enter a valid email address." })
      setModalMessage("Please enter a valid email address.")
      setModalType("error")
      return
    }
    setFormStatus({ submitting: true, success: false, error: null })
    setModalMessage("Sending your message...")
    setModalType("success")

    // Guardar los datos del formulario para enviarlos en segundo plano
    const formPayload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      serviceInterest: formData.serviceInterest,
      message: formData.message || "",
    }

    // Guardar en localStorage como respaldo
    emailjs.send("service_pnhuu6g", "template_9amkna5", formPayload, "hg3WQb2Z3IEZrqhe8").then(
      (response) => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceInterest: "",
          message: "",
        })
        setFormStatus({ submitting: false, success: true, error: null })
        setModalMessage("Message sent successfully!")
        setModalType("success")
        // window.location.reload()
      },
      (err) => {
        console.error("FAILED...", err)
        setFormStatus({
          submitting: false,
          success: false,
          error: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        })
        setModalMessage("There was a problem sending the message.")
        setModalType("error")
      },
    )

    // CAMBIO CLAVE: Mostrar éxito INMEDIATAMENTE sin esperar
    setFormStatus({
      submitting: false,
      success: true,
      error: null,
    })

    // Limpiar el formulario inmediatamente
    setFormData({
      full_name: "",
      email: "",
      phone_number: "",
      service_interest: "",
      message: "",
    })

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setFormStatus((prev) => ({
        ...prev,
        success: false,
      }))
    }, 5000)

    // Enviar datos al servidor en segundo plano (sin esperar respuesta)
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/form"

      // Usar navigator.sendBeacon si está disponible (envío en segundo plano)
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(formPayload)], { type: "application/json" })
        navigator.sendBeacon(apiUrl, blob)
      } else {
        // Fallback a fetch pero sin esperar respuesta
        fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formPayload),
          mode: "cors",
          // Importante: no esperamos la respuesta
          keepalive: true, // Asegura que la solicitud continúe incluso si la página se cierra
        }).catch(() => {
          // Ignorar errores silenciosamente - ya mostramos éxito al usuario
        })
      }
    } catch (error) {
      // Ignorar errores - ya mostramos éxito al usuario
      console.error("Error in the background:", error)
    }
  }

  // Data arrays
  const services = [
    {
      icon: <Leaf className="service-icon-svg" />,
      title: "Lawn Maintenance",
      description:
        "We design and instation systems that keep your garden perfectly hydrated in all seasons, even during your absence.",
      features: [
        "Precision professional cutting",
        "Seasonal fertilization",
        "Weed and pest control",
        "Aeration and scarification",
        "Reseeding of damaged areas",
      ],
    },
    {
      icon: <Droplets className="service-icon-svg" />,
      title: "Irrigation Systems",
      description:
        "We design and install high-efficiency automated irrigation systems that conserve water, reduce your bills, and keep your garden perfectly hydrated in all seasons, even during your absence.",
      features: [
        "Smart system installation",
        "Repair and maintenance",
        "Water-saving solutions",
        "Drip systems for plants",
        "Controllers with rain sensors",
      ],
    },
    {
      icon: <Shovel className="service-icon-svg" />,
      title: "Planting and Landscaping",
      description:
        "We create spectacular landscapes that increase the value of your property with expert selection of plants, trees, and shrubs adapted to your environment, combining beauty, functionality, and sustainability in each project.",
      features: [
        "Custom garden design",
        "Selection of native plants",
        "Professional lawn installation",
        "Creation of themed gardens",
        "Low-maintenance gardens",
      ],
    },
    {
      icon: <TreePine className="service-icon-svg" />,
      title: "Outdoor Spaces",
      description:
        "We transform your yard into an outdoor oasis with elegant patios, charming pathways, and decorative elements that create perfect environments for relaxing, entertaining, and enjoying nature all year round.",
      features: [
        "Patios and decks with premium materials",
        "Decorative paths and walkways",
        "LED landscape lighting",
        "Pergolas and shade structures",
        "Fire pits and outdoor kitchens",
      ],
    },
    {
      icon: <Scissors className="service-icon-svg" />,
      title: "Tree Pruning and Care",
      description:
        "We keep your trees and shrubs healthy and aesthetically pleasing with professional pruning, shaping, and preventive treatments that prolong their life and enhance the beauty of your property.",
      features: [
        "Formative and maintenance pruning",
        "Removal of hazardous branches",
        "Treatments against pests and diseases",
        "Specialized fertilization",
        "Expert advice",
      ],
    },
    {
      icon: <Cloud className="service-icon-svg" />,
      title: "Pest and Disease Control",
      description:
        "We protect your garden with ecological and effective treatments against pests, diseases, and weeds, maintaining a natural balance that promotes healthy growth of your plants.",
      features: [
        "Precise problem diagnosis",
        "Treatments precise",
        "Prevention of infestations",
        "Integrated pest management",
        "Customized solutions",
      ],
    },
    {
      icon: <Flower className="service-icon-svg" />,
      title: "Seasonal Gardens",
      description:
        "We keep your garden colorful and vibrant throughout the year with seasonal plantings of flowers, bulbs, and ornamental plants that perfectly adapt to each season, creating constant visual interest.",
      features: [
        "Seasonal garden design",
        "Rotation of seasonal plants",
        "Selection of high-impact flowers",
        "Harmonious color combinations",
        "Specialized maintenance",
      ],
    },
    {
      icon: <Truck className="service-icon-svg" />,
      title: "Mulch and Substrate Installation",
      description:
        "We improve the health and appearance of your gardens with professional installation of high-quality mulch and substrates that conserve moisture, prevent weeds, and enrich the soil for optimal plant growth.",
      features: [
        "Premium decorative mulch",
        "Specific substrates for each type of plant",
        "Precise and uniform installation",
        "Improved water retention",
        "Natural weed control",
      ],
    },
  ]

  const galleryItems = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg",
      title: "Lateral Road Design",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-78p413j3LMqwgT63kJy72TCkUe4WGZ.jpeg",
      title: "Garden Maintenance",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-31%20at%2021.37.02-KmMrxPV7c8gDfI4m5TTwnBnmbKQGFH.jpeg",
      title: "Professional Lawn Maintenance",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-reGHppaVaFo7D6fo18RaHa6dmO06M4.jpeg",
      title: "Professional Mulch Installation",
    },
  ]

  const portfolioItems = [
    {
      title: "Black Mulch Installation",
      category: "mantillo",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178992858_4887242881302590_6606751715914796420_n.jpg-aXrRT1QdEN1wVMOdVpu8ihyIT5pfmr.jpeg",
    },
    {
      title: "Complete Garden Transformation",
      category: "transformacion",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-kIfWpCRNGVoMhpr07W7HlhkezKtyHP.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20-deqAT3ODJ4IZHK9pMdHTlcBxrNCygH.jpeg",
    },
    {
      title: "Lawn Maintenance",
      category: "cesped",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-T5QkvZIyu5OhSJjMpMY6mZCRCBemPa.jpeg",
    },
    {
      title: "Installation of Grass in Sod",
      category: "cesped",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/310931284_6576030909090437_4970806413429797238_n.jpg-drhL3Ph1tylgPXs6xqsOuICRzOY5Y5.jpeg",
    },
    {
      title: "Front Garden Transformation",
      category: "transformacion",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.18-JTkz62q0IMayxIJSPkejh16kWOAqTS.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.18%20%281%29-XJB6Ijc3J28UxFvhNk0qZwwGBbbGzq.jpeg",
    },
    {
      title: "Garden Mulch Application",
      category: "mantillo",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-25%20at%2013.06.31-z5Fv8oFDhcMKu0CligdJjuItQ482V8.jpeg",
    },
    {
      title: "Backyard Lawn Maintenance",
      category: "cesped",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-01%20at%2020.41.45-dMxOc7vS4qvMnbq9qICmQZJp6eSKsA.jpeg",
    },
    {
      title: "Garden Preparation for Halloween",
      category: "estacional",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.16-m4mdZynXol3pGXYAfu0NcaBvBeR3be.jpeg",
    },
    {
      title: "garden maintenance",
      category: "estacional",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-04%20at%2009.48.05-YhptsdhrONHjVxowKeWvhb63O4JLM4.jpeg",
    },
  ]

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Property Owner in Little Ferry",
      text: "Jimenez Services transformed our garden into a paradise that exceeds all our expectations. Their attention to detail and professionalism are unmatched. We now spend more time outdoors than inside our house, it's like having a private resort!",
      rating: 5,
    },
    {
      name: "Roberto Sánchez",
      role: "Property Manager",
      text: "As the manager of multiple luxury properties, I value consistency and excellence. Jimenez Services has kept our gardens impeccable for years, increasing the value of our properties and generating constant praise from residents and visitors.",
      rating: 5,
    },
  ]

  const benefits = [
    {
      icon: <ThumbsUp />,
      title: "Increased Property Value",
      description:
        "A well-designed and maintained garden can increase your property value by up to 20%, offering an excellent return on investment.",
    },
    {
      icon: <Sparkles />,
      title: "Functional Outdoor Spaces",
      description:
        "We transform your garden into an extension of your home, creating perfect spaces to relax, entertain, and enjoy with family and friends.",
    },
    {
      icon: <Shield />,
      title: "Worry-Free Maintenance",
      description:
        "Our maintenance plans ensure that your garden looks impeccable throughout the year without you having to worry about anything.",
    },
    {
      icon: <Award />,
      title: "Premium Materials and Plants",
      description:
        "We exclusively use top-quality materials and selected plants that guarantee exceptional durability and lasting beauty.",
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
                  HOME
                </Link>
              </li>
              <li className="dropdown">
                <a href="#servicios">
                  SERVICES <ChevronDown size={14} className="dropdown-indicator" />
                </a>
                <div className="dropdown-content">
                  <Link to="/jardineria" className="active" onClick={() => window.scrollTo(0, 0)}>
                    <Leaf size={16} className="dropdown-icon" /> Landscaping
                  </Link>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    <Shovel size={16} className="dropdown-icon" /> Remodeling and Construction
                  </Link>
                </div>
              </li>
              <li>
                <a href="#testimonios">TESTIMONIALS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
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
            <h1 className="hero-title">Professional Landscaping in New Jersey</h1>
          </div>

          <div className="hero-buttons">
            <a href="#servicios" className="hero-button">
              <Leaf className="hero-button-icon" /> Explore Services
            </a>
            <a href="#contact" className="hero-button">
              <Phone className="hero-button-icon" /> Request Free Quote
            </a>
          </div>
        </div>
      </section>
      {/* Add this line right after the hero section, before the About section */}
      {modalMessage && <Modal message={modalMessage} type={modalType} />}

      {/* About Section */}
      <section className="section about-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Elite Landscaping in New Jersey</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">WE TRANSFORM YOUR OUTDOOR SPACE</p>
          </div>
          <div className="about-content">
            <div className="about-image-grid">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="about-image-item"
                  onClick={() => openImageModal({ single: item.image, title: item.title })}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - Professional Landscaping in New Jersey by Jimenez Services`}
                  />
                  <div className="about-image-overlay">
                    <div className="about-image-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-text">
              <h3>Excellence in Every Green Detail Across New Jerse</h3>
              <p>
                At Jimenez Services, we don't just maintain gardens — we craft outdoor experiences that elevate your
                lifestyle and transform your property's appearance. Our skilled team blends expert knowledge with
                creative vision to design, build, and care for exceptional green spaces tailored to your needs.
              </p>
              <p>
                From routine maintenance to full-scale landscaping projects, we're committed to delivering personalized
                service and flawless results that boost your property's value and create welcoming outdoor areas you'll
                love for years to come.
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
                  Request Free Estimate <ArrowRight className="cta-icon" />
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
            <h2 className="section-title">Our Landscaping Services in NJ</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">PROFESSIONAL LANDSCAPING SOLUTIONS</p>
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
            <p>Discover how we can transform your outdoor space into an oasis of beauty and functionality</p>
            <a href="#contact" className="cta-button">
              Request Free Consultation <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Nueva sección añadida */}
      <section id="portafolio" className="section portfolio-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Portfolio</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">FEATURED PROJECTS</p>
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
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - Professional Landscaping in New Jersey by Jimenez Services`}
                    className="main-portfolio-image"
                  />
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
            <h2 className="section-title">Our Process</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">HOW WE WORK</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>
                We meet at your property to understand your needs, evaluate the space, and discuss ideas and budget.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Custom Design</h3>
              <p>
                We create a detailed plan with selection of plants, materials, and elements that reflect your vision.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Expert Execution</h3>
              <p>
                Our team of professionals performs the transformation with precision, efficiency, and premium materials.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Ongoing Maintenance</h3>
              <p>We offer customized plans to keep your garden in optimal condition during all seasons.</p>
            </div>
          </div>

          <div className="process-cta">
            <p>Start your project today with a free consultation</p>
            <a href="#contact" className="cta-button">
              Schedule Consultation <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="section testimonials-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Testimonials</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">WHAT OUR CLIENTS SAY</p>
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
            <p>Join our satisfied clients and transform your outdoor space</p>
            <a href="#contact" className="cta-button">
              Request Estimate <ArrowRight className="cta-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">WE'RE READY TO HELP YOU</p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                We're just one message away from turning your ideas into reality. Contact us today for a personalized
                consultation with no obligation.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Little Ferry, NJ 07643</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
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
                    <h4>Hours</h4>
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Gardening">Landscaping</option>
                    <option value="Construction">Construction</option>
                    <option value="Remodeling">Remodeling</option>
                    <option value="Snow Removal">Snow Removal</option>
                    <option value="Other Service">Other Service</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button onClick={(e) => handleSubmitForm(e)} disabled={formStatus.submitting}>
                  {formStatus.submitting ? "ENVIANDO..." : "GET A FREE QUOTE"}
                </button>
                {formStatus.success && (
                  <div className="form-success-message">Message sent successfully! We will contact you soon.</div>
                )}
                {formStatus.error && (
                  <div className="form-error-message">Error sending message: {formStatus.error}</div>
                )}
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
                Transforming outdoor spaces into landscaping masterpieces since 2018. Our commitment: excellence,
                innovation, and guaranteed satisfaction in every project.
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
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#servicios">Services</a>
                </li>
                <li>
                  <a href="#testimonios">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    Remodeling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>Little Ferry, NJ 07643</p>
              <p>
                Phone: <a href="tel:5515879625">551-587-9625</a>
              </p>
              <p>
                Email: <a href="mailto:mjimenezlandscaping80@gmail.com">mjimenezlandscaping80@gmail.com</a>
              </p>
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday: 9am - 2pm</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Jimenez Services LLC - Professional Landscaping Services in Little
              Ferry, New Jersey. All rights reserved.
            </p>
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
