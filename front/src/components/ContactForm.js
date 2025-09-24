import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../pages/Modal";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.serviceInterest) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Please complete all required fields (name, email, phone and service).",
      });
      setModalMessage("Please complete all required fields.");
      setModalType("error");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setFormStatus({ submitting: false, success: false, error: "Please enter a valid email address." });
      setModalMessage("Please enter a valid email address.");
      setModalType("error");
      return;
    }

    setFormStatus({ submitting: true, success: false, error: null });
    setModalMessage("Sending your message...");
    setModalType("success");

    const formPayload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      serviceInterest: formData.serviceInterest,
      message: formData.message || "",
    };

    try {
      await emailjs.send("service_pnhuu6g", "template_9amkna5", formPayload, "hg3WQb2Z3IEZrqhe8");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });

      setFormStatus({ submitting: false, success: true, error: null });
      setModalMessage("Message sent successfully!");
      setModalType("success");
    } catch (error) {
      console.error("FAILED...", error);
      setFormStatus({ submitting: false, success: false, error: "There was a problem sending the message." });
      setModalMessage("There was a problem sending the message.");
      setModalType("error");
    }
  };

  return (
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
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Little Ferry, NJ 07643</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>551-587-9625</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>mjimenezlandscaping80@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h4>Hours</h4>
                  <p>Always Available</p>
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
      {modalMessage && <Modal message={modalMessage} type={modalType} />}
    </section>
  );
}