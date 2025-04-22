"use client"

import { useEffect, useState, useRef } from "react"
import emailjs from "@emailjs/browser"
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
  Snowflake,
  AlertTriangle,
  Truck,
  Star,
} from "lucide-react"
import "./home.css"
import { Link } from "react-router-dom"
import Modal from "./Modal"

export default function Home() {
  // SEO meta tags
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Jimenez Services LLC | Professional Landscaping & Remodeling in New Jersey"

    // Meta description
    const metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    metaDescription.content =
      "Top-rated landscaping, remodeling, construction, and snow removal services in Little Ferry, NJ. Professional, reliable, and affordable solutions for your property."
    document.head.appendChild(metaDescription)

    // Keywords
    const metaKeywords = document.createElement("meta")
    metaKeywords.name = "keywords"
    metaKeywords.content =
      "landscaping New Jersey, remodeling NJ, snow removal Little Ferry, construction services, garden maintenance, home renovation, property services"
    document.head.appendChild(metaKeywords)

    // Canonical URL
    const canonicalLink = document.createElement("link")
    canonicalLink.rel = "canonical"
    canonicalLink.href = window.location.href.split("?")[0]
    document.head.appendChild(canonicalLink)

    // Open Graph tags
    const ogTitle = document.createElement("meta")
    ogTitle.property = "og:title"
    ogTitle.content = "Jimenez Services LLC | Professional Landscaping & Remodeling in New Jersey"
    document.head.appendChild(ogTitle)

    const ogDescription = document.createElement("meta")
    ogDescription.property = "og:description"
    ogDescription.content =
      "Top-rated landscaping, remodeling, construction, and snow removal services in Little Ferry, NJ. Professional, reliable, and affordable solutions for your property."
    document.head.appendChild(ogDescription)

    const ogImage = document.createElement("meta")
    ogImage.property = "og:image"
    ogImage.content =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
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
    twitterTitle.content = "Jimenez Services LLC | Professional Landscaping & Remodeling in New Jersey"
    document.head.appendChild(twitterTitle)

    const twitterDescription = document.createElement("meta")
    twitterDescription.name = "twitter:description"
    twitterDescription.content =
      "Top-rated landscaping, remodeling, construction, and snow removal services in Little Ferry, NJ."
    document.head.appendChild(twitterDescription)

    const twitterImage = document.createElement("meta")
    twitterImage.name = "twitter:image"
    twitterImage.content =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
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

  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("gardening")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  })

  // Reset success message after timeout
  useEffect(() => {
    if (formStatus.success) {
      const timer = setTimeout(() => {
        setFormStatus((prevStatus) => ({ ...prevStatus, success: false }))
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [formStatus.success])

  // Modal state
  const [sendingMessage, setSendingMessage] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [modalType, setModalType] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)

  // Section refs for smooth scrolling
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const galleryRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  // Image modal state
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Optimize image loading
  useEffect(() => {
    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2019.28.29-pmk2tbTcZMmBlxdqKG1kqWOhhmFQoi.jpeg",
      ]

      criticalImages.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }

    preloadImages()

    // Optimize scroll and animations
    let scrollTimeout
    const handleOptimizedScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          const scrollPosition = window.scrollY
          if (heroRef.current) {
            heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
          }
          scrollTimeout = null
        }, 10)
      }
    }

    window.addEventListener("scroll", handleOptimizedScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleOptimizedScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  // Scroll to top on page load
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    scrollToTop()

    const handlePopState = () => {
      scrollToTop()
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollToTop", "true")
    }

    if (sessionStorage.getItem("scrollToTop") === "true") {
      scrollToTop()
      sessionStorage.removeItem("scrollToTop")
    }

    window.addEventListener("popstate", handlePopState)
    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  // Parallax effect for hero section
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

  // Animation on scroll
  useEffect(() => {
    setIsVisible(true)

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

  // Fix modals
  useEffect(() => {
    function fixModals() {
      const modals = document.querySelectorAll(".modal, .image-modal-overlay")

      modals.forEach((modal) => {
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

        const closeButton = modal.querySelector(".modal-close-button")
        if (closeButton) {
          closeButton.style.position = "fixed"
          closeButton.style.top = "20px"
          closeButton.style.right = "20px"
          closeButton.style.zIndex = "10000"
        }
      })
    }

    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-modal-trigger]")) {
        setTimeout(fixModals, 100)
      }
    })

    fixModals()
    const interval = setInterval(fixModals, 1000)

    return () => clearInterval(interval)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Testimonials data
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Client from Little Ferry",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-31%20010019-z39kWRQp0E8pqugGzNzkgsWztQSFKe.png",
      text: "Amazing transformation! Jimenez Services turned my garden into a dream oasis. Their attention to detail and professionalism exceeded all my expectations. I now enjoy every minute in my new outdoor space.",
      rating: 5,
    },
    {
      name: "John Davis",
      role: "Business Owner",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-31%20010101-3DJmFwAevTyPlHr3vsIrA7weXnQmqw.png",
      text: "The remodeling of our office was impeccable. The Jimenez team understood exactly what we needed and delivered exceptional results in record time. Our clients can't stop praising the new design.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      role: "Property Manager",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-31%20010143-g5zhIrqdafbDUWXWkoL9Ibua5dguNG.png",
      text: "As a manager of multiple properties, I value consistency and reliability. Jimenez Services always delivers with excellence, transforming each space with a unique touch and maintaining the highest quality in every project.",
      rating: 5,
    },
  ]

  // Portfolio items data
  const portfolioItems = [
    // Remodeling projects
    {
      title: "Complete Bathroom Transformation",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.25-CpCQmn9D9nAUd3qFaCTU2I9Iw9dKfo.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26-xCpRvT859Z09XQxaNHHY5tb13vMa6K.jpeg",
    },
    {
      title: "Attic Renovation",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.28-dQrMCrAbMJVpnsehimsIoXyo0V3kwi.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27%20%281%29-2cc09hsVgCuxBXpuiRoxHEiAr4GH2v.jpeg",
    },
    {
      title: "Modern Kitchen Renovation",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%282%29-nwEi3wEpYWn6f0dEjqWPsC77Q6q1jo.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.26%20%281%29-3xLNhK99Bak6DL5NFisMyLQl1FUBbL.jpeg",
    },
    {
      title: "Remodeling and finishing of a room",
      category: "remodeling",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-28%20at%2017.12.50-M1R7RXgPPB4pwHkApQfiDlJVCZSNe9.jpeg",
    },

    // Landscaping projects
    {
      title: "Complete Garden Transformation",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20%20%281%29-bqk7asm0NPvOV85HOVI9G9YgvRAdAV.jpeg",
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2023.05.20-HcZW7tGy7aYQ20LD1BdPOHEtF0GiQh.jpeg",
    },
    {
      title: "Road Design",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-OsEJe2YeWg3P6g3iXIq3wVL7xTih3B.jpeg",
    },
    {
      title: "Garden Maintenance",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.26-78p413j3LMqwgT63kJy72TCkUe4WGZ.jpeg",
    },
    {
      title: "Professional Landscaping",
      category: "gardening",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gardening-dA4wUJhJ1Ao0vhT88c5bBNsUZ0WFH8.jpeg",
    },
    {
      title: "Seasonal Garden Decoration",
      category: "gardening",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2022.24.16-CcEtkb5DKce0jIl6eigpcUT5MkrOM6.jpeg",
    },
  ]

  // Services data
  const services = {
    gardening: [
      {
        icon: <Leaf className="service-icon-svg" />,
        title: "Lawn Maintenance",
        description:
          "We provide professional cutting, fertilization, and customized treatments to keep your lawn green and healthy all year round.",
        features: ["Professional lawn cutting", "Scheduled fertilization", "Weed treatment"],
      },
      {
        icon: <Droplets className="service-icon-svg" />,
        title: "Irrigation Systems",
        description:
          "We install and repair efficient irrigation systems that ensure proper hydration of your garden, saving water and keeping your plants in optimal condition.",
        features: [
          "Installation of automatic sprinkler systems",
          "Repair and maintenance of existing systems",
          "Seasonal system adjustments and optimization",
        ],
      },
      {
        icon: <Shovel className="service-icon-svg" />,
        title: "Garden Maintenance",
        description:
          "We keep your garden looking its best year-round with professional care tailored to your landscape",
        features: ["Soil aeration", "Removal of leaves and branches", "Shrub pruning"],
      },
    ],
    remodeling: [
      {
        icon: <Paintbrush className="service-icon-svg" />,
        title: "Interior Remodeling",
        description:
          "We completely transform your interior spaces with modern and functional designs that reflect your personal style and improve your daily quality of life.",
        features: ["Kitchen and bathroom renovation", "Floor and finish installation", "Custom space design"],
      },
      {
        icon: <Hammer className="service-icon-svg" />,
        title: "Construction and Additions",
        description:
          "We carry out construction and expansion projects that increase the value of your property, from new rooms to complete structures with the highest quality standards.",
        features: ["Home additions", "Structure construction", "Facade renovation"],
      },
      {
        icon: <Tool className="service-icon-svg" />,
        title: "Finishes and Details",
        description:
          "We specialize in high-quality finishes and details that make a difference, from professional painting to electrical and plumbing installations.",
        features: ["Interior and exterior painting", "Electrical installations", "Carpentry and custom details"],
      },
    ],
    winter: [
      {
        icon: <Snowflake className="service-icon-svg" />,
        title: "Snow Removal",
        description:
          "We keep your spaces safe and accessible during winter with our professional snow removal service for residences and businesses, available 24/7.",
        features: ["Driveway and sidewalk clearing", "Roof snow removal", "24/7 emergency service"],
      },
      {
        icon: <AlertTriangle className="service-icon-svg" />,
        title: "De-icing Services",
        description:
          "We prevent the formation of dangerous ice with professional applications of salt and other de-icing agents, keeping your spaces safe throughout the winter.",
        features: ["Salt and sand application", "Preventive treatment", "Eco-friendly solutions available"],
      },
      {
        icon: <Truck className="service-icon-svg" />,
        title: "Winter Preparation",
        description:
          "We prepare your property to face winter with comprehensive services that include plant protection, pipe insulation, and preventive maintenance.",
        features: ["Garden and plant protection", "Heating system maintenance", "Preventive inspection"],
      },
    ],
  }

  // Features data
  const features = [
    {
      icon: <Award />,
      title: "Guaranteed Excellence",
      description:
        "We back every project with comprehensive guarantees and an unwavering commitment to superior quality in every detail.",
    },
    {
      icon: <Users />,
      title: "Elite Team",
      description:
        "Our certified professionals combine years of experience with the most innovative techniques in the industry.",
    },
    {
      icon: <Calendar />,
      title: "Perfect Punctuality",
      description:
        "We value your time as much as you do. We complete each project as scheduled, without surprises or delays.",
    },
    {
      icon: <Shield />,
      title: "Superior Materials",
      description: "We exclusively use top-quality materials that guarantee exceptional durability and lasting beauty.",
    },
  ]

  // Open image modal
  const openImageModal = (image) => {
    if (typeof image === "string") {
      setSelectedImage({
        single: image,
        title: "Jimenez Services",
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
    document.body.classList.add("modal-open")

    requestAnimationFrame(() => {
      const overlay = document.querySelector(".image-modal-overlay")
      if (overlay) {
        overlay.classList.add("open")
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
      }
    })
  }

  // Fix image modal styles
  useEffect(() => {
    if (isImageModalOpen) {
      const fixModal = () => {
        const overlay = document.querySelector(".image-modal-overlay")
        if (overlay) {
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)"

          const containers = overlay.querySelectorAll("div")
          containers.forEach((container) => {
            container.style.backgroundColor = "transparent"
            container.style.background = "transparent"
            container.style.border = "none"
            container.style.boxShadow = "none"
          })

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

      fixModal()
      const interval = setInterval(fixModal, 100)

      return () => clearInterval(interval)
    }
  }, [isImageModalOpen])

  // Close image modal
  const closeImageModal = () => {
    const overlay = document.querySelector(".image-modal-overlay")
    if (overlay) overlay.classList.remove("open")

    setTimeout(() => {
      document.body.classList.remove("modal-open")
      setIsImageModalOpen(false)
      setSelectedImage(null)
    }, 300)
  }

  // Filter portfolio items
  const filteredPortfolio =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmitForm = async (e) => {
    e.preventDefault()

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

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setFormStatus({ submitting: false, success: false, error: "Please enter a valid email address." })
      setModalMessage("Please enter a valid email address.")
      setModalType("error")
      return
    }

    setFormStatus({ submitting: true, success: false, error: null })
    setModalMessage("Sending your message...")
    setModalType("success")

    const formPayload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      serviceInterest: formData.serviceInterest,
      message: formData.message || "",
    }

    try {
      await emailjs.send("service_pnhuu6g", "template_9amkna5", formPayload, "hg3WQb2Z3IEZrqhe8")

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
    } catch (error) {
      console.error("FAILED...", error)
      setFormStatus({ submitting: false, success: false, error: "There was a problem sending the message." })
      setModalMessage("There was a problem sending the message.")
      setModalType("error")
    }
  }

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="main-nav-content">
            <div className="logo">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
                alt="Jimenez Services LLC - Professional Landscaping and Remodeling in Little Ferry, NJ"
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
                  HOME
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
                  ABOUT US
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
                  SERVICES <ChevronDown size={14} className="dropdown-indicator" />
                </a>
                <div className="dropdown-content">
                  <Link to="/jardineria" onClick={() => window.scrollTo(0, 0)}>
                    <TreePine size={16} className="dropdown-icon" /> Landscaping
                  </Link>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    <Hammer size={16} className="dropdown-icon" /> Remodeling and Construction
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
                  PORTFOLIO
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
                  TESTIMONIALS
                </a>
              </li>
            </ul>

            <div className="phone-button">
              <Phone size={18} className="phone-icon" />
              <span className="phone-number">551.587.9625</span>
            </div>

            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(heroRef)
                setIsMenuOpen(false)
              }}
            >
              HOME
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
              ABOUT US
            </a>
          </li>
          <li>
            <Link
              to="/jardineria"
              onClick={() => {
                window.scrollTo(0, 0)
                setIsMenuOpen(false)
              }}
            >
              LANDSCAPING
            </Link>
          </li>
          <li>
            <Link
              to="/interiores"
              onClick={() => {
                window.scrollTo(0, 0)
                setIsMenuOpen(false)
              }}
            >
              REMODELING AND CONSTRUCTION
            </Link>
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
              PORTFOLIO
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
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(contactRef)
                setIsMenuOpen(false)
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="hero-content z-10" onClick={(e) => e.stopPropagation()}>
        <h3 className="service-option-title">Select the service you need</h3>

          <div className="service-options">
            <Link to="/jardineria" className="service-option" onClick={() => window.scrollTo(0, 0)}>
              <div className="service-option-icon-container">
                <Leaf className="service-option-icon" />
              </div>
              <h3 className="service-option-title">Landscaping</h3>
              <div className="service-option-button">
                Explore Services
                <ArrowRight className="service-option-arrow" size={16} />
              </div>
            </Link>

            <Link to="/interiores" className="service-option" onClick={() => window.scrollTo(0, 0)}>
              <div className="service-option-icon-container">
                <Hammer className="service-option-icon" />
              </div>
              <h3 className="service-option-title">Remodeling and Construction</h3>
              <div className="service-option-button">
                Explore Services
                <ArrowRight className="service-option-arrow" size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section about-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Jimenez Services in New Jersey</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">OUR HISTORY</p>
          </div>
          <div className="about-content">
            <div className="about-image-grid">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-13%20at%2020.25.15-IeRxiFOPgLISDQGOlZewhpSH0uPm7k.jpeg",
                  title: "Professional Equipment",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-01%20at%2020.42.36%20%281%29-icj0LHrAp3Na1gonwQXS3YZih71nq0.jpeg",
                  title: "Winter equipment",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.30-reCfkY0qNcuPQoRYvWvbGyLWthgSqj.jpeg",
                  title: "Remodeling in Process",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27-EqiOMY03IlblCJkSzaIHSZu2GPcI9r.jpeg",
                  title: "Modern Kitchen",
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
                  <img src={image.src || "/placeholder.svg"} alt={image.title} />
                  <div className="about-image-overlay">
                    <div className="about-image-title">{image.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-text">
              <h3>Passion for Excellence in Every Project</h3>
              <p>
                At Jimenez Services LLC, we don't just improve homes — we bring your vision to life. Our expert team
                blends creativity with craftsmanship to deliver stunning results in landscaping, remodeling,
                construction, and snow removal.
              </p>
              <p>
                Based in Little Ferry, New Jersey, we proudly serve the entire metropolitan area. With a strong
                reputation built on exceptional quality, trust, and attention to detail, we go beyond expectations —
                turning spaces into experiences that last.
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

      {/* Services Section */}
      <section ref={servicesRef} className="section services-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services in Little Ferry, NJ</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">PROFESSIONAL SOLUTIONS</p>
          </div>
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "gardening" ? "active" : ""}`}
              onClick={() => setActiveTab("gardening")}
            >
              <Leaf className="tab-icon" />
              Landscaping Services
            </button>
            <button
              className={`tab-button ${activeTab === "remodeling" ? "active" : ""}`}
              onClick={() => setActiveTab("remodeling")}
            >
              <HomeIcon className="tab-icon" />
              Remodeling and Construction Services
            </button>
            <button
              className={`tab-button ${activeTab === "winter" ? "active" : ""}`}
              onClick={() => setActiveTab("winter")}
            >
              <Snowflake className="tab-icon" />
              Winter Services
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

      {/* Portfolio Section */}
      <section ref={galleryRef} className="section portfolio-section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Portfolio</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">FEATURED PROJECTS</p>
          </div>
          <div className="portfolio-filter">
            <button
              className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              ALL
            </button>
            <button
              className={`filter-button ${activeFilter === "gardening" ? "active" : ""}`}
              onClick={() => setActiveFilter("gardening")}
            >
              LANDSCAPING
            </button>
            <button
              className={`filter-button ${activeFilter === "remodeling" ? "active" : ""}`}
              onClick={() => setActiveFilter("remodeling")}
            >
              REMODELING
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
                        {item.category === "gardening" ? "Landscaping" : "Remodeling"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section testimonials-section animate-on-scroll">
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
      {modalMessage && <Modal message={modalMessage} type={modalType} />}

      {/* Contact Section */}
      <section ref={contactRef} className="section contact-section animate-on-scroll">
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
                You're just one message away from turning your ideas into reality. Contact us today for a personalized
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
                    <p>24 hours a day, 365 days a year</p>
                    <p>Free Estimate</p>
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
                  {formStatus.submitting ? "SENDING..." : "GET A FREE QUOTE"}
                </button>
                {sendingMessage && <div className="sending-message">One moment please, your data is being sent...</div>}
                <Modal isOpen={modalOpen} message={modalMessage} onClose={() => setModalOpen(false)} />

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
                  alt="Jimenez Services LLC - Professional Landscaping and Remodeling in Little Ferry, NJ"
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
                Transforming ordinary spaces into extraordinary ones since 2018. Our commitment: excellence, innovation,
                and guaranteed satisfaction in every project.
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
                  <a
                    href="#inicio"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(heroRef)
                    }}
                  >
                    Home
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
                    About Us
                  </a>
                </li>
                <li>
                  <Link to="/jardineria" onClick={() => window.scrollTo(0, 0)}>
                    Landscaping
                  </Link>
                </li>
                <li>
                  <Link to="/interiores" onClick={() => window.scrollTo(0, 0)}>
                    Remodeling
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
                    Portfolio
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
                    Testimonials
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
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>Little Ferry, NJ</p>
              <p>
                Phone: <a href="tel:5515879625">551-587-9625</a>
              </p>
              <p>
                Email: <a href="mailto:mjimenezlandscaping80@gmail.com">mjimenezlandscaping80@gmail.com</a>
              </p>
              <p>24 hours a day, 365 days a year</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Jimenez Services LLC - Professional Landscaping, Remodeling, and Snow
              Removal in Little Ferry, New Jersey. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Estimate Button */}
      <div className="new-floating-estimate-btn" onClick={() => scrollToSection(contactRef)}>
        <Mail className="estimate-btn-icon" />
        <span className="estimate-btn-text">Free Estimate</span>
      </div>

      {/* Image Modal */}
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
                    alt={`Before: ${selectedImage.title}`}
                    style={{ maxWidth: "45vw", maxHeight: "85vh", objectFit: "contain", border: "none" }}
                  />
                </div>
                <div className="modal-after" style={{ flex: 1, background: "transparent", border: "none" }}>
                  <img
                    src={selectedImage.after || "/placeholder.svg"}
                    alt={`After: ${selectedImage.title}`}
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
