import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  return (
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
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Link to="/remodeling" onClick={() => window.scrollTo(0, 0)}>
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
                          <p>Always Available</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Jimenez Services LLC - Professional Landscaping Services in Little
            Ferry, New Jersey. All rights reserved.
          </p>
        </div>
      </div>
      <div className="new-floating-estimate-btn" onClick={() => scrollToContact()}>
        <Mail className="estimate-btn-icon" />
        <span className="estimate-btn-text">Free Estimate</span>
      </div>
    </footer>
  );
}
