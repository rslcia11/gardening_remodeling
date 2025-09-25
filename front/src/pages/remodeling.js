import { useState } from "react";
import useSEO from "../hooks/useSEO";
import useImageModal from "../hooks/useImageModal";
import useAnimations from "../hooks/useAnimations";
import useScrollToTop from "../hooks/useScrollToTop";

import Hero from "../components/remodeling/Hero";
import About from "../components/remodeling/About";
import Services from "../components/remodeling/Services";
import Portfolio from "../components/remodeling/Portfolio";
import Process from "../components/remodeling/Process";
import ContactForm from "../components/ContactForm";
import ImageModal from "../components/remodeling/ImageModal";
import Modal from "./Modal";

import "./remodeling.css";

export default function Remodeling() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  useSEO({
    title: "Premier Remodeling & Construction Services in NJ | Jimenez Services LLC",
    description:
      "Upgrade your home with premier remodeling and construction services in New Jersey. We specialize in kitchen, bathroom, and basement renovations. Get your free quote today!",
    keywords:
      "remodeling New Jersey, construction services NJ, home renovation Little Ferry, kitchen remodeling, bathroom renovation, basement finishing, interior design",
    ogUrl: window.location.href,
    ogImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-19%20at%2018.20.27-u5yimx9QxZlCr8kcR53othrfFvn6qu.jpeg",
  });

  useAnimations();
  useScrollToTop();

  const { isImageModalOpen, selectedImage, openImageModal, closeImageModal } = useImageModal();

  return (
    <div className="page-container">
      <Hero isVisible={isVisible} />
      {modalMessage && <Modal message={modalMessage} type={modalType} />}
      <About openImageModal={openImageModal} />
      <Services />
      <Portfolio openImageModal={openImageModal} />
      <Process />
      <ContactForm />
      <ImageModal isOpen={isImageModalOpen} onClose={closeImageModal} image={selectedImage} />
    </div>
  );
}