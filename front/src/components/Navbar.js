import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  HomeIcon,
  Leaf,
  Hammer,
  Mail,
} from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const mobileMenuComponent = (
    <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
      <ul className="mobile-nav-links">
        <li>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            <HomeIcon size={18} className="menu-icon" /> HOME
          </Link>
        </li>
        {isHomePage && (
          <>
            <li>
              <a href="#servicios" onClick={() => scrollToSection("servicios")}>
                <Leaf size={18} className="menu-icon" /> SERVICES
              </a>
            </li>
            <li>
              <a href="#portafolio" onClick={() => scrollToSection("portafolio")}>
                <Hammer size={18} className="menu-icon" /> PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#testimonios" onClick={() => scrollToSection("testimonios")}>
                <Mail size={18} className="menu-icon" /> TESTIMONIALS
              </a>
            </li>
          </>
        )}
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            <Mail size={18} className="menu-icon" /> CONTACT
          </a>
        </li>
        <li>
          <Link
            to="/remodeling"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
          >
            <Hammer size={18} className="menu-icon" /> REMODELING
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="main-nav-content">
          <div className="logo">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2021.14.20-doLb43PNbRsdNXYnmyLK5ZKJQK8ySK.jpeg"
              alt="Jimenez Services LLC Logo"
              className="logo-image"
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
                <Link to="/landscaping" className={location.pathname === '/landscaping' ? 'active' : ''} onClick={() => window.scrollTo(0, 0)}>
                  <Leaf size={16} className="dropdown-icon" /> Landscaping
                </Link>
                <Link to="/remodeling" className={location.pathname === '/remodeling' ? 'active' : ''} onClick={() => window.scrollTo(0, 0)}>
                  <Hammer size={16} className="dropdown-icon" /> Remodeling and Construction
                </Link>
              </div>
            </li>
            {isHomePage && (
              <>
                <li>
                  <a href="#portafolio" onClick={() => scrollToSection("portafolio")}>PORTFOLIO</a>
                </li>
                <li>
                  <a href="#testimonios" onClick={() => scrollToSection("testimonios")}>TESTIMONIALS</a>
                </li>
              </>
            )}
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>CONTACT</a>
            </li>
          </ul>

          <div className="phone-button">
            <Phone size={18} className="phone-icon" />
            <span className="phone-number">551.587.9625</span>
          </div>

          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {mobileMenuComponent}
        </div>
      </div>
    </nav>
  );
}
