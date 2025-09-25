import { useState } from "react";
import useSEO from "../hooks/useSEO";
import useImageModal from "../hooks/useImageModal";
import useAnimations from "../hooks/useAnimations";
import useScrollToTop from "../hooks/useScrollToTop";

import Hero from "../components/gardening/Hero";
import About from "../components/gardening/About";
import Services from "../components/gardening/Services";
import Portfolio from "../components/gardening/Portfolio";
import Process from "../components/gardening/Process";
import ContactForm from "../components/ContactForm";
import ImageModal from "../components/gardening/ImageModal";
import Modal from "./Modal";

import "./gardening.css";

export default function Gardening() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");

  useSEO({
    title: "Expert Landscaping Services in New Jersey | Jimenez Services LLC",
    description:
      "Enhance your outdoor space with our expert landscaping services in New Jersey. We offer lawn maintenance, garden design, irrigation systems, and more. Contact us for a free estimate.",
    keywords:
      "landscaping New Jersey, lawn maintenance NJ, garden design Little Ferry, irrigation systems, professional gardening, lawn care, mulch installation",
    ogUrl: window.location.href,
    ogImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%2020.40.30-sSuA8aE5YRtU40hUQT3wjnyT8obYmO.jpeg",
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